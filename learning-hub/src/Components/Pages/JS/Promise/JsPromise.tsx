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

    const[userLeft, setUserLeft] = useState(false)
    const[userNotLiking, setUserNotLiking] = useState(false);
    const[message, setMessage] = useState('message will be here after pressing the button');
    
    // Function USING promise
function watchInstaReelsPromise() {
        return new Promise ((resolve, reject) => {
            if (userLeft) {
                reject({
                    name : 'User left' ,
                    message : ':('
                })
        } else if (userNotLiking) {
                reject({
                    name : 'User not commenting and liking' ,
                    message : 'Very bad :('
        })
        } else {
                resolve ( 'Like and Subscribe! :)' )
        }
    })
}

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
            


             {/* CODING */}
             <br/>
                <br/>
                <p><b>Converting CallBack function to Promise</b></p>
                <div className={stylingClasses.codingPart}>
                    <span>let <b>userLeft</b> = false</span>
                    <br/>
                    <span>let <b>userNotLiking</b> = false</span>
                    <br/>
                    <br/>
                    <span>function <b>watchInstaReels</b>( ( <b>callBack, errorCallBack</b> ) =&#62; &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;if ( userLeft ) &#123;</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;<b>errorCallBack ( &#123;</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>name</b> : 'User left' ,</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>message</b> : ':('</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;<b>&#125; )</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&#125; else if ( userNotLiking ) &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;<b>errorCallBack ( &#123;</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>name</b> : 'User not commenting and liking' ,</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>message</b> : 'Very bad :('</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;<b>&#125; )</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&#125; else &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;<b>callBack ( 'Like and Subscribe! :)' )</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&#125;</span> 
                    <br/>
                    <span>&#125;</span> 
                    <br/>
                    <br/>
                    <br/>
                    <br/> 
                    <span><i>// Calling <b>watchInstaReels</b> function ( and passing two callBack functions <b>message</b> and <b>error</b>) </i></span> 
                    <br/>
                    <br/>
                    <span><b>watchInstaReels</b>( ( <b>message</b> ) =&#62; &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;console.log( 'Success: ' + <b>message</b> )</span> 
                    <br/>
                    <span>&#125;, ( <b>error</b> )  =&#62; &#123;</span> 
                    <br/>
                    <span>&ensp;&ensp;console.log( error.name + ' ' + error.message )</span> 
                    <br/>
                    <span>&#125; )</span>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {/* NOW THIS FUNCTION WILL BE CONVERTED USING THE PROMISE */}
                    <span>========================</span>
                    <br/>
                    <span>NOW THIS FUNCTION WILL BE CONVERTED USING THE PROMISE</span>
                    <br/>
                    <span>========================</span>
                    <br/>
                    <br/>
                    <span>function <b>watchInstaReelsPromise</b>( ) &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;<b>return</b> new <b>Promise</b> ( (resolve, reject ) =&#62; &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;if ( userLeft ) &#123;</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>reject ( &#123;</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>name</b> : 'User left' ,</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>message</b> : ':('</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>&#125; )</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#125; else if ( userNotLiking ) &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>reject ( &#123;</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>name</b> : 'User not commenting and liking' ,</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>message</b> : 'Very bad :('</span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>&#125; )</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#125; else &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<b>resolve ( 'Like and Subscribe! :)' )</b></span> 
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#125;</span> 
                    <br/>
                    <span>&ensp;&ensp;&#125; )</span> 
                    <br/>
                    <span>&#125;</span> 
                    <br/>
                    <br/>
                    <br/>
                    <br/> 
                    <span><i>// Calling <b>watchInstaReelsPromise</b> function ( and passing two callBack functions <b>message</b> and <b>error</b>) </i></span> 
                    <br/>
                    <br/>
                    <span><b>watchInstaReelsPromise( )</b>.then( ( <b>message</b> ) =&#62; &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;console.log( 'Success: ' + <b>message</b> )</span> 
                    <br/>
                    <span>&#125; ).catch( ( <b>error</b> )  =&#62; &#123;</span> 
                    <br/>
                    <span>&ensp;&ensp;console.log( error.name + ' ' + error.message )</span> 
                    <br/>
                    <span>&#125; )</span>
                    <br/>

                </div>

            </div>
            
            <p><b>How this code works</b></p>
            
            <div className={stylingClasses.paragraph}>
            
            <span> <button onClick={() => setUserLeft(!userLeft)}>userLeft</button> let<b> userLeft = </b></span> {userLeft ? 'true' : 'false'}
            <br/>
            <br/>
            <span> <button onClick={() => setUserNotLiking(!userNotLiking)}>userNotLiking</button> let<b> userNotLiking = </b></span> {userNotLiking ? 'true' : 'false'}
            <br/>
            <br/>
            <button onClick={() => watchInstaReelsPromise().then( (message) => {
                setMessage('Success: ' + message)
            }).catch( (error) => {
                setMessage(error.name + ' ' + error.message)
            })
            
            }>RUN PROMIS FUNCTION</button> <span><b> - {message}</b></span>


            </div>


            <br/>
            <br/>
            <br/>
                {/* NOTE */}
                <div className={stylingClasses.note}>
                    <span><b>NOTE</b></span>
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