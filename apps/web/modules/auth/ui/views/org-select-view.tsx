"use client";
import { OrganizationList } from "@clerk/nextjs";

export default function OrganizationSelectView() {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      hidePersonal
      skipInvitationScreen
    />
  );
}