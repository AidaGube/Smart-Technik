import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";
import { Tabs } from "../components/ProductDetail/Tabs";
import { appContext } from "../context/appContext";
import { AdminButtons } from "../components/Admin/AdminButtons";
import { useAdmin } from "../hooks/useAdmin";

// import useAdmin from "../hooks/useAdmin";

export const DetailProductPage = () => {
  const { id } = useParams();
  const { getProductDetailFromFirebase } = useContext(appContext);

  useEffect(() => {
    getProductDetailFromFirebase(id);
  }, []);

  const isAdmin = useAdmin();

  return (
    <div>
      <ProductDetail />
      <Tabs />
      {isAdmin ? <AdminButtons id={id} /> : <></>}
    </div>
  );
};
