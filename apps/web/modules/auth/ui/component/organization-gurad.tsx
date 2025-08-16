"use client"

import { useOrganization } from '@clerk/nextjs';
import { AuthLayout } from '../layouts/auth-layout';
import OrganizationSelectView from '../views/org-select-view';

export default function OrganizationGuard({ children }: { children: React.ReactNode }) {
  const { organization } = useOrganization();

  if (!organization) {
    return <AuthLayout>
      <OrganizationSelectView />
    </AuthLayout>;
  }

  return (
    <section>
      {children}
    </section>
  );
}