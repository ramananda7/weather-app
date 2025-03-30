import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }){
    let [city , setCity] = useState("");
    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key ="2e539d2bcdae295e4d39d9cd0a4a6449";
    let getWeatherInfo = async () =>{
      let res = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
      let json = await res.json();
      console.log(json);

      let result = {
        city:city,
        temp: json.main.temp,
        tempMin:json.main.temp_min,
        tempMax:json.main.temp_max,
        humidity:json.main.humidity,
        feelsLike:json.main.feels_like,
        weather:json.weather[0].description,

      };
     // console.log(result);
      return result;
    };
    let handleChange = (e)=>{
       setCity(e.target.value);
    };
    let handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
       let  result = await getWeatherInfo();
       updateInfo(result);
       setCity("");
     };
    return (
        <div>
           <h3>search for the weather</h3>
           <form onSubmit={handleSubmit}>
           <TextField 
             id="city"
             label="city name" 
             variant="outlined"
             value={city}
             onChange={handleChange}
             required/>
           
           <br /><br />
           <Button variant="contained" type='submit'>
               Send
            </Button>
           </form>
        </div>
        
    );
}