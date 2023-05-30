import React from "react";
import { ButtonImg } from "../Buttons/ButtonImg";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete-white.svg";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export const AdminButtons = ({ id }) => {
  const navigate = useNavigate();

  const deleteProduct = async () => {
    const productRef = doc(db, "products", id);
    await deleteDoc(productRef);
    navigate("/");
  };
  const updateProduct = async () => {
    navigate(`/admin/update/product/${id}`);
  };

  return (
    <div className='admin__buttons '>
      <div onClick={updateProduct}>
        <ButtonImg defaultClassName='detail' image={editIcon} />
      </div>
      <div onClick={deleteProduct}>
        <ButtonImg defaultClassName='' image={deleteIcon} />
      </div>
    </div>
  );
};
