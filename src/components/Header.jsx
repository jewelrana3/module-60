import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>cons.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
               { user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-dark">Sign out</button>
                    </> : <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;