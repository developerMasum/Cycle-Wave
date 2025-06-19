import { Outlet } from "react-router";
import { Sidebar } from "../Dashboard/utils/Sidebar";
import ScrollToTop from "../common/ScrollTop";
import BottomNavbar from "../common/BottomNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <ScrollToTop />
      <Sidebar />
      <BottomNavbar />
      <div className="w-full min-h-screen py-8 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
