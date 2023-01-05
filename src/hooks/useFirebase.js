import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState();

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };
  const handleSignInWithGithub = () => {
    console.log("Sign in with Github");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    user,
    handleSignInWithGoogle,
    handleSignInWithGithub,
    handleSignOut,
  };
};

export default useFirebase;
