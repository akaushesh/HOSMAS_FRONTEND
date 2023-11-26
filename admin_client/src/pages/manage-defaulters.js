import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import ViewDefaultersPage from "src/sections/defaulters/view-defaulters-page";

function Page() {
  return <ViewDefaultersPage />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
