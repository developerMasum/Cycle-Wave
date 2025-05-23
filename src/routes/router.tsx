import { createBrowserRouter } from "react-router";
import NotFound from "../components/common/NotFound";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/Services/Services";
import Contact from "../pages/contact/Contact";
import Shop from "../pages/shop/Shop";
import ProductDetails from "../pages/product-details/ProductDetails";
import Wishlist from "../pages/wish-list/wishlist";
import Checkout from "../pages/checkout/Checkout";
import AuthLayout from "../components/layout/AuthLayout";
import { authRoutes } from "./authRoute";
import Profile from "../pages/profile/Profile";
import MyOrders from "../pages/my-orders/MyOrders";
import COD_Success from "../pages/order-success/COD_Success";
import OrderDetails from "../pages/order-details/OrderDetails";

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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/order-details/:id",
        element: <OrderDetails />,
      },
      {
        path: "checkout/COD/success/:id",
        element: <COD_Success />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: authRoutes,
  },
]);

export default router;
