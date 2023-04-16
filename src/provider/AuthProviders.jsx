import React, { children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const info={
        user,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;