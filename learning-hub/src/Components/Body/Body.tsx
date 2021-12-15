import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import classes from './Body.module.css'
import { Route, Routes } from 'react-router-dom'
import { ReactContainer } from '../Pages/React/ReactContainer'

export const Body = () => {



    return <div className={classes.mainContainer}>

        {/* Sidebar */}
        <div className={classes.sidebar}>
            <Sidebar/>
        </div>

        {/* Content */}
        <div className={classes.body}>
            <Routes>   
                <Route path='/react/*' element={<ReactContainer/>}/>
            </Routes>
        </div>

    </div>
}