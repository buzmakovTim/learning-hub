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

            <br/>
            {/* YouTube Video Embed */}
            {/* @ts-ignore */}
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/V_Kr9OSfDeU" 
                title="YouTube video player" 
                /* @ts-ignore */
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>

            <br/>
            <br/>
            {/* NOTE */}
            <div className={stylingClasses.note}>
                    <span><b>NOTE</b></span>
                    <br/>
                    <br/>
                    <span><i>"async and await make promises easier to write"</i></span>
                    <br/><br/>
                    <span><b>async</b> makes a function return a Promise</span>
                    <br/><br/>
                    <span><b>await</b> makes a function wait for a Promise</span>
                </div>


            {/* PARAGRAPH START */}
            <div className={stylingClasses.paragraph}>
            
            <h3>Async Syntax</h3>
            
                <p>The keyword <b>async</b> before a function makes the function return a promise:</p>
                
                {/* CODING START*/}
                <div className={stylingClasses.codingPart}>
                    
                    <span><b>EXAMPLE</b></span>
                    <br/>
                    <br/>
                    <span><b>async</b> function <b>myFunction</b>( ) &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;return "Hello" ;</span> 
                    <br/>
                    <span>&#125;</span> 
                    <br/>
                    <br/>
                    <span>Is the same as:</span>
                    <br/>
                    <br/>
                    <span>function <b>myFunction</b>( ) &#123; </span> 
                    <br/>
                    <span>&ensp;&ensp;return Promise.resolve("Hello") ;</span> 
                    <br/>
                    <span>&#125;</span> 
                    <br/>


                </div>{/* CODING END */}

            </div>{/* PARAGRAPH START */}    


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