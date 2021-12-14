import React from 'react'
import { NavLink } from 'react-router-dom';

export const ReactNav = () => {

    return <div>

        React Component


        
        {/* NavLinks */}
        <div>
            <p>
            <NavLink to="/react/install" >
                React Install
            </NavLink>
            </p>
            
            <p>
            <NavLink to="/react/other" >
                React Other
            </NavLink>
            </p>
        
        </div>
        

    </div>

}