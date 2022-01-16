import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './../../Pages/Container.module.css'


export const PythonNav = () => {

    return <div>

        <h3>Python Tutorial</h3>


        
        {/* NavLinks */}
        <div>
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/python/about" >
                Python About
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/python/install" >
                Python Install
            </NavLink>
            </p>

            
            
        
        </div>
        

    </div>

}