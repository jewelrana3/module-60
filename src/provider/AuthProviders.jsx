import React, { Children, createContext } from 'react';


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const user = {displayName:'bro bhai'}
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;