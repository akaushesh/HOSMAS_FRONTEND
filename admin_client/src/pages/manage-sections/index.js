import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import ManageSectionsPage from "src/sections/preferences/manage-sections-page";

function Page() {
  return <ManageSectionsPage />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
