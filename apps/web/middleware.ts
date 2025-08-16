import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
])

const isOrgFreeRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/org-selection(.*)",
])

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();

  if (!isPublicRoute(req)) {
    await auth.protect()
  }

  if(userId && !orgId && !isOrgFreeRoute(req)) {
    // If the user is logged in, but hasn’t chosen an org yet, and they’re trying to access a page that needs an org, redirect them to the org selection page.

    const searchParams = new URLSearchParams({redirectUrl: req.url});
    // Stores the original URL the user was trying to visit into a query param called redirectUrl 

    const orgSelectionUrl = new URL(`/org-selection?${searchParams.toString()}`, req.url);
    // Constructs the org selection URL with the redirect URL as a query parameter

    return NextResponse.redirect(orgSelectionUrl);
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}