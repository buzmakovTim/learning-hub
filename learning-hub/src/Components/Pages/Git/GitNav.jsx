import React from 'react'
import { NavLink } from 'react-router-dom';

export const GitNav = () => {

    return <div>

        <h3>Git Tutorial</h3>


        
        {/* NavLinks */}
        <div>
            <p>
            <NavLink to="/git/about" >
                Git About
            </NavLink>
            </p>
            
            <p>
            <NavLink to="/git/commands" >
                Git Commands
            </NavLink>
            </p>

        
        </div>
        

    </div>

}