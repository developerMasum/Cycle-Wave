import { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import {
  selectCurrentUser,
  useCurrentToken,
} from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

export default function PrivateRoutes({
  children,
  AdminRoutes,
}: {
  children: ReactNode;
  AdminRoutes?: true;
}) {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  if (!token) {
    return <Navigate to={"/auth/login"} replace={true} />;
  }

  if (AdminRoutes) {
    if (user?.role !== "ADMIN") {
      return <Navigate to={"/auth/login"} replace={true} />;
    }
  }
  return children;
}
