'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Cambiar tema de color"
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 hover:text-foreground transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300" />
      )}
    </button>
  )
}

