import React, { children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubcribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('observe on change',currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return()=>{
            unsubcribe();
        }
    },[])
    const info={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;