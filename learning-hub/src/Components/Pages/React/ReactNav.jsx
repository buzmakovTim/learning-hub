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
                Install
            </NavLink>
            </p>
            
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/component" >
                Component
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/props" >
                Props
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/hooks" >
                Hooks
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/routerDom" >
                Router DOM
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/cssSass" >
                CSS / SASS
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/testing" >
                Testing
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/react/other" >
                Other
            </NavLink>
            </p>
        
        </div>
        

    </div>

}