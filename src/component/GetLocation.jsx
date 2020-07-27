import React, {useEffect, useState} from 'react';
import axios from 'axios'


    const GetLocation = () => {
    const[myWeather,setMyWeather]=useState({
        city:'',
        country:'',
        temp:'',
        icon:'',
        status:'',
        description:'',
        humidity:'',

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
                    setMyWeather({
                        city:res.data.name,
                        country:res.data.sys.country,
                        temp:res.data.main.temp,
                        icon:res.data,
                        status:res.data.weather[0].main,
                        description:res.data.weather[0].description,
                        humidity:res.data.main.humidity,
                    })
                })
        },[myLocation])
        return (
            <div>
                <p>{myWeather.temp}</p>
            </div>
        );
    };

    export default GetLocation;