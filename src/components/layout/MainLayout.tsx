import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
}
