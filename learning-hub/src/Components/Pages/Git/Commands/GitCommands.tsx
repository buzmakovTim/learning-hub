import React, {useState, useEffect} from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'

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




export const GitCommands = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            Git Commands
            </h3>            
            <div className={stylingClasses.line}></div>
        
        
            <div className={stylingClasses.paragraph}>

                <p><b><a href='https://git-scm.com/docs' target={'blank'}>Reference to official documentation</a></b></p>

            </div>


                                                <h3>Basic Commands</h3>
            
            {/* Paragraph Part */}
            <div className={stylingClasses.paragraph}>  
                <table>
                    <tbody>
                        <tr className={stylingClasses.blue}><td><b>Action</b></td> <td><b>Command</b></td></tr>
                        
                        <tr><td>Initialize the Directory</td> <td>git init</td></tr>
                        <tr><td>Clone repository</td> <td>git clone https://github.com/libgit2/libgit2</td></tr>
                    </tbody>
                </table>
            </div>
            {/* Paragraph Part */}


                                                <h3>Creating New Branch</h3>
            
            {/* Paragraph Part */}
            <div className={stylingClasses.paragraph}>  
                <table>
                    <tbody>
                        <tr className={stylingClasses.blue}><td><b>Action</b></td> <td><b>Command</b></td></tr>
                        
                        <tr><td>Creating New branch</td> <td>git branch newBranchName</td></tr>
                        <tr><td>Creating New branch and open it</td> <td>git checkout -b newBranchName</td></tr>
                        <tr><td>List all of the branches in your repository</td> <td>git branch <b>or</b> git branch --list</td></tr>
                        <tr><td>Switching branches</td> <td>git checkout differentBranchName</td></tr>
                        <tr><td>Deleting branch (safe mode)</td> <td>git branch -d branchToDelete</td></tr>
                        <tr><td>Deleting branch FORCE</td> <td>git branch -D branchToDelete</td></tr>
                    </tbody>
                </table>
            </div>
            {/* Paragraph Part */}


                                                    <h3>Committing and Pushing</h3>
            
            {/* Paragraph Part */}
            <div className={stylingClasses.paragraph}>  
                <table>
                    <tbody>
                        <tr className={stylingClasses.blue}><td><b>Action</b></td> <td><b>Command</b></td></tr>
                        
                        <tr><td>Add all files for commit</td> <td>git add .</td></tr>
                        <tr><td>Add particular file</td> <td>git add fileName</td></tr>
                        <tr><td>Add particular directory</td> <td>git add directoryName</td></tr>
                        <tr><td>Commit</td> <td>git commit -m "Comment for this commit"</td></tr>
                        <tr><td>Push</td> <td>git push</td></tr>
                    </tbody>
                </table>
            </div>
            {/* Paragraph Part */}

            <br/>
            <br/>
            <br/>
    </div>
}