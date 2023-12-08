import React from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { AdminAccountProfilePage } from "src/sections/account/admin-account-profile-details";

const now = new Date();

const Page = () => {
  return <AdminAccountProfilePage />;
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
