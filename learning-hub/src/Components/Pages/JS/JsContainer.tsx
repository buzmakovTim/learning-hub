import React from 'react'
import { Route, Routes } from 'react-router-dom'
import classes from './../Container.module.css'
import { JsAbout } from './About/JsAbout'
import { JsOther } from './Other/JsOther'

export const JsContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        JavaScript
        </h1>
        

        <Routes>
                <Route path='/about' element={<JsAbout/>}/>
                <Route path='/other' element={<JsOther/>}/>            
        </Routes>


    </div>

}