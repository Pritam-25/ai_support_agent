import { AuthGuard } from "@/modules/auth/ui/component/auth-guard";
import OrganizationGuard from "@/modules/auth/ui/component/organization-gurad";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <AuthGuard>
      <OrganizationGuard>
        {children}
      </OrganizationGuard>
    </AuthGuard>
  );
}