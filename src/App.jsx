import React,{useState} from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [data,setData]=useState({})
  const [location,setLocation]=useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
//{data.location ? <p>{data.name}</p> : null}   <h1>{data.temp_c}</h1>
  return (

    <div className="App">
      <div className='search'>
      <h1>Weather Application</h1><br />
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        />
      </div>

      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p><b>City: </b>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>Temperature: {Math.floor((data.main.temp-32)*(5/9))}°C</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className='bottom'>
          <div className='humidity'>  
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p><b>Humidity</b></p> 
          </div>
          <div className='wind'>
            {data.wind ? <p>{data.wind.speed} Kmph</p> : null}
            <p><b>Wind Speed</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
