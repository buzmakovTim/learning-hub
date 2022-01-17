import React, {useEffect, useState} from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'
import {v1} from 'uuid'
import { ImageComponent } from '../../../ImageComponent/ImageComponent'
import ReactCssSassImage from './ReactCssSass.png'
import StyleInComponet from './StyleInComponet.png'

export const ReactCssSass = () => {

    const [isOn, setisOn] = useState(true)

    const onClickHandlerON = () => {
        setisOn(true)
    }
    const onClickHandlerOff = () => {
        setisOn(false)
    }  

    const onStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: isOn ? 'green':'grey',
        color: isOn ? 'white':'black',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        backgroundColor: isOn ? 'grey':'red',
        color: isOn ? 'black':'white',
        cursor: 'pointer'
    }


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            Css / Sass
            </h3>            
            <div className={stylingClasses.line}></div>

            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>

                <p><a href='https://en.wikipedia.org/wiki/CSS' target='_blank'><b>CSS</b></a> - Cascading Style Sheets</p>    
                <p><a href='https://en.wikipedia.org/wiki/Sass_(stylesheet_language)' target='_blank'><b>Sass</b></a> - Syntactically Awesome Style Sheets</p>    

                <p>In the components we can use external CSS file which will be named as <b>FileName.module.css</b> and imported</p>

            </div> {/* Paragraph End */}

            <ImageComponent image={ReactCssSassImage} size='medium'/>


            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>

                <p><b>Or</b> we can declare style inside the component as a an object. <b>Example below</b></p>

            </div> {/* Paragraph End */}

            <ImageComponent image={StyleInComponet} size='medium'/>  

            <p><b>Indicator Styled inside Component</b></p>
            
            <div>
                <div style={onStyle} onClick={() => {onClickHandlerON()}}>On</div>
                <div style={offStyle} onClick={() => {onClickHandlerOff()}}>Off</div>
            </div>
            


            <br/>
            <br/>
            <br/>
            
    
    </div>
}