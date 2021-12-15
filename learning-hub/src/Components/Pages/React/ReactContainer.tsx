import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReactInstall } from './ReactInstall/ReactInstall'
import { ReactComponent } from './ReactComponent/ReactComponent'
import classes from './ReactContainer.module.css'

export const ReactContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        React
        </h1>
        

        <Routes>
                <Route path='/install' element={<ReactInstall/>}/>
                <Route path='/component' element={<ReactComponent/>}/>             
        </Routes>


    </div>

}