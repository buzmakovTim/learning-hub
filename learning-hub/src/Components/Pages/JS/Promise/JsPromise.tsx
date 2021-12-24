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


export const JsPromise = () => {

    const [id, setId] = useState('0')

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            JavaScript Promise
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                
                <h3>Description</h3>

                <p>The <b><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise </a></b> 
                 object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</p>

                <p>A <b>Promise</b> is 
                a proxy for a value not necessarily known when the promise is created. 
                It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
                This lets asynchronous methods return values like synchronous methods: instead of immediately returning 
                the final value, the asynchronous method returns a promise to supply the value at some point in the 
                future.</p>

                <p><b>A Promise in in one of these state:</b></p>
                <ul>
                    <li><i><b>pending :</b></i> initial state, neither fulfilled nor rejected.</li>
                    <li><i><b>fulfilled :</b></i> meaning that the operation was completed successfully.</li>
                    <li><i><b>rejected :</b></i> meaning that the operation failed.</li>
                </ul>


                {/* CODING */}
                <br/>
                <br/>
                <p><b>Let's create PROMISE</b></p>
                <div className={stylingClasses.codingPart}>
                    <span>let p = new <b>Promise</b>( ( <b>resolve, reject</b> ) =&#62; &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;let a = 1 + 1</span> 
                    <br/>
                    <span>&ensp;&ensp;if ( a == 2 ) &#123;</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;<b>resolve( "Success" )</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&#125; else &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;<b>reject( "Failed" )</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&#125;</span> 
                    <br/>
                    <span>&#125; )</span> 
                    <br/>
                    <br/>
                    
                    <span><i>// This promise ALWAYS gonna be resolved as 1 + 1 always 2</i></span>
                    <br/>
                    <br/>
                    <br/>

                    <span>p.<b>then</b>( ( message ) =&#62; &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;console.log( "This is in then" + message )</span> 
                    <br/>
                    <span>p.<b>catch</b>( ( message ) =&#62; &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;console.log( "This is in catch" + message )</span> 
                    <br/>

                </div>
                

            </div>


            
                {/* NOTE */}
                <div className={stylingClasses.note}>
                    <span>Avoiding Type checking in <b>.tsx</b> files</span>
                    <br/>
                    <br/>
                    <span><b>//@ts-ignore</b></span>
                </div>

            <br/>
            <br/>
            <br/>
            



            <br/>
            <br/>
            <br/>
            
    
    </div>
}