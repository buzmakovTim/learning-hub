import React from 'react'
import { Route, Routes } from 'react-router-dom'
import classes from './../Container.module.css'
import { IonicAbout } from './About/IonicAbout'
import { IonicInstall } from './InstallIonic/IonicInstall'

export const IonicContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        Ionic
        </h1>
        

        <Routes>
                <Route path='/about' element={<IonicAbout/>}/>
                <Route path='/install' element={<IonicInstall/>}/>     
        </Routes>


    </div>

}