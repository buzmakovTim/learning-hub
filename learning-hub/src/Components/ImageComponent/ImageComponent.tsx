import React from 'react'
import c from './ImageComponent.module.css'

type ImagePropsType = {
    image: string;
    size: 'small' | 'medium' | 'large'
}

export const ImageComponent:React.FC<ImagePropsType> = ({image, size}) => {

    if(size === 'small'){
        
        return <div>
            <img className={c.small} src={image} />    
        </div>
    } else if (size === 'medium') {
        
        return <div>
            <img className={c.medium} src={image} />    
        </div>
    } else {
        
        return <div>
            <img className={c.large} src={image} />
        </div>
    }
    
}