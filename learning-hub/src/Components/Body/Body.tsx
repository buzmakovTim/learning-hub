import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import classes from './Body.module.css'
import { Route, Routes } from 'react-router-dom'
import { ReactContainer } from '../Pages/React/ReactContainer'
import { GitContainer } from '../Pages/Git/GitContainer'

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
                <Route path='/git/*' element={<GitContainer/>}/>
            </Routes>
        </div>

    </div>
}