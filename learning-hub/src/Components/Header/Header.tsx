import React, { useEffect, useState } from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {

    const [location, setLocation] = useState('')
    

    useEffect (() => {

            navigator.geolocation.getCurrentPosition(function(position) {
                
                let latitude = position.coords.latitude
                let longitude = position.coords.longitude
 
                // API request. Response as Jason. RETURNING PROMISE
                fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+ latitude + "&longitude="+ longitude +"&localityLanguage=en")
                .then( res => res.json())
                .then( (data) => {
                    // console.log(data)
                    setLocation(data.city + " - " + data.countryCode)
                }).catch((rej) => {
                    alert('Location API failed ' + rej)
                })          

            });
    });


        
    return <div className={classes.mainContainer}>
        
        <p>{location}</p>

        {/* Navigation */}
        <div className={classes.nav}>


            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/" >
                    Home
                </NavLink>
            </div>
            
            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/react" >
                    React
                </NavLink>
            </div>

            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/ionic" >
                    Ionic
                </NavLink>
            </div>
            
            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/js" >
                    JS
                </NavLink>
            </div>

            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/python" >
                    Python
                </NavLink>
            </div>

            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/git" >
                    Git
                </NavLink>
            </div>

            <div>
                <NavLink className={(navData) => navData.isActive ? `${classes.active}` : "" } to="/db" >
                    Data Base
                </NavLink>
            </div>
            

        </div>
    </div>
}

