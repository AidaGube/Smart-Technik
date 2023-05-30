import React, { useContext, useEffect } from "react";
import { AdminAddButton } from "../components/Admin/AdminAddButton";
import { JustSlider } from "../components/JustSlider/JustSlider";
import { ProductList } from "../components/ProductList/ProductList";
import { appContext } from "../context/appContext";
import { useAdmin } from "../hooks/useAdmin";
import { useUser } from "../hooks/useUser";

export const HomePage = () => {
  const isAdmin = useAdmin();
  const user = useUser();
  const { getUsersFromFirebase } = useContext(appContext);
  useEffect(() => {
    getUsersFromFirebase();
  }, [user]);

  return (
    <div>
      <JustSlider />
      <ProductList />
      {isAdmin ? <AdminAddButton /> : <></>}
    </div>
  );
};
