import React from 'react'
import { isTemplateMiddle } from 'typescript'
import { ImageComponent } from '../../../ImageComponent/ImageComponent'
import stylingClasses from './../../../../CSS/Styles.module.css'
import filterImage from './Filter.png'
import mapImage from './Map.png'
import findImage from './Find.png'
import forEachImage from './forEach.png'
import someImage from './Some.png'
import everyImage from './Every.png'
import reduceImage from './Reduce.png'
import includesImage from './Includes.png'
import { Link } from 'react-scroll';

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

        console.log(items)         // "New Bike"
        console.log(filteredItems) // "New Bike"
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

        console.log(items2)      // "bike"
        console.log(mappedItems) // "NEW BIKE"
    // MAP END


//========================================================================================================//

    // Find START
        const items3 = [
            {name: 'bike', price: 100},
            {name: 'TV', price: 140},
            {name: 'book', price: 130},
            {name: 'phone', price: 90},
            {name: 'chair', price: 80},
            {name: 'keyboard', price: 99},
        ]

        const findItem = items3.find((item) => {
            
            return item.name === 'bike'}) // If nothing Found - Error will Thrown
        
        // It's stops iterating as soon as it finds the fist match element        
        // And pass the Reference...

        findItem!.name = 'NEW BIKE' // change the item in the both "locations"

        console.log(items3)   // "NEW BIKE"
        console.log(findItem) // "NEW BIKE"
    // Find END


//========================================================================================================//

    // forEach START
        const items4 = [
            {name: 'bike', price: 100},
            {name: 'TV', price: 140},
            {name: 'book', price: 130},
            {name: 'phone', price: 90},
            {name: 'chair', price: 80},
            {name: 'keyboard', price: 99},
        ]

        items4.forEach((item) => {
            
            console.log(item)  // Print out all items

            // Or we can modify the original item
        }) 
        
    // forEach END


//========================================================================================================//


    // some START
        const items5 = [
            {name: 'bike', price: 100},
            {name: 'TV', price: 140},
            {name: 'book', price: 130},
            {name: 'phone', price: 90},
            {name: 'chair', price: 80},
            {name: 'keyboard', price: 99},
        ]

        // will be true or false
        const hasInexpensiveItems = items5.some((item) => {
            
            return item.price <= 100  
            // if anything in the array with price <= 100 it returns TRUE
            // otherwise FALSE
        })
        
        console.log(hasInexpensiveItems)  // Prints TRUE

    // some END


//========================================================================================================//


        // Every START
        const items6 = [
            {name: 'bike', price: 100},
            {name: 'TV', price: 140},
            {name: 'book', price: 130},
            {name: 'phone', price: 90},
            {name: 'chair', price: 80},
            {name: 'keyboard', price: 99},
        ]

        // will be true or false
        const allInexpensiveItems = items6.every((item) => {
            
            return item.price <= 100  
            // if all element in the array with price <= 100 it returns TRUE
            // otherwise FALSE
        })
        
        console.log(allInexpensiveItems)  // Prints FALSE

    // Every END


//========================================================================================================//


        // Reduce START
        const items7 = [
            {name: 'bike', price: 100},
            {name: 'TV', price: 140},
            {name: 'book', price: 130},
            {name: 'phone', price: 90},
            {name: 'chair', price: 80},
            {name: 'keyboard', price: 99},
        ]

        // will be true or false
        const totalPrice = items7.reduce((acc, item) => {
            
            return  acc + item.price // adding up to acc

        }, 0) // 0 - its a starting point for adding up
        
        console.log(totalPrice)  // Prints 639 that sum up all prices

    // Reduce END


//========================================================================================================//


        // Includes START
        const items8 = [1, 3, 5, 7, 8, 9, 2]

        // will be true or false
        const includesTwo = items8.includes(2)
        
        console.log(includesTwo)  // Prints true as we have 2 in the array, otherwise false

    // Includes END


//========================================================================================================//


    return <div className={stylingClasses.mainContainer}>
            
            <h3>
            Array Functions
            </h3>            
            <div className={stylingClasses.line}></div>

            {/* Paragraph Start */}
            <div className={stylingClasses.paragraph}>

                <ul>
                    <li><b><Link
                        className={stylingClasses.links}
                        activeClass="active"
                        to="filter"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Filter</Link></b> - not modifying the original object and pass the <b>reference</b> to the new array so (they will be the same object and can be modified from either array)</li>
                    <li><b><Link
                        className={stylingClasses.links} 
                        activeClass="active"
                        to="map"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Map</Link></b>- can modify the original object and pass to a new array Value not the Reference</li>
                    <li><b><Link
                        className={stylingClasses.links} 
                        activeClass="active"
                        to="find"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Find</Link></b>- return(reference to the object) as soon as find first match. Will Throw the Error if nothing found </li>
                    <li><b><Link 
                        className={stylingClasses.links}
                        activeClass="active"
                        to="forEach"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >forEach</Link></b>- going through all elements in the array (we can modify the element)</li>
                    <li><b><Link 
                        className={stylingClasses.links}
                        activeClass="active"
                        to="some"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Some</Link></b>- return TRUE or FALSE for the entire array. If at lease one element match the criteria it returns TRUE</li>
                    <li><b><Link 
                        className={stylingClasses.links}
                        activeClass="active"
                        to="every"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Every</Link></b>- return TRUE or FALSE for the entire array. iF ALL elements match the criteria it returns TRUE otherwise FALSE</li>
                    <li><b><Link 
                        className={stylingClasses.links}
                        activeClass="active"
                        to="reduce"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Reduce</Link></b>- adding up all to accumulator and return at the end</li>
                    <li><b><Link 
                        className={stylingClasses.links}
                        activeClass="active"
                        to="includes"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Includes</Link></b>- return True if elements exist in the array, otherwise returns false</li>

                </ul>
                
                
            </div>  {/* Paragraph End */}

            <h4 id="filter">Filter EXAMPLE</h4>
            <ImageComponent image={filterImage} size='medium'/>

            <h4 id="map">Map EXAMPLE</h4>
            <ImageComponent image={mapImage} size='medium'/>

            <h4 id="find">Find EXAMPLE</h4>
            <ImageComponent image={findImage} size='medium'/>

            <h4 id="forEach">forEach EXAMPLE</h4>
            <ImageComponent image={forEachImage} size='medium'/>

            <h4 id="some">Some EXAMPLE</h4>
            <ImageComponent image={someImage} size='medium'/>

            <h4 id="every">Every EXAMPLE</h4>
            <ImageComponent image={everyImage} size='medium'/>

            <h4 id="reduce">Reduce EXAMPLE</h4>
            <ImageComponent image={reduceImage} size='medium'/>

            <h4 id="includes">Includes EXAMPLE</h4>
            <ImageComponent image={includesImage} size='medium'/>

    </div>
}