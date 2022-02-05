import React, {useState, useEffect} from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'
import  git_version  from './git_version.png'

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




export const GitAbout = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            About
            </h3>            
            <div className={stylingClasses.line}></div>
        
        
            <div className={stylingClasses.paragraph}>

                <p><b><a href='https://git-scm.com/' target={'blank'}>Git</a></b> is a free 
                and open source distributed version control system designed to handle everything from small to very large 
                projects with speed and efficiency.</p>

                <p>Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools 
                    like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient 
                    staging areas, and multiple workflows.</p>

                
                {/* Image container */}
                <div className={stylingClasses.imageMid}>
                    <img src={git_version} alt="" />
                </div>
                
                
            </div>
            
            
                                <p><b>Git needs to be installed on your PC/MAC.</b></p>
                <p><b><a href='https://git-scm.com/downloads' target='_blank'>DOWNLOAD</a></b></p>
           

                <div className={stylingClasses.paragraph}>

                    <h4>Git Commit</h4>
                    <p>Please see this examples for commits <b><a href="https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-header" target="_blank">LINK</a></b></p>

                </div>

            <br/>
            <br/>
            <br/>
    </div>
}