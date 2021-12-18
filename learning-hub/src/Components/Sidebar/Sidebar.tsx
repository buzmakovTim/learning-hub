import React from 'react'
import classes from './Sidebar.module.css'
import { Route, Routes } from 'react-router-dom'
import {ReactNav} from './../../Components/Pages/React/ReactNav'
import { GitNav } from '../Pages/Git/GitNav'


export const Sidebar = () => {


    return <div className={classes.mainContainer}>
            
            <Routes>
    
                <Route path='/react/*' element={<ReactNav/>}/>
                <Route path='/git/*' element={<GitNav/>}/>
                
            </Routes>
            

    
    </div>
}