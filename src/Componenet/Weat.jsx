import React, { useState } from 'react';
import axios from 'axios';
export default function Weat() {
  const [city, setCity] = useState(''); // Initialize state with an empty string
const[weather,setweather]=useState('');
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const fetchweather=async()=>
  {
    try{
const responce=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`54709f1f435556e8de5b44f85ba87158`
    }

`)
setweather(responce);
    }
    
    catch(error){
    console.log(" error in fetching data",error) 

    }
  }
  const handleweather=()=>
  {
  fetchweather();
  }

  return (
    <>
      <div 
        className='Container' 
        style={{
          height: "600px", 
          width: "650px", 
          backgroundColor: "#ADDBF8", 
          textAlign: "center", 
          margin: "20px auto"
        }}
      >
        <input 
          type='text' 
          placeholder='Enter city name' 
          style={{
            width: "99%", 
            height: "60px", 
            marginTop: "80px", 
            fontSize: "50px"
          }} 
          value={city} 
          onChange={handleCity}
        />
        <button 
          style={{
            height: "30px", 
            width: "300px", 
            marginTop: "100px"
          }} onClick={handleweather}
        >
          GET WEATHER
        </button>
        {
        weather && <>
        <div style={{marginTop :"20px"}}>
        <h1>{weather.data.sys.country}</h1>
<h2>{weather.data.name}</h2>
<p>Tempertue is : {weather.data.main.temp}</p>
<p>Description :{weather.data.weather[0].description}</p>


        </div></> }
      </div>
    </>
  );
}
