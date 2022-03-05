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


export const SQL = () => {

    const [id, setId] = useState('0')

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
                SQL
            </h3>            
            <div className={stylingClasses.line}></div>
            
            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>
                
                
                <p><b>Relational Database (SQL)</b></p>
                <ul>
                    <li>Relational Database Management System (RDBMS) - <b>its a software</b>
                        <ul>
                            <li>Helps users create and maintain a relational database
                                <ul>
                                    <li><b>mySQL, Oracle, postageSQL, mariaDB, etc</b></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <br/>
                    <li>Secured Query Language (SQL) - <b>its a language</b>
                        <ul>
                            <li>Standardized language for interacting with RDBMS</li>
                            <li>Used to perform C.R.U.D. operations, as well as other administrative tasks (user management, security, backup, etc)</li>
                            <li>Used to define tables and structures</li>
                            <li>SQL code used on one RDBMS is not always portable to another without modification</li>
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