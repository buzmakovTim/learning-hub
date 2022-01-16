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


export const PythonAbout = () => {

    const [id, setId] = useState('0')

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
                Python About
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                
                <p><b><a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">Python</a></b> is an interpreted high-level 
                general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. 
                Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and 
                large-scale projects.</p>
                <p><b>Developer:</b> Python Software Foundation</p>
                <p><b>First appeared:</b> 20 February 1991; 30 years ago</p>
                <p><b>Designed by:</b> <a href='https://en.wikipedia.org/wiki/Guido_van_Rossum' target='_blank'>Guido van Rossum</a></p>

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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            
                
            
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