import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.25,
        humidity: 47,
        weather: "Haze",
      });
       
     let updateInfo = (result)=>{
        setWeatherInfo(result);
     }
    return(
      <div >
        
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
    );
} 