interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimits = new Map<string, RateLimitEntry>()

const WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // max requests per window

export function rateLimit(ip: string): { allowed: boolean; retryAfter: number | null } {
  const now = Date.now()
  const entry = rateLimits.get(ip)

  if (!entry || now > entry.resetAt) {
    // Lazy cleanup: remove stale entries for this IP
    if (entry) {
      rateLimits.delete(ip)
    }
    rateLimits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, retryAfter: null }
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
  }

  entry.count++
  return { allowed: true, retryAfter: null }
}

// Periodic cleanup to prevent memory leaks in long-running processes.
// In serverless environments this interval may not fire, but lazy cleanup
// above ensures stale entries are still removed on demand.
const cleanupInterval = setInterval(() => {
  const now = Date.now()
  for (const [ip, entry] of rateLimits.entries()) {
    if (now > entry.resetAt) {
      rateLimits.delete(ip)
    }
  }
}, 5 * 60 * 1000)

// Prevent the process from exiting due to this interval in serverless
if (cleanupInterval.unref) {
  cleanupInterval.unref()
}
