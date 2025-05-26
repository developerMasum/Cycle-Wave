import { Navigate } from "react-router-dom";
import { dashboardItems } from "../components/Dashboard/utils/SidebarRoutesGenerater";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <Navigate to="/dashboard/analytics" replace />,
  },
  ...dashboardItems.routes,
];
