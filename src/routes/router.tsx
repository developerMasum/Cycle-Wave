import { createBrowserRouter } from "react-router";
import NotFound from "../components/common/NotFound";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";

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
    ],
  },
]);

export default router;
