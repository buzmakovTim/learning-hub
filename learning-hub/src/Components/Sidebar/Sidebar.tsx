import React from 'react'
import classes from './Sidebar.module.css'
import { Route, Routes } from 'react-router-dom'
import {ReactNav} from './../../Components/Pages/React/ReactNav'
import { GitNav } from '../Pages/Git/GitNav'
import { JsNav } from '../Pages/JS/JsNav'
import { PythonNav } from '../Pages/Python/PythonNav'
import { IonicNav } from '../Pages/Ionic/IonicNav'
import { DBNav } from '../Pages/DataBase/DBNav'


export const Sidebar = () => {


    return <div className={classes.mainContainer}>
            
            <Routes>
    
                <Route path='/react/*' element={<ReactNav/>}/>
                <Route path='/ionic/*' element={<IonicNav/>}/>
                <Route path='/js/*' element={<JsNav/>}/>
                <Route path='/python/*' element={<PythonNav/>}/>
                <Route path='/git/*' element={<GitNav/>}/>
                <Route path='/db/*' element={<DBNav/>}/>
                
            </Routes>
            

    
    </div>
}