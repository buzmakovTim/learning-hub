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


export const StringParsing = () => {

    
  

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            String Parsing
            </h3>            
            <div className={stylingClasses.line}></div>

            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>

                <p>var <b>stringOne</b> = "freeCodeCamp is the best place to learn"</p>
                <p>var <b>stringTwo</b> = "frontend and backend development"</p>
                
                <br/>
                <h4>
                    charAt()
                </h4>
                <p>console.log( stringOne<b>.charAt(1)</b> )  // Prints 'r'</p>  

                <h4>
                    charCodeAt()
                </h4>
                <p>console.log( stringOne<b>.charCodeAt(1)</b> )  // Prints '114'  Unicode for 'r'</p>  
                
                <h4>
                    concat()
                </h4>
                <p>console.log( stringOne<b>.concat(stringTwo)</b> )  // Prints 'freeCodeCamp is the best place to learnfrontend and backend development' </p>  

                <h4>
                    endsWith()
                </h4>
                <p>console.log( stringOne<b>.endsWith('rn')</b> )  // Prints <b>true</b> as this string returns with 'rn'</p>  

                <h4>
                    fromCharCode()
                </h4>
                <p>console.log(<b>String.fromCharCode(114)</b> )  // Prints <b>'r'</b> as this is letter for 114 char code</p>  

                <h4>
                    includes()
                </h4>
                <p>console.log( stringTwo<b>.includes('end')</b> )  // Prints <b>true</b> as this string contain "end"</p>  

                <h4>
                    indexOf()
                </h4>
                <p>console.log( stringTwo<b>.indexOf('end')</b> )  // Prints <b>5</b> as 'end' start at the position 5</p>  

                <h4>
                    lastIndexOf()
                </h4>
                <p>console.log( stringTwo<b>.lastIndexOf('end')</b> )  // Prints <b>17</b> as last 'end' found at position 17</p>  

                <h4>
                    match()
                </h4>
                <p>console.log( stringTwo<b>.match(/end/g)</b> )  // Prints <b>["end", "end"]</b>  Regular expression found all 'end' and return as an array</p>  

                <h4>
                    repeat()
                </h4>
                <p>console.log( stringTwo<b>.repeat(3)</b> )  // Prints stringTwo 3 times</p>  
                
                <h4>
                    replace()
                </h4>
                <p>console.log( stringTwo<b>.replace(/end/g, "END")</b> )  // Prints stringTwo with all <b>'end'</b> replaced to <b>"END"</b></p>

                <h4>
                    search()
                </h4>
                <p>console.log( stringTwo<b>.search('end')</b> )  // Prints <b>5</b> as it found at index 5</p>

                <h4>
                    slice()
                </h4>
                <p>console.log( stringTwo<b>.slice(2, 4)</b> )  // Prints <b>on</b> starting from position 2 up to 4(not included)</p>

                <h4>
                    split()
                </h4>
                <p>console.log( stringTwo<b>.split(' ')</b> )  // Prints <b>["frontend", "and", "backend", "development"]</b>an array of each word that split by space</p>

                <h4>
                    startsWith()
                </h4>
                <p>console.log( stringOne<b>.startsWith('free')</b> )  // Prints <b>true</b> as this string starts with 'free'</p>

                <h4>
                    substr()
                </h4>
                <p>console.log( stringTwo<b>.substr(2, 4)</b> )  // Prints <b>onto</b> start from char 2 and return 4 chars</p>

                <h4>
                    toLowerCase() / toUpperCase()
                </h4>
                <p>console.log( stringTwo<b>.toLowerCase()</b> )  // Prints string with all lower case</p>
                
                <h4>
                    trim() <br/>
                    let stringThree = "     Hello!    "
                </h4>
                <p>console.log( stringThree<b>.trim()</b> )  // Removing spaces at the front and at the back of this string</p>
                



            </div>{/* Paragraph End */}
           
    
    </div>
}