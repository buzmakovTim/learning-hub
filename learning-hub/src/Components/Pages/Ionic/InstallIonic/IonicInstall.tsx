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


export const IonicInstall = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
                Ionic Install
            </h3>            
            <div className={stylingClasses.line}></div>
            
            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>
                
                <p>Node.js has to be installed</p>
                <p>Install Ionic open this <b><a href="https://ionicframework.com/docs/intro/cli" target='_blank'>LINK</a></b></p>
                <p><b>npm install -g @ionic/cli</b> ( <b>-g</b> install globally so we can use it at any folder)</p> 

                 <br/>   

                
                <p>Create a new Ionic APP - <b>ionic start</b></p>
                <p>Start the APP - <b>ionic serve</b></p>

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