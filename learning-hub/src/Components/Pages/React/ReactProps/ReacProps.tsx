import React from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'


export const ReactProps = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            Props
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                
                <p><b>Props</b> - Properties</p>
                <p>Using Props we can reuse Component with different properties and behave differently</p>
                <p>Also we can pass <b>Functions</b> with the Props</p>

                

            </div>
                
    </div>
}