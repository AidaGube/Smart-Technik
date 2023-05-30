import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const useUser = () => {
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      if (!user) {
        setUser(_user);
      } else {
        return user;
      }
    });
  }, [user]);
  return user;
};
