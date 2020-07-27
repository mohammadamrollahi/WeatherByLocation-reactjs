import React, {useEffect, useState} from 'react';
import axios from 'axios'


    const GetLocation = () => {
    const[weather,setWeather]=useState({

    })
    const apikey="appid=eb30e0f85a64d426cd77d65a96f11787"
        const [myLocation,setmyLocation]=useState({})
        let promise = new Promise(function (resolve, reject) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        resolve(position.coords)

                    })
                }
                else
                reject(Error("network error"))

        })
        useEffect(()=>{
            promise.then((obj)=>{
                setmyLocation(obj)
            },(e)=>alert(e))

        },[])
        useEffect(()=>{
            console.log(myLocation)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${myLocation.latitude}&lon=${myLocation.longitude}&&appid=eb30e0f85a64d426cd77d65a96f11787
`)
                .then(res=>{
                    console.log(res.data)
                })
        },[myLocation])
        return (
            <div>
                <button onClick={()=>console.log(myLocation)}>click me</button>
            </div>
        );
    };

    export default GetLocation;