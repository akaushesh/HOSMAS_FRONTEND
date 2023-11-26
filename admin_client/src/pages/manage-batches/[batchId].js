import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import ViewBatchDetailsPage from "src/sections/batches/batch-details-page";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();
  const id = router.query.batchId;

  return <ViewBatchDetailsPage batchId={id} />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
