import React, {useEffect, useState} from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'
import {v1} from 'uuid'

//  {    &#123;
//  }    &#125;
//  [    &#91;
//  ]    &#93;
//  '    &#39;
//  <    &#60;
//  >    &#62;
//  ,    &#44;
//  .    &#46;
//  =    &#61;
//  "    &#34;
//  ;    &#59;
//  :    &#58;
//  /    &#47;
// tab   &ensp; 


export const PythonInstall = () => {

    const [id, setId] = useState('0')

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
                Python Install
            </h3>            
            <div className={stylingClasses.line}></div>
            
            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>
                
                <p><b>1 - </b> we need to install <b>Python</b> on our computer <a href='https://www.python.org/downloads/' target='_blank'><b>DOWNLOAD PYTHON</b></a></p> 
                <p><b>2 - </b> text editor or IDE. <a href='https://www.jetbrains.com/pycharm/download/#section=windows' target='_blank'><b>DOWNLOAD PyCharm IDE</b></a></p>
            </div> {/* Paragraph End */}
            

            <br/>
            <br/>
                {/* NOTE */}
                {/* <div className={stylingClasses.note}>
                    <span><b>let foo = 42 ;</b>   <i>// foo is now a number</i></span><br/>
                    <span><b>&ensp; &ensp;foo = 'bar' ;</b>   <i>// foo is now a string</i></span><br/>
                    <span><b>&ensp; &ensp;foo = true ;</b>   <i>// foo is now a boolean</i></span><br/>
                    
                </div> */}
            

            <br/>
            <br/>
            <br/>
            
    
    </div>
}