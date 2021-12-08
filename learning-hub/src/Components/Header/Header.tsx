import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {

    return <div className={classes.mainContainer}>

        <p>Header</p>

        {/* Navigation */}
        <div className={classes.nav}>


            <NavLink to="/" >
                Home
            </NavLink>
            <NavLink to="/about" >
                About
            </NavLink>

        </div>
    </div>
}

