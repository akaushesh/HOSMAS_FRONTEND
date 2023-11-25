import React from "react";
import ManageFaqPage from "src/sections/FAQ/manage-faq-page";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

function Page() {
  return <ManageFaqPage />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
