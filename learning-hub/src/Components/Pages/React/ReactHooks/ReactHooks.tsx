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




export const ReactHooks = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            React Hooks
            </h3>            
            <div className={stylingClasses.line}></div>
        
        
            <div className={stylingClasses.paragraph}>

                <p><b><a href='https://reactjs.org/docs/hooks-intro.html' target={'blank'}>Introducing Hooks</a></b></p>

                <p><b>Hooks</b> are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
            
            </div>


            {/* State Hook */}
                                                <h3>State Hook</h3>
            <p>This example renders a counter. When you click the button, it increments the value:</p>
            
            {/* Paragraph Part */}
            <div className={stylingClasses.paragraph}>
                {/* Coding Part */}
                    <div className={stylingClasses.codingPart}>
                    <span>import <b>React , &#123; useState &#125; </b> from <b> 'react' ; </b></span> 
                    <br/>
                    <br/>
                    <span>function <b>Example ( )  &#123; </b></span>
                    <br/>
                    <span><i>&ensp; &ensp;  &#47;&#47; Declare a new state variable, which we'will call "count"</i></span>
                    <br/>
                    <span> &ensp; &ensp; const [ <b>count, setState</b> ] = <b>useSatate(0) ;</b>  </span> 
                    <br/>
                    <br/>
                    <span> &ensp; &ensp; return (  </span>
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp;  &#60; div &#62;  </span>
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &#60; p &#62; You clicked &#123; <b>count</b> &#125; times &#60; &#47; p &#62;  </span> 
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &#60;button <b>onClick</b> = &#123; ( ) &#61;&#62; <b>setCount</b> ( <b>count</b> + 1 ) &#125;&#62;   </span> 
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; Click me </span> 
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &#60;&#47; button &#62;</span> 
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &#60;&#47; div &#62;</span>
                    <br/>
                    <span> &ensp; &ensp;) ; </span>
                    <br/>
                    <span> &#125; </span>  
                </div>

            <p>And here how this works  <button onClick={ () => setCount(count + 1)}>Click me</button>
            - You clicked {count} times</p>
            
            
            <p>Here, useState is a Hook (we’ll talk about what this means in a moment). We call it inside a function component to add some 
                local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a 
                function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to 
                this.setState in a class, except it doesn’t merge the old and new state together. (We’ll show an example comparing 
                useState to this.state in <a href='https://reactjs.org/docs/hooks-state.html' target={'blank'}>Using the State Hook.</a>)</p>
            <p>The only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. 
                Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. The initial 
                state argument is only used during the first render.</p>
            
            
            <br/>
            <p><b>But what is a Hook?</b></p>
            
            <p>Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work 
                inside classes — they let you use React without classes. (We don’t recommend rewriting your existing components overnight 
                but you can start using Hooks in the new ones if you’d like.)</p>

            </div>
            {/* State Hook End */}


            {/* Effect Hook Start */}
                                                                <h3>Effect Hook</h3>
            
            {/* Paragraph Part */}
            <div className={stylingClasses.paragraph}>

                <p>You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. 
                    We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t 
                    be done during rendering.</p>
                <p>
                The Effect Hook, <b>useEffect</b>, adds the ability to perform side effects from a function component. It serves the same purpose 
                as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. 
                (We’ll show examples comparing useEffect to these methods in <a href="https://reactjs.org/docs/hooks-effect.html" target='_blank'><b>Using the Effect Hook.</b></a>)
                </p>
                <p>
                For example, this component sets the document title after React updates the DOM:
                </p>
                {/* Coding Part */}
                <div className={stylingClasses.codingPart}>
                    <span>import <b>React , &#123; useState, useEffect &#125; </b> from <b> 'react' ; </b></span> 
                    <br/>
                    <br/>
                    <span>function <b>Example ( )  &#123; </b></span>
                    <br/>
                    <span><i>&ensp; &ensp;  &#47;&#47; Declare a new state variable, which we'will call "count"</i></span>
                    <br/>
                    <span> &ensp; &ensp; const [ <b>count, setState</b> ] = <b>useSatate(0) ;</b>  </span> 
                    <br/>
                    <br/>
                    <span><i>&ensp; &ensp; &#47;&#47; Similar to componentDidMount and componentDidUpdate:</i></span>
                    <br/> 
                    <b>
                    <span> &ensp; &ensp; useEffect ( ( ) =&#62; &#123;</span> 
                    <br/>
                    <span><i>&ensp; &ensp; &ensp; &ensp; &#47;&#47; Update the document title using the browser API</i></span>
                    <br/> 
                    <span> &ensp; &ensp; &ensp; &ensp; document.title = `You clicked $&#123;count&#125; times`;</span> 
                    <br/> 
                    <span> &ensp; &ensp;  &#125; ) ;</span> 
                    </b>
                    <br/>
                    <br/>
                    <span> &ensp; &ensp; return (  </span>
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp;  &#60; div &#62;  </span>
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &#60; p &#62; You clicked &#123; <b>count</b> &#125; times &#60; &#47; p &#62;  </span> 
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &#60;button <b>onClick</b> = &#123; ( ) &#61;&#62; <b>setCount</b> ( <b>count</b> + 1 ) &#125;&#62;   </span> 
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; Click me </span> 
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &#60;&#47; button &#62;</span> 
                    <br/>
                    <span> &ensp; &ensp; &ensp; &ensp; &#60;&#47; div &#62;</span>
                    <br/>
                    <span> &ensp; &ensp;) ; </span>
                    <br/>
                    <span> &#125; </span>  
                </div>

            </div>

            <br/>
            <br/>
            <br/>
    </div>
}