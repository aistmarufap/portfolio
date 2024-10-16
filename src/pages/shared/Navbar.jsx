import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar  ">
                <ul className="nav-list">
                    <li className='play_bankai'><ActiveLink to="/">Home</ActiveLink></li>
                    <li className='play_bankai'><ActiveLink to="/about">About</ActiveLink></li>
                    <li className='play_bankai'><ActiveLink to="/contact">Contact</ActiveLink></li>
                    <li className='play_bankai'><ActiveLink to="/blog">Blog</ActiveLink></li>
                    <li className='play_bankai'><ActiveLink to="/portfolio">Portfolio</ActiveLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;