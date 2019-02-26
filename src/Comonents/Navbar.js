import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Create an Account</Link>
                </li>
                <li>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </li>
                <hr/>
            </ul>
        </nav>
    )
}
export default Navbar