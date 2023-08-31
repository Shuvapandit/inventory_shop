import React, { useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from 'react'
import app from '../../../firebase/firebase.config';
import { useState } from 'react';
export const UsersauthContext =createContext(null);
const auth = getAuth(app);
const UsersContext = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
const createUser=(email,password)=>{
 return createUserWithEmailAndPassword(auth,email,password);
}
const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth, email, password);

}
const logOut=()=>{
  return signOut(auth);
}
//observe auth sate change
useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth,currentUser=>{
    console.log('authsatate change' ,currentUser);
    setUser(currentUser);
    setLoading(false);
  });
  return ()=>{
    unsubscribe();
  }

},[])
const authInfo={
    user,
    loading,
    createUser,
    signIn,
    logOut

}

  return (
    <UsersauthContext.Provider value={authInfo}>
     {children}
    </UsersauthContext.Provider>
    

  )
}

export default UsersContext