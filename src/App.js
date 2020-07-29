import React, {useState }from 'react';
import {useGeolocation} from 'react-use';

import { Typography, Button, Layout, Input, Card, Avatar} from 'antd';
import './App.css';

const { Text, Link, Title } = Typography;
const { Header, Footer, Content } = Layout;
const { Meta } = Card;
const { Search } = Input;

function App() {

  const api = {
    key: `f87be23187f2caeeb062a2c01d2c85bd`,
    base: `https://api.openweathermap.org/data/2.5/weather`,
    icon: `http://openweathermap.org/img/wn/`
  }

  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false)
  // const {loading, latitude, longitude} = useGeolocation();

  function fetchAPI(city) {
    setLoading(true)
    fetch(`${api.base}?q=${city}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setResult(result)
          setLoading(false)
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


          <div>
            <Search
              placeholder="Look up a location"
              enterButton="Get weather"
              onSearch={fetchAPI}
              loading={loading}
              style={{ width: 300, margin: '0 1vw'}}
            />
          </div>
          
          {result.weather && 
            <Card style={{ width: 250, margin: '0 auto'}}>
              <Meta
                avatar={
                  result.weather && <Avatar src={`${api.icon}${result.weather[0].icon}@2x.png`}/>
                }
                title={result.name}
                description={result.weather && result.weather[0].description}
              />
            </Card>
          }

        </Content>

        <Footer style={{background: '#bed4db'}}>Made by Kalli using OpenWeather API and the ant.d design language.</Footer>

      </Layout>
    </div>
  );
}

export default App;
