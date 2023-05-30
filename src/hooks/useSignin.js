import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase/config";

let user = null;
const useSignin = async () => {
  // const useSigninWithGoogle = async () => {
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  // };
  // return { user, useSigninWithGoogle };
};
export default { useSignin, user };
