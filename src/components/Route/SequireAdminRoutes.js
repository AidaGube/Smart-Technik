import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAdmin } from "../../hooks/useAdmin";
import { useUser } from "../../hooks/useUser";

export const SequireAdminRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAdmin = useAdmin();
  const user = useUser();
  useEffect(() => {
    if (pathname.includes("/admin")) {
      if (!isAdmin) {
        navigate("/");
      }
    }
    if (pathname.includes("/user")) {
      if (!user) {
        navigate("/");
      }
    }
  }, [pathname]);
  return <>{children}</>;
};
