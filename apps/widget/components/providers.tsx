"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ConvexProvider, ConvexReactClient } from "convex/react"

/**
 * Wraps its children with theme and Convex providers.
 *
 * Provides theme configuration via NextThemesProvider and supplies a ConvexReactClient (constructed from
 * the NEXT_PUBLIC_CONVEX_URL environment variable, falling back to an empty string) to descendants via ConvexProvider.
 *
 * @param children - React nodes to render inside the providers.
 * @returns The provided children wrapped with theme and Convex contexts.
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
