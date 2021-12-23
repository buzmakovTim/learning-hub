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

                {/* Let's create a promise

                    let p = new Promise((resolve, reject) => {
                        let a = 1 + 1
                        if(a == 2){
                            resolve('Success')
                        }else{
                            reject('Failed')
                        }
                    })
                
                    p.then((message) => {
                        console.log('This is in then' + message)
                    }).catch((message) => {
                        console.log('This is in catch' + message)
                    })


                */}

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
            
            
            
                
            
            <h3>UUID</h3>
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                
                <p><b><a href="https://www.npmjs.com/package/react-uuid" target="_blank">UUID</a></b> - A UUID (Universal Unique Identifier) is a 128-bit number used to 
                uniquely identify some object or entity on the Internet. Depending on the specific mechanisms used, a UUID is either guaranteed to be different or is, 
                at least, extremely likely to be different from any other UUID generated until 3400 A.D. </p>
                
                <p><b>Install</b></p>
                {/* CODING */}
                <div className={stylingClasses.codingPart}>
                    <span>yarn add uuid</span> 
                    <br/>
                    <br/>
                    <span className={stylingClasses.spanColorOrange}>For Typescript</span>
                    <br/>
                    <br/>
                    <span>yarn add @types/uuid</span> 
                    <br/>
                </div>

                <p><b>Using</b></p>
                {/* CODING */}
                <div className={stylingClasses.codingPart}>
                    <span>import &#123; v1 &#125; from 'uuid'</span> 
                    <br/>
                </div>

                <p>Generating new UUID every time you click on the Button</p>
                <button onClick={() => setId(v1())}>Generate ID</button> <span> - ID is: {id}</span>

            </div>    
                   
                <br/>
                <br/>
                <br/>
                

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
            <h3>Add to GitHub Pages</h3>
            <div className={stylingClasses.line}></div>
            <br/>
            {/* CODING */}
            <div className={stylingClasses.paragraph}>
                    <ol>
                        <li>In terminal - <b>yarn add gh-pages –dev</b></li>
                        <li>Add homepage to <b>pakage.json</b> file <br/>
                            <i>&#123; <br/>
                            "name" : "learningHub",<br/>
                            <b>"homepage" : "https://buzmakovTim.github.io/learningHub"<br/></b>
                            "version" : "0.1.0"<br/>
                            &#125;</i>
                        </li>
                        <li>Add under the scripts to <b>pakage.json</b> file <br/>
                            <i>"predeploy" : "npm run build",<br/>
                            "deploy" : "gh-pages -d build"<br/></i>
                        </li>
                        <li>And after every commit push we need to run <b>yarn deploy</b></li>
                    </ol>
            </div>



            <br/>
            <br/>
            <br/>
            
    
    </div>
}