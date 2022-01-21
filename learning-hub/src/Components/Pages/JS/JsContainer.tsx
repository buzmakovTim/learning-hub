import React from 'react'
import { Route, Routes } from 'react-router-dom'
import classes from './../Container.module.css'
import { JsAbout } from './About/JsAbout'
import { ArrayFunctions } from './ArrayFunctions/ArrayFunctions'
import { AsyncAwait } from './AsyncAwait/AsyncAwait'
import { JsOther } from './Other/JsOther'
import { JsPromise } from './Promise/JsPromise'
import { StringParsing } from './StringParsing/StringParsing'

export const JsContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        JavaScript
        </h1>
        

        <Routes>
                <Route path='/about' element={<JsAbout/>}/>
                <Route path='/other' element={<JsOther/>}/>       
                <Route path='/promise' element={<JsPromise/>}/>
                <Route path='/asyncAwait' element={<AsyncAwait/>}/>
                <Route path='/arrayFunctions' element={<ArrayFunctions/>}/>    
                <Route path='/stringParsing' element={<StringParsing/>}/>     
        </Routes>


    </div>

}