import React from 'react'
import { NavLink } from 'react-router-dom';

export const ReactNav = () => {

    return <div>

        <h3>React Tutorial</h3>


        
        {/* NavLinks */}
        <div>
            <p>
            <NavLink to="/react/install" >
                React Install
            </NavLink>
            </p>
            
            <p>
            <NavLink to="/react/component" >
                React Component
            </NavLink>
            </p>

            <p>
            <NavLink to="/react/hooks" >
                React Hooks
            </NavLink>
            </p>
        
        </div>
        

    </div>

}