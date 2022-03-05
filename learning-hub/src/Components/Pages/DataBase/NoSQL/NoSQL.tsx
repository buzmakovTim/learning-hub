import React, {useEffect, useState} from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'
import {v1} from 'uuid'
import { pbkdf2 } from 'crypto'

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


export const NoSQL = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
                noSQL
            </h3>            
            <div className={stylingClasses.line}></div>
            
            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>
                
                
                <p><b>Non-Relational Database (noSQL / not just SQL)</b></p>
                <ul>
                    <li>Non-Relational Database Management System (NRDBMS) - <b>its a software</b>
                        <ul>
                            <li>Helps users create and maintain a non-relational database
                                <ul>
                                    <li><b>mongoDb, dynamoDB, apache cassandra, firebase, etc</b></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br/>
                    <li>Implementation Specific
                        <ul>
                            <li>Any non-relational database falls under this category, so there's no set language standard.</li>
                            <li>Most NRDBMS will implement their own language for performing C.R.U.D. and administrative operations on the database.</li>
                        </ul>
                    </li>
                </ul>


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