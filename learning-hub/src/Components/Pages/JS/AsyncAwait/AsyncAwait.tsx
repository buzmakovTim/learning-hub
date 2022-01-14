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


export const AsyncAwait = () => {

    const[userLeft, setUserLeft] = useState(false)
    const[userNotLiking, setUserNotLiking] = useState(false)
    const[message, setMessage] = useState('message will be here after pressing the button')
    const[allPromiseResolved, setAllPromiseResolved] = useState('---')
    const[onePromiseResolved, setOnePromiseResolved] = useState('---')
    
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


// For Promise.all() and Promise.race() functions

function promiseAll() {
    
    setAllPromiseResolved(' Processing...  please wait ')
    
    const p1 = new Promise((resolve, reject) => {
        //@ts-ignore
        setTimeout(() => {
            console.log('Promise 1')
            // setAllPromiseResolved(' Promise 1 resolved! ')
            resolve(' Promise 1 resolved! ')}, 3000)
    })
    const p2 = new Promise((resolve, reject) => {
        //@ts-ignore
        setTimeout(() => {
            console.log('Promise 2')
            // setAllPromiseResolved(' Promise 2 resolved! ')
            resolve(' Promise 2 resolved! ')}, 5000)
    })
    const p3 = new Promise((resolve, reject) => {
        //@ts-ignore
        setTimeout(() => {
            console.log('Promise 3')
            // setAllPromiseResolved(' Promise 3 resolved! ')
            resolve(' Promise 3 resolved! ')}, 1000)
    })

    // Promise.all function!!! 
    Promise.all([p1, p2, p3]).then(messages => {
        setAllPromiseResolved(messages.toString())
    })
}

function promiseRace() {
    const p1 = new Promise((resolve, reject) => {
        //@ts-ignore
        setTimeout(() => {
            console.log('Promise 1')
            resolve(' Promise 1 resolved! ')}, 3000)
    })
    const p2 = new Promise((resolve, reject) => {
        //@ts-ignore
        setTimeout(() => {
            console.log('Promise 2')
            resolve(' Promise 2 resolved! ')}, 5000)
    })
    const p3 = new Promise((resolve, reject) => {
        //@ts-ignore
        setTimeout(() => {
            console.log('Promise 3')
            resolve(' Promise 3 resolved! ')}, 1000)
    })

    // Promise.race function!!! 
    Promise.race([p1, p2, p3]).then(message => {
        //@ts-ignore
        setOnePromiseResolved("First Promise that resolved" + message)
    })
}





    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            JavaScript Async Await
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
                    
                    <span className={stylingClasses.spanColorOrange}><i>// This promise ALWAYS gonna be resolved as 1 + 1 always 2</i></span>
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
                    <span className={stylingClasses.spanColorOrange}><i>// Calling <b>watchInstaReels</b> function ( and passing two callBack functions <b>message</b> and <b>error</b>) </i></span> 
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
                    <span className={stylingClasses.spanColorOrange}>NOW THIS FUNCTION WILL BE CONVERTED USING THE PROMISE</span>
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
                    <span className={stylingClasses.spanColorOrange}><i>// Calling <b>watchInstaReelsPromise</b> function ( and passing two callBack functions <b>message</b> and <b>error</b>) </i></span> 
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
                
                }>RUN PROMISE FUNCTION</button> <span><b> - {message}</b></span>

            </div>

            <br/>
            <br/>
            <p><b>Promise.all ( )</b>  and  <b>Promise.race ( ) </b></p>
            
             {/* CODING */}
             
                
                <div className={stylingClasses.paragraph}>
                    <div className={stylingClasses.codingPart}>
                        <span>const p1 = new <b>Promise</b>( ( <b>resolve, reject</b> ) =&#62; &#123; </span> 
                        <br/>
                        <span>&ensp;&ensp;&ensp;&ensp;<b>resolve( " Promise 1 resolved ! " )</b></span> 
                        <br/>
                        <span>&#125; )</span> 
                        <br/>
                        <br/>
                        <span>const p2 = new <b>Promise</b>( ( <b>resolve, reject</b> ) =&#62; &#123; </span> 
                        <br/>
                        <span>&ensp;&ensp;&ensp;&ensp;<b>resolve( " Promise 2 resolved ! " )</b></span> 
                        <br/>
                        <span>&#125; )</span> 
                        <br/>
                        <br/>
                        <span>const p3 = new <b>Promise</b>( ( <b>resolve, reject</b> ) =&#62; &#123; </span> 
                        <br/>
                        <span>&ensp;&ensp;&ensp;&ensp;<b>resolve( " Promise 3 resolved ! " )</b></span> 
                        <br/>
                        <span>&#125; )</span> 
                        <br/>
                        <br/>

                        <span>==============================================</span>
                        <br/>
                        <span className={stylingClasses.spanColorOrange}><i>// Now we gonna use Promise.all()</i></span>
                        <br/>
                        <span className={stylingClasses.spanColorOrange}><i>// Waits till all promises are resolved and then <b>return</b></i></span>
                        <br/>
                        <br/>

                        <span>Promise.<b>all</b> ( [ p1, p2, p3 ] )</span> 
                        <br/>
                        <span>.<b>then</b>( ( messages ) =&#62; &#123; </span> 
                        <br/>
                        <span>&ensp;&ensp;console.log( messages )</span> 
                        <br/>
                        <span>&#125; )</span> 
                        <br/>
                        <br/>
                        <span>==============================================</span>
                        <br/>
                        <span className={stylingClasses.spanColorOrange}><i>// Now we gonna use Promise.race()</i></span>
                        <br/>
                        <span className={stylingClasses.spanColorOrange}><i>// Waits till first promise is resolved and then <b>return</b></i></span>
                        <br/>
                        <br/>
                        <span>Promise.<b>race</b> ( [ p1, p2, p3 ] )</span> 
                        <br/>
                        <span>.<b>then</b>( ( message ) =&#62; &#123; </span> <span className={stylingClasses.spanColorOrange}><i>  // returns single message</i></span>
                        <br/>
                        <span>&ensp;&ensp;console.log( messages )</span> 
                        <br/>
                        <span>&#125; )</span> 
                        <br/>
                        <br/>

                    </div>
                </div>


            <p><b>How this code works</b></p>
            
            <div className={stylingClasses.paragraph}>
            
                {/* @ts-ignore */}
                <button onClick={() => promiseAll()}>PROMISE ALL</button> <span><b> - {allPromiseResolved}</b></span>

                <br/>
                <br/>

                {/* @ts-ignore */}
                <button onClick={() => promiseRace()}>PROMISE RACE</button> <span><b> - {onePromiseResolved}</b></span>

            </div>


            <br/>
            <br/>
                {/* NOTE */}
                <div className={stylingClasses.note}>
                    <span><b>NOTE</b></span>
                    <br/>
                    <br/>
                    <span>We use <b>setTimeout</b> ( ( ) =&#62; &#123; &#125;, timeout )</span>
                </div>

            <br/>
            <br/>
            <br/>
            



            <br/>
            <br/>
            <br/>
            
            {/* 
            
                function makeRequest(location){
                    return new Promise((resolve, reject) => {

                        console.log(`Making request to ${location}`)

                        if(location === "Google"){
                            resolve('Google Says Hi')
                        } else {
                            reject('We can only talk to Google')
                        }
                    })
                }

                function processRequest(response){
                    return new Promise((resolve, reject) => {

                        console.log('Processing response')
                        resolve(`Extra information + ${response}`)
                    })
                }

                // Using .then nesting 

                makeRequest("Google").then(response =>{

                    console.log('Response received')
                    return processRequest(response)
                }).then(processedResponse => {
                    console.log(processedResponse)
                }).catch(err => {
                    console.log(err)
                })

                // And now we gonna use Async Await for this functions (same result as above)

                async function doAllWork(){
                    try {
                        const response = await makeRequest('Google')
                        console.log('Response received')
                        const processedResponse = await processRequest(response)
                        console.log(processedResponse)
                    }
                    catch (err) {
                        console.log(err)
                    }
                    
                }

                doAllWork()

            */}
    
    </div>
}