import React from 'react'
import { Route, Routes } from 'react-router-dom'
import classes from './../Container.module.css'
import { DBAbout } from './About/DBAbout'
import { NoSQL } from './NoSQL/NoSQL'
import { SQL } from './SQL/SQL'

export const DBContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        Database (DB)
        </h1>
        

        <Routes>
                <Route path='/about' element={<DBAbout/>}/>
                <Route path='/sql' element={<SQL/>}/>
                <Route path='/noSql' element={<NoSQL/>}/>       
        </Routes>


    </div>

}