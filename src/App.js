import React, {useState }from 'react';
import './App.css';

import { Typography, Button } from 'antd';
import {useGeolocation} from 'react-use';

const { Text, Link, Title } = Typography;

function App() {

  const api = {
    key: `f87be23187f2caeeb062a2c01d2c85bd`,
    base: `https://api.openweathermap.org/data/2.5/onecall`
  }

  const [result, setResult] = useState({});
  const {loading, latitude, longitude} = useGeolocation();

  function handleClick(e) {
    e.preventDefault()
    fetch(`${api.base}?lat=${latitude}&lon=${longitude}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setResult(result)
        })
        .catch(error => console.log(error))
  }

  return (
    <div className="App">
        <Title>OpenWeather app</Title>
        
        <div>
          <Text>A simple weather app that geolocates you and fetches the weather forecast using the <Link href="https://openweathermap.org/api/one-call-api" target="_blank">OpenWeather API</Link></Text>
        </div>

        <Button 
          type="primary"
          onClick={handleClick}
          loading={loading}
          >
          {loading ? 'Fetching your browser location...' : 'Get weather'}
        </Button>


    </div>
  );
}

export default App;
