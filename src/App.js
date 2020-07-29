import React, {useState, useRef}from 'react';
import {useGeolocation} from 'react-use';

import { Typography, Button, Layout, Input, Card, Avatar, Alert} from 'antd';
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
  const searchRef = useRef(null)

  function fetchAPI(city) {
    if (city!=='') {
      setLoading(true)
      fetch(`${api.base}?q=${city}&appid=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setResult(result)
            setLoading(false)
          })
      searchRef.current.value = ''
    }
  }

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>

        <Header style={{background: '#e9fef3', paddingTop: '2vh'}}>
          <Title level={3}>OpenWeather app</Title>
        </Header>
          
        <Content style={{background: '#fff'}}>
          <div style={{margin: '2vh 0'}}>
            <Text style={{margin: '2vh 0'}}>A simple weather app using the <Link href="https://openweathermap.org/api/one-call-api" target="_blank">OpenWeather API</Link>.</Text>
          </div>


          <div>
            <Search
              ref={searchRef}
              placeholder="Look up a location"
              enterButton="Get weather"
              onSearch={fetchAPI}
              loading={loading}
              style={{ width: 300, margin: '0 1vw'}}
            />
          </div>
          
          {result.cod == '404' && 
            <Alert
              style={{ width: 300, margin: '2vh auto'}}
              message={`Error: ${result.message}`}
              type='error'
              closable
            />
          }

          {result.weather && 
            <Card style={{ width: 250, margin: '0 auto'}}>
              <Meta
                avatar={
                  result.weather && <Avatar src={`${api.icon}${result.weather[0].icon}@2x.png`}/>
                }
                title={result.name}
                description={result.weather && 
                  <>
                    <Title level={3}>{result.weather[0].description}</Title>
                    <div>{Object.keys(result.main).map(fieldKey=> <li key={fieldKey}>{fieldKey}:{result.main[fieldKey]}</li>)}</div>
                  </>
                }
              />
            </Card>
          }



        </Content>

        <Footer style={{background: '#e9fef3'}}>Made by Kalli using OpenWeather API and the ant.d design language.</Footer>

      </Layout>
    </div>
  );
}

export default App;
