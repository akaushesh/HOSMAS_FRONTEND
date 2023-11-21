import React from "react";
import ManageHostelsPage from "src/sections/hostels/manage-hostels-page";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

function Page() {
  return <ManageHostelsPage />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
