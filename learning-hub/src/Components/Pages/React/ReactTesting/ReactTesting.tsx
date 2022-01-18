import React, {useEffect, useState} from 'react'
import { ImageComponent } from '../../../ImageComponent/ImageComponent'
import stylingClasses from './../../../../CSS/Styles.module.css'
import ReactTestingImage from './ReactTesting.png'

export const ReactTesting = () => {

    
    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            React Testing
            </h3>            
            <div className={stylingClasses.line}></div>

            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>
                
                <p>Create a file called <b>filename.test.ts</b></p>
                <p>To <b>run the test</b> type <b>yarn test</b> and all tests will be rerun all time you save changes</p>

            </div> {/* Paragraph End */}


            <ImageComponent image={ReactTestingImage} size='medium'/>

            <br/>
            <br/>
            <br/>
            
            
    
    </div>
}