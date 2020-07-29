import React, {useState }from 'react';
import './App.css';

import { Typography, Space, Button } from 'antd';

const { Text, Link, Title } = Typography;

function App() {

  const api = {
    key: `f87be23187f2caeeb062a2c01d2c85bd`,
    base: `https://api.openweathermap.org/data/2.5/onecall`
  }

  const coordinates = { //dummy coordinates for now
    lat: `40.12`,
    long: `-96.66`
  }

  const [request, setRequest] = useState('');
  const [results, setResults] = useState({});

  function handleClick(e) {
    e.preventDefault()
    console.log('fetching')
    fetch(`${api.base}?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          console.log(result)
        })
        .catch(error => console.log(error))
  }

  return (
    <div className="App">
        <Title>OpenWeather app</Title>
        
        <Space direction="vertical">
          <Text>A simple weather app that geolocates you and fetches the weather forecast using the <Link href="https://openweathermap.org/api/one-call-api" target="_blank">OpenWeather API</Link></Text>
        </Space>

        <Space direction="vertical">
          <Button 
            type="primary"
            onClick={handleClick}
            >
            Fetch dummy data
          </Button>
        </Space>
    </div>
  );
}

export default App;
