import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import classes from './Body.module.css'

export const Body = () => {



    return <div className={classes.mainContainer}>

        {/* Sidebar */}
        <div>
            <Sidebar/>
        </div>

        {/* Content */}
        <div>
            
        </div>

    </div>
}