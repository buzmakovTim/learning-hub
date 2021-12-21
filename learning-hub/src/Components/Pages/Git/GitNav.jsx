import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './../../Pages/Container.module.css'


export const GitNav = () => {

    return <div>

        <h3>Git Tutorial</h3>


        
        {/* NavLinks */}
        <div>
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/git/about" >
                Git About
            </NavLink>
            </p>
            
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/git/commands" >
                Git Commands
            </NavLink>
            </p>

        
        </div>
        

    </div>

}