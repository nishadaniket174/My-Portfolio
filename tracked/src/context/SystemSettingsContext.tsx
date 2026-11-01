import React, { createContext, useContext, useEffect, useState } from 'react'

export type ThemeMode = 'tactical-night' | 'high-visibility'
export type FontSizeScale = 'sm' | 'md' | 'lg' | 'max'

interface SystemSettingsContextType {
  theme: ThemeMode
  fontSize: FontSizeScale
  setTheme: (theme: ThemeMode) => void
  setFontSize: (fontSize: FontSizeScale) => void
  toggleTheme: () => void
}

const SystemSettingsContext = createContext<SystemSettingsContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'ak_sys_theme'
const FONT_STORAGE_KEY = 'ak_sys_font_scale'

export function SystemSettingsProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY)
      if (stored === 'high-visibility' || stored === 'tactical-night') {
        return stored
      }
    }
    return 'tactical-night'
  })

  const [fontSize, setFontSizeState] = useState<FontSizeScale>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(FONT_STORAGE_KEY)
      if (stored === 'sm' || stored === 'md' || stored === 'lg' || stored === 'max') {
        return stored
      }
    }
    return 'md'
  })

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    }
  }

  const setFontSize = (nextSize: FontSizeScale) => {
    setFontSizeState(nextSize)
    if (typeof window !== 'undefined') {
      localStorage.setItem(FONT_STORAGE_KEY, nextSize)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'tactical-night' ? 'high-visibility' : 'tactical-night')
  }

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement

    // Apply data-theme attribute
    root.setAttribute('data-theme', theme)

    // Apply data-font-scale attribute
    root.setAttribute('data-font-scale', fontSize)
  }, [theme, fontSize])

  return (
    <SystemSettingsContext.Provider
      value={{
        theme,
        fontSize,
        setTheme,
        setFontSize,
        toggleTheme,
      }}
    >
      {children}
    </SystemSettingsContext.Provider>
  )
}

export function useSystemSettings() {
  const ctx = useContext(SystemSettingsContext)
  if (!ctx) {
    throw new Error('useSystemSettings must be used within a SystemSettingsProvider')
  }
  return ctx
}

