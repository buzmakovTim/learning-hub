import React from 'react'
import { Route, Routes } from 'react-router-dom'
import classes from './../Container.module.css'
import { PythonAbout } from './About/PythonAbout'
import { PythonInstall } from './InstallPython/PythonInstall'

export const PythonContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        Python
        </h1>
        

        <Routes>
                <Route path='/about' element={<PythonAbout/>}/>
                <Route path='/install' element={<PythonInstall/>}/>     
        </Routes>


    </div>

}