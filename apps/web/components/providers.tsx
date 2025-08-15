"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ConvexProvider, ConvexReactClient } from "convex/react"

/**
 * Wraps app content with theme and Convex data providers.
 *
 * Provides class-based theming (honoring system preference) via NextThemesProvider
 * and a Convex React client via ConvexProvider. The Convex client is constructed
 * from the NEXT_PUBLIC_CONVEX_URL environment variable (falls back to an empty string).
 *
 * @param children - React nodes to render inside the providers
 */
export function Providers({ children }: { children: React.ReactNode }) {

  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <ConvexProvider client={convex}>
        {children}
      </ConvexProvider>
    </NextThemesProvider>
  )
}
