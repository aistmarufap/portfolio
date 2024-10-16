import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveIcon = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive && "active_icon"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveIcon;