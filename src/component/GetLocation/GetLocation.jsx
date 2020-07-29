import React, {useEffect, useState} from 'react';
import axios from 'axios'
import ShowWeather from '../ShowWeather/ShowWeather'

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
        const [myLocation,setmyLocation]=useState({})
        const apikey='eb30e0f85a64d426cd77d65a96f11787'
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

        })
        useEffect(()=>{
            console.log(myLocation.longitude)
            if(myLocation.latitude!=undefined)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${myLocation.latitude}&lon=${myLocation.longitude}&appid=${apikey}
            `)
                .then(res=>{
                    console.log(res.data)
                     setMyWeather({
                         city:res.data.name,
                         country:res.data.sys.country,
                         temp:res.data.main.temp,
                         icon:res.data.weather[0].icon,
                         status:res.data.weather[0].main,
                         description:res.data.weather[0].description,
                         humidity:res.data.main.humidity,
                     })
                }).catch((e)=>console.log(e))
        },[myLocation])
        return (
            <ShowWeather myWeather={myWeather}/>
        );
    };

    export default GetLocation;