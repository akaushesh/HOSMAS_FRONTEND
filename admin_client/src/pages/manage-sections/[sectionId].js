import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import SectionPreference from "src/sections/preferences/section-details";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();
  const sectionId = router.query.sectionId;

  return <SectionPreference sectionId={sectionId} />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
