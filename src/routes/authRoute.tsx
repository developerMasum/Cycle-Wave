import Login from "../pages/authentications/Login";
import SignUp from "../pages/authentications/Signup";

export const authRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
];
