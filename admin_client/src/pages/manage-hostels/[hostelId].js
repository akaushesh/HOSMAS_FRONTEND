import React from "react";
import HostelDetails from "src/sections/hostels/hostel-details";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();
  const id = router.query.hostelId;

  return <HostelDetails hostelId={id} />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
