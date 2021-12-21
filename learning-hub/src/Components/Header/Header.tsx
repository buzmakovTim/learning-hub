import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {

    return <div className={classes.mainContainer}>
        
        <p>Header</p>

        {/* Navigation */}
        <div className={classes.nav}>


            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/" >
                    Home
                </NavLink>
            </div>
            
            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/react" >
                    React
                </NavLink>
            </div>
            
            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/git" >
                    Git
                </NavLink>
            </div>
            

        </div>
    </div>
}

