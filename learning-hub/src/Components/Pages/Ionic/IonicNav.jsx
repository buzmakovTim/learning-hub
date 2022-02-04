import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './../../Pages/Container.module.css'


export const IonicNav = () => {

    return <div>

        <h3>Ionic Tutorial</h3>


        
        {/* NavLinks */}
        <div>
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/ionic/about" >
                Ionic About
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/ionic/install" >
                Ionic Install
            </NavLink>
            </p>

            
            
        
        </div>
        

    </div>

}