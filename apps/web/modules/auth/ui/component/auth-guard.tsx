"use client"

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react"
import { AuthLayout } from "../layouts/auth-layout"
import SignInView from "../views/sign-in-view"

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Authenticated>
        {children}
      </Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
      <AuthLoading>
        <AuthLayout>
          <div>Loading...</div>
        </AuthLayout>
      </AuthLoading>
    </>
  );
}