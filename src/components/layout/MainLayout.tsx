import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
}
