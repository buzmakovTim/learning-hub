import React from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'


export const ReactRouterDom = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            React Router DOM
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                <h3>
                    First what is React Router?
                </h3>
                <p>React Router is a package for routing in React.js, as the documentation said <i>"React Router is a fully-featured 
                    client and server-side routing library for React, a JavaScript library for building user interfaces. 
                    React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native."</i></p>

                <p>Used for using NavLink and switching between pages</p> 
    
            </div>
            
            <h3><a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank">How to use Router</a></h3>
            <h3><a href="https://v5.reactrouter.com/web/api/NavLink" target="_blank">How to use NavLink</a></h3>
            <h3><a href="https://reactrouter.com/docs/en/v6/upgrading/v5" target="_blank">Upgrading from v5 And more Info</a></h3>

            <h3>Installing</h3>
            
                <div className={stylingClasses.paragraph}>
                    <div className={stylingClasses.codingPart}>
                        <span>yarn add react-router-dom</span> 
                        <br/>
                        <br/>
                        <br/>
                        <span className={stylingClasses.spanColorOrange}>For Typescript</span>
                        <br/>
                        <br/>
                        <span>yarn add @types/react-router-dom </span>
                    </div>
                </div>
            

            <br/>
            <br/>
            <br/>
    
    </div>
}