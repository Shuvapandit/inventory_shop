import React from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from 'react'
import app from '../../../firebase/firebase.config';
import { useState } from 'react';
export const UsersauthContext =createContext(null);
const auth = getAuth(app);
const UsersContext = ({children}) => {
const [user,setUser]=useState();
const createUser=(email,password)=>{
 return createUserWithEmailAndPassword(auth,email,password);
}
const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth, email, password);

}
const authInfo={
    user,
    createUser,
    signIn

}

  return (
    <UsersauthContext.Provider value={authInfo}>
     {children}
    </UsersauthContext.Provider>
    

  )
}

export default UsersContext