import React from 'react'
import classes from './Sidebar.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export const Sidebar = () => {


    return <div className={classes.mainContainer}>
            <Routes>
            {/* @ts-ignore */}
            <Route path={'/about'} route={<p>Home</p>}/>
            </Routes>
            

    
    </div>
}