import {
  BarChart2,
  Users,
  PackageSearch,
  SquareChartGantt,
} from "lucide-react";
import { DashBoardItemsData, SidebarItems } from "../../../types";
import Analytics from "../../../pages/dashboard/Analytics";
import { ManageUsers } from "../../../pages/dashboard/ManageUsers";

const dashBoardItemsData: DashBoardItemsData[] = [
  {
    title: "Analytics",
    icon: <BarChart2 size={18} />,
    path: "analytics",
    component: <Analytics />,
  },
  {
    title: "Manage user",
    icon: <Users size={18} />,
    path: "manage-user",
    component: <ManageUsers />,
  },
  {
    title: "Manage Products",
    icon: <PackageSearch size={18} />,
    path: "manage-product",
    component: "<ManageProducts />",
  },
  {
    title: "Manage Orders",
    icon: <SquareChartGantt size={18} />,
    path: "manage-order",
    component: "<ManageOrders />",
  },
];

const routes = dashBoardItemsData.map((item) => ({
  path: item.path,
  element: item.component,
}));
const sidebarItems: SidebarItems[] = dashBoardItemsData.map((item) => ({
  title: item.title,
  icon: item.icon,
  path: item.path,
  section: item?.section,
}));

export const dashboardItems = { routes, sidebarItems };
