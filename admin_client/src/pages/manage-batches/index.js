import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import ManageBatchesPage from "src/sections/batches/manage-batches-page";

function Page() {
  return <ManageBatchesPage />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
