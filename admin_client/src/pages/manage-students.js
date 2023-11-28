import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import ManageStudentsPage from "src/sections/students/manage-students-page";

function Page() {
  return <ManageStudentsPage />;
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
