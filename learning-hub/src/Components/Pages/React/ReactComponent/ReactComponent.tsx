import React from 'react'
import stylingClasses from './../../../../CSS/Styles.module.css'


export const ReactComponent = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            React Components
            </h3>            
            <div className={stylingClasses.line}></div>

            <div className={stylingClasses.paragraph}>
                <p><b><a href='https://reactjs.org/docs/react-component.html' target={'blank'}>React.Component</a></b></p>

                
                <p>React lets you define components as <b>classes</b> or <b>functions</b>. Components defined as classes currently 
                    provide more features which are described in detail on this page. To define a React component class,
                     you need to extend React.Component:</p>

            

                {/* Coding Part */}
                <div className={stylingClasses.codingPart}>
                    <span>class <b>Welcome</b> extends <b>React.Component</b> &#123;</span> 
                    <br/>
                    <span>&ensp;&ensp; render( ) &#123;</span>
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp;return &#60;h1&#62;<b>Hello</b>&#60;&#47;h1&#62;</span>
                    <br/>
                    <span>&ensp;&ensp;&#125;</span>
                    <br/>
                    <span>&#125;</span>
   
                </div>

                <p>The only method you must define in a React.Component subclass is called <b>render(). </b> 
                    All the other methods described on this page are optional.</p>                
                
                <p><b>We strongly recommend against creating your own base component classes.</b> In React components, 
                <a href='https://reactjs.org/docs/composition-vs-inheritance.html' target='_blank'> code reuse is primarily achieved through composition rather than inheritance.</a></p>
            
            
                <h3>Function Component</h3>
                {/* Coding Part */}
                <div className={stylingClasses.codingPart}>
                    <span>export const <b>Skill</b> &#61; &#40;props&#58; SkillPropsType&#41; &#61;&#62; &#123;</span> 
                    <br/>
                    <span>&ensp;&ensp; return( ) &#123;</span>
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp; &#60;h1&#62;<b>Hello</b>&#60;&#47;h1&#62;</span>
                    <br/>
                    <span>&ensp;&ensp;&#125;</span>
                    <br/>
                    <span>&#125;</span>
                </div>
                <p>Or more fancy way</p>
                {/* Coding Part */}
                <div className={stylingClasses.codingPart}>
                    <span>export const <b>Skill &#58; </b>React.FC&#60;SkillPropsType&#62; &#61; &#40; &#123;id, title&#125; &#41; &#61;&#62; &#123;</span> 
                    <br/>
                    <span>&ensp;&ensp; return( ) &#123;</span>
                    <br/>
                    <span>&ensp;&ensp;&ensp;&ensp; &#60;h1&#62;<b>Hello</b>&#60;&#47;h1&#62;</span>
                    <br/>
                    <span>&ensp;&ensp;&#125;</span>
                    <br/>
                    <span>&#125;</span>
                </div>
            
            </div>


            <br/>
            <div className={stylingClasses.line}></div>
            
                <h3>The Component Lifecycle</h3>
                <span>You can use this <b><a href='https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/' target='_blank'>lifecycle diagram</a></b> as a cheat sheet</span>
            <br/>
            <br/>
    </div>
}