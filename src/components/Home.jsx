import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
           <p>{user && user.displayName}</p>
        </div>
    );
};

export default Home;