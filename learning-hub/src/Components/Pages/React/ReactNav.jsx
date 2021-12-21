import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './../../Pages/Container.module.css'

export const ReactNav = () => {

    return <div>

        <h3>React Tutorial</h3>

        
        
        {/* NavLinks */}
        <div>
            <p >
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/install" >
                React Install
            </NavLink>
            </p>
            
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/component" >
                React Component
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/hooks" >
                React Hooks
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/routerDom" >
                React Router DOM
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/other" >
                React Other
            </NavLink>
            </p>
        
        </div>
        

    </div>

}