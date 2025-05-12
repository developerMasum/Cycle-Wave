import { createBrowserRouter } from "react-router";
import NotFound from "../components/common/NotFound";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

export default router;
