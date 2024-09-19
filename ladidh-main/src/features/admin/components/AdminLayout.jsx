import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import MenuSvg from "../../../assets/ui/MenuSvg";
import SmallScreenSidebar from "./SmallScreenSidebar";

const AdminLayout = () => {
  return (
    <main className="sm:flex ">
      <div>
        <span className="hidden sm:block sticky top-0">
          <AdminSidebar />
        </span>
        <div className="border rounded-lg sm:hidden mx-5 mt-5 w-fit">
          <MenuSvg Component={SmallScreenSidebar} />
        </div>
      </div>
      <section className="p-5 flex-grow w-full">
        <Outlet />
      </section>
    </main>
  );
};

export default AdminLayout;
