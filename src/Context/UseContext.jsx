import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebae.init";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Toaster } from "react-hot-toast";

// Create Context.
export const authContext = createContext();

const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Provider
  const googleProvider = new GoogleAuthProvider();
  //   Facebook Provider
  const facebookProvider = new FacebookAuthProvider();

  //   Create User WIth Email & Password.
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login WIth Email and Password.
  const signInEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   Facebook Login
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  // Sign-Out
  const logOut = () => {
    return signOut(auth);
  };

  // user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      return () => {
        return unsubscribe();
      };
    });
  }, [auth]);

  //   Context Value.
  const authInfo = {
    user,
    loading,
    createUserWithEmail,
    signInEmail,
    googleLogin,
    facebookLogin,
    logOut,
  };
  return (
    // Context Provider.
    <authContext.Provider value={authInfo}>
      {children}{" "}
      <Toaster duration="4000" position="top-center" reverseOrder={false} />
    </authContext.Provider>
  );
};

export default UseContext;
