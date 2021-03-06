import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './../../Pages/Container.module.css'


export const JsNav = () => {

    return <div>

        <h3>JavaScript Tutorial</h3>


        
        {/* NavLinks */}
        <div>
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/js/about" >
                About
            </NavLink>
            </p>
            
            
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/js/promise" >
                Promise
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/js/asyncAwait" >
                Async Await
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/js/arrayFunctions" >
                Array Functions
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/js/stringParsing" >
                String Parsing
            </NavLink>
            </p>


            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/js/other" >
                Other
            </NavLink>
            </p>
        
        </div>
        

    </div>

}