import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import ViewBatchDetailsPage from "src/sections/batches/batch-details-page";

function Page() {
  return <ViewBatchDetailsPage />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
