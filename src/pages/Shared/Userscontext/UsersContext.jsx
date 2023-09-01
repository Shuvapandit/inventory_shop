import React, { useEffect } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import app from "../../../firebase/firebase.config";
import { useState } from "react";
export const UsersauthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const UsersContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signinwithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  //observe auth sate change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      /* console.log('authsatate change' ,currentUser); */
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signinwithGoogle,
  };

  return (
    <UsersauthContext.Provider value={authInfo}>
      {children}
    </UsersauthContext.Provider>
  );
};

export default UsersContext;
