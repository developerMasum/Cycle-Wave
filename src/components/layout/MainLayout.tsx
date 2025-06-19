import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";
import ScrollToTop from "../common/ScrollTop";
import BottomNavbar from "../common/BottomNavbar";

export default function MainLayout() {
  return (
    <div>
      <div>
        <ScrollToTop />
        <Navbar />
        <BottomNavbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
