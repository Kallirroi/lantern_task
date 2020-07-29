import React, {useState }from 'react';
import {useGeolocation} from 'react-use';

import './App.css';
import { Typography, Button, Layout } from 'antd';
import { Card, Avatar } from 'antd';

const { Text, Link, Title } = Typography;
const { Header, Footer, Content } = Layout;
const { Meta } = Card;

function App() {

  const api = {
    key: `f87be23187f2caeeb062a2c01d2c85bd`,
    base: `https://api.openweathermap.org/data/2.5/onecall`, 
    icon: `http://openweathermap.org/img/wn/`
  }

  const [result, setResult] = useState({});
  const [city, setCity] = useState('')
  const {loading, latitude, longitude} = useGeolocation();

  function handleClick(e) {
    e.preventDefault()
    fetch(`${api.base}?lat=${latitude}&lon=${longitude}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setResult(result)
          setCity(result.timezone.split('/')[1])
        })
        .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>

        <Header style={{background: '#bed4db', paddingTop: '1vh'}}>
          <Title level={2}>OpenWeather app</Title>
        </Header>
          
        <Content style={{background: '#fff'}}>
          <div style={{margin: '2vh 0'}}>
            <Text style={{margin: '2vh 0'}}>A simple weather app using the <Link href="https://openweathermap.org/api/one-call-api" target="_blank">OpenWeather API</Link>.</Text>
          </div>

          <Button 
            style={{margin: '2vh 0'}}
            type="default"
            onClick={handleClick}
            loading={loading}
            >
            {loading ? 'Fetching your browser location...' : 'Get local weather'}
          </Button>
          
          {city === '' 
            ? null 
            : 
            <>
              <Card style={{ width: 250, margin: '0 auto'}}>
                <Meta
                  avatar={
                    <Avatar src={`${api.icon}${result.current.weather[0].icon}@2x.png`}/>
                  }
                  title={city}
                  description={result.current.weather[0].description}
                />
              </Card>
            </>
          }
          

        </Content>

        <Footer style={{background: '#bed4db'}}>Made by Kalli using OpenWeather API and the ant.d design language.</Footer>

      </Layout>
    </div>
  );
}

export default App;
