import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './../../Pages/Container.module.css'


export const DBNav = () => {

    return <div>

        <h3>Python Tutorial</h3>


        
        {/* NavLinks */}
        <div>
            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/db/about" >
                What is Database (DB)
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/db/sql" >
                SQL
            </NavLink>
            </p>

            <p>
            <NavLink className={(navData) => navData.isActive ? `${classes.activeLink}` : "" } to="/db/noSql" >
                noSQL
            </NavLink>
            </p>

            
            
        
        </div>
        

    </div>

}