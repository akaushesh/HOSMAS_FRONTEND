import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import ViewGroupsPage from "src/sections/groups/manage-groups-page";

function Page() {
  return <ViewGroupsPage />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
