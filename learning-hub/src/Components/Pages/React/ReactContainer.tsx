import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReactInstall } from './ReactInstall/ReactInstall'
import { ReactOther } from './ReactOther/ReactIOther'
import classes from './ReactContainer.module.css'

export const ReactContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        React
        </h1>
        

        <Routes>
                <Route path='/install' element={<ReactInstall/>}/>
                <Route path='/other' element={<ReactOther/>}/>             
        </Routes>


    </div>

}