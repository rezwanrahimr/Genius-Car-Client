import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebae.init";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

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
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login WIth Email and Password.
  const signInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   Facebook Login
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  }; // user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (uid) {
          setUser(user);
        }
      }
      return () => {
        return unsubscribe();
      };
    });
  }, []);

  //   Context Value.
  const authInfo = {
    user,
    loading,
    createUserWithEmail,
    signInEmail,
    googleLogin,
    facebookLogin,
  };
  return (
    // Context Provider.
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default UseContext;
