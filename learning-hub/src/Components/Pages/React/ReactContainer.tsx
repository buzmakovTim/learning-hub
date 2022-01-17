import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReactInstall } from './ReactInstall/ReactInstall'
import { ReactComponent } from './ReactComponent/ReactComponent'
import classes from './../Container.module.css'
import { ReactHooks } from './ReactHooks/ReactHooks'
import { ReactRouterDom } from './ReactRouterDom/ReactRouterDom'
import { ReactOther } from './ReactOther/ReactOther'
import { ReactProps } from './ReactProps/ReacProps'
import { ReactCssSass } from './ReactSccSass/ReactCssSass'
import { ReactTesting } from './ReactTesting/ReactTesting'

export const ReactContainer = () => {

    return <div className={classes.mainContainer}>

        <h1>
        React
        </h1>
        

        <Routes>
                <Route path='/install' element={<ReactInstall/>}/>
                <Route path='/component' element={<ReactComponent/>}/>
                <Route path='/props' element={<ReactProps/>}/>
                <Route path='/hooks' element={<ReactHooks/>}/> 
                <Route path='/routerDom' element={<ReactRouterDom/>}/>
                <Route path='/cssSass' element={<ReactCssSass/>}/>       
                <Route path='/testing' element={<ReactTesting/>}/>   
                <Route path='/other' element={<ReactOther/>}/>               
        </Routes>


    </div>

}