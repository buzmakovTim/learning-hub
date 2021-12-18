import React from 'react'
import { Route, Routes } from 'react-router-dom'
import classes from './../Container.module.css'
import { GitAbout } from './About/GitAbout'
import { GitCommands } from './Commands/GitCommands'

export const GitContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        Git
        </h1>
        

        <Routes>
                <Route path='/about' element={<GitAbout/>}/>
                <Route path='/commands' element={<GitCommands/>}/>            
        </Routes>


    </div>

}