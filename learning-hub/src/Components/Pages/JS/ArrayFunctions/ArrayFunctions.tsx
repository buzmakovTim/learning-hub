import React from 'react'
import { isTemplateMiddle } from 'typescript'
import { ImageComponent } from '../../../ImageComponent/ImageComponent'
import stylingClasses from './../../../../CSS/Styles.module.css'
import filterImage from './Filter.png'
import mapImage from './Map.png'

export const ArrayFunctions = () => {


    // FILTER START
        const items = [
            {name: 'bike', price: 100},
            {name: 'TV', price: 140},
            {name: 'book', price: 130},
            {name: 'phone', price: 90},
            {name: 'chair', price: 80},
            {name: 'keyboard', price: 99},
        ]

        const filteredItems = items.filter((item) => {
            return item.price <= 100}) 
            
    // In the filtered array will be all items with price <= 100
        
        filteredItems[0].name = 'NEW Bike'  
        // WILl CHANGE THE NAME in BOTH ARRAYS as we copy the 
        // reference for the original array (MAP will create a new)  

        console.log(items)
        console.log(filteredItems)
    // FILTER END

//========================================================================================================//

    // MAP START
        const items2 = [
            {name: 'bike', price: 100},
            {name: 'TV', price: 140},
            {name: 'book', price: 130},
            {name: 'phone', price: 90},
            {name: 'chair', price: 80},
            {name: 'keyboard', price: 99},
        ]

        const mappedItems = items2.map((item) => {
            item.name = '= ' + item.name + ' =' // Modifying original Array
            return item.name})

    // In the mappedItems array will be just the names
    // We also can modified the original array        
        
        mappedItems[0] = 'NEW BIKE' // change the only in the mappedArray

        console.log(items2)
        console.log(mappedItems)
    // MAP END


//========================================================================================================//


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            Array Functions
            </h3>            
            <div className={stylingClasses.line}></div>

            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>
                
                <p>
                <b>Filter</b> - not modifying the original object and pass the <b>reference</b> to the new array so (they will be the same object and can be modified from either array)
                <br/>
                <b>Map</b>- can modify the original object and pass to a new array Value not the Reference
                <br/>
                <b>Sort</b>
                <br/>
                <b>Reduce</b>
                <br/>
                </p>
                
            </div>  {/* Paragraph End */}

            <h4>Filter EXAMPLE</h4>
            <ImageComponent image={filterImage} size='medium'/>

            <h4>Map EXAMPLE</h4>
            <ImageComponent image={mapImage} size='medium'/>

    </div>
}