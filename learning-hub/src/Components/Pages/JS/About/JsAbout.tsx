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


export const JsAbout = () => {

    const [id, setId] = useState('0')

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
                JavaScript About
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                
                <p><b><a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a></b>, often abbreviated <b>JS</b>, is a programming language that is one of the core 
                technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client 
                side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated 
                JavaScript engine to execute the code on the user's device</p>

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
            <br/>
            
            
            
                
            
            <h3>JavaScript data types and data structures</h3>
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                
            <h4>Dynamic Type</h4>
            <p>JavaScript is a <i>loosely typed</i> and <i>dynamic</i> language. Variables in JavaScript are not directly associated 
                with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</p>

            </div>    
                   
                {/* NOTE */}
                <div className={stylingClasses.note}>
                    <span><b>let foo = 42 ;</b>   <i>// foo is now a number</i></span><br/>
                    <span><b>&ensp; &ensp;foo = 'bar' ;</b>   <i>// foo is now a string</i></span><br/>
                    <span><b>&ensp; &ensp;foo = true ;</b>   <i>// foo is now a boolean</i></span><br/>
                    
                </div>
            

            <div className={stylingClasses.paragraph}>
                
            <h4>JavaScript types</h4>

                <ul>
                    <li>
                            <span><b><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values" target="_blank">Primitive values</a></b></span>
                        <ol>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type" target="_blank">Boolean</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type" target="_blank">Null</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type" target="_blank">Undefined</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type" target="_blank">Number</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type" target="_blank">BigInt</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type" target="_blank">String</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type" target="_blank">Symbol</a></li>
                        </ol>
                    </li>
                    <li>
                            <span><b><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects" target="_blank">Objects</a></b></span>
                    </li>


                </ul>
                
                
            </div>


            <br/>
            <br/>
            <br/>
            
    
    </div>
}