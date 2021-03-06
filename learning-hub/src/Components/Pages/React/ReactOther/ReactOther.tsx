import React, {useEffect, useState} from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'
import {v1} from 'uuid'



export const ReactOther = () => {

    const [id, setId] = useState('0')

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            React Other
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                
                <h3>Here will be some other notes regarding react</h3>

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