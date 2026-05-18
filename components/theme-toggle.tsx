'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting until mounted on client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-9" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Cambiar tema de color"
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-primary transition-all duration-200 hover:scale-110 hover:bg-primary/10 active:scale-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/50"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-all duration-300 animate-in spin-in-45" />
      ) : (
        <Moon className="h-5 w-5 transition-all duration-300 animate-in spin-in-45" />
      )}
    </button>
  )
}
