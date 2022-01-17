import React from 'react'
import { ImageComponent } from '../../../ImageComponent/ImageComponent'
import stylingClasses from './../../../../CSS/Styles.module.css'
import Rating from './../../../StarRaiting/Rating/Rating'
import RatingComponentImage from './RatingComponent.png'
import StarComponentImage from './StarComponent.png'

export const ReactProps = () => {


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            Props
            </h3>            
            <div className={stylingClasses.line}></div>

            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>
                
                <p><b>Props</b> - Properties</p>
                <p>Using Props we can reuse Component with different properties and behave differently</p>
                <p>Also we can pass <b>Functions</b> with the Props</p>

                

            </div>  {/* Paragraph End */}


            <Rating value={5}/> {/* Rating Stars Default 5 stars selected */}

            <ImageComponent image={RatingComponentImage} size='medium'/>
            <ImageComponent image={StarComponentImage} size='medium'/>

    </div>
}