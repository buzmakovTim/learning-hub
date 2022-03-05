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


export const DBAbout = () => {

    const [id, setId] = useState('0')

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
                DB About
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                
                <p><b><a href="https://en.wikipedia.org/wiki/Database" target="_blank">Database</a></b> In computing, a database is an organized collection of data stored and accessed electronically.</p>
                <p>A <b><a href="https://en.wikipedia.org/wiki/Database#Database_management_system" target="_blank">database management system (DBMS)</a></b> is the software that interacts with end users, 
                applications, and the database itself to capture and analyze the data.<br/> 
                 - Can also manage security (who can access to DB - users, passwords).<br/>
                 - Back up database, exporting importing etc.</p>
                <br/>
                <p><b>Two types of Databases</b></p>
                <ul>
                    <li>Relational Database (SQL)
                        <ul>
                            <b>Organize data into one or more tables</b>
                            <li>Each table has columns ans rows</li>
                            <li>A unique key identifies each row</li>
                        </ul>
                    </li>
                    <li>Non-Reletional (noSQL / not just SQL)
                        <ul>
                            <b>Organize data is anything but a traditional table</b>
                            <li>Key-value store</li>
                            <li>Documents (JSON, XML, etc)</li>
                            <li>Graphs</li>
                            <li>Flexible Tables</li>
                        </ul>
                    </li>
                </ul>
                
                <br/>
                <p><b>Database Queries</b></p>
                <p>Queries are request made to the database management system for specific information</p>
                <p>As the database's structure become more and more complex it become more difficult to get
                    the specific pieces of information we want.</p>
                <p>A google searche is a query</p>



                {/* <p><b>Developer:</b> Python Software Foundation</p>
                <p><b>First appeared:</b> 20 February 1991; 30 years ago</p>
                <p><b>Designed by:</b> <a href='https://en.wikipedia.org/wiki/Guido_van_Rossum' target='_blank'>Guido van Rossum</a></p> */}

            </div>


            {/* 
            UUID
              
            Fot v1()  
            yarn add uuid  ( import {v1} from ‘uuid’)  and 
            yarn add @types/uuid   
            */}

            {/* Create new react App */}
            <br/>
            <br/>
            {/* @ts-ignore */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* @ts-ignore */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HXV3zeQKqGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
                
            
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