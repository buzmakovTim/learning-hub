import React from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'


export const ReactInstall = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            About React
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                <p><b><a href='https://en.wikipedia.org/wiki/React_(JavaScript_library)' target={'blank'}>React</a></b> is a free and open-source front-end JavaScript library for 
                    building user interfaces based on UI components. It is maintained 
                    by Meta and a community of individual developers and companies. 
                    React can be used as a base in the development of single-page or 
                    mobile applications.</p>

                <br/>
                <p><b>10 Most Popular React Native Apps of 2020:</b></p>
                <span>1. Facebook</span><br/>
                <span>2. Instagram</span><br/>
                <span>3. Skype</span><br/>
                <span>4. Uber Eats</span><br/>
                <span>5. Walmart</span><br/>
                <span>6. Pinterest</span><br/>
                <span>7. Bloomberg</span><br/>
                <span>8. SoundCloud Pulse</span><br/>
                <span>9. Discord</span><br/>
                <span>10. Wix</span><br/>
            </div>


            {/* Create new react App */}
            <br/>
            <br/>
            <br/>
            <h3>
            Create a New React App
            </h3>
            <div className={stylingClasses.line}></div>
            <div className={stylingClasses.paragraph}>
                

                <p>For using <b><a href='https://yarnpkg.com/getting-started' target='blank'>Yarn</a></b></p>

                <div className={stylingClasses.codingPart}>
                    <span>yarn create-react-app my-app</span> 
                    <br/>
                    <span>cd my-app</span>
                    <br/>
                    <span>yarn start</span>

                    <br/>
                    <br/>
                    <br/>
                    <span className={stylingClasses.spanColorOrange}>For Typescript</span>
                    <br/>
                    <br/>
                    <span>yarn create-react-app my-app --template typescript</span>
                </div>
                
                <br/>
                <p>For using <b>Npx</b></p>

                <div className={stylingClasses.codingPart}>
                    <span>npx create-react-app my-app</span> 
                    <br/>
                    <span>cd my-app</span>
                    <br/>
                    <span>npx start</span>

                    <br/>
                    <br/>
                    <br/>
                    <span className={stylingClasses.spanColorOrange}>For Typescript</span>
                    <br/>
                    <br/>
                    <span>npx create-react-app my-app --template typescript</span>
                </div>



            <br/>
            <br/>
            <br/>
            </div>
    
    </div>
}