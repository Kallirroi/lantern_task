import React, {useState, useRef} from 'react';

import SearchResult from './components/SearchResult'
import Top from './components/Top'
import Bottom from './components/Bottom'

import { Typography, Layout, Input, Alert} from 'antd';
import './App.css';

const { Text, Link } = Typography;
const { Content } = Layout;
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
      searchRef.current.setValue('')
    }
  }

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        {/* ----------- TOP ----------- */}
        <Top />

        {/* ----------- MAIN CONTENT ----------- */}
        <Content style={{ background: '#fff'}}>

          <div style={{ margin: '5vh 0'}}>
            <Text>A barebones weather app built on the <Link style={{color: '#00f'}} href="https://openweathermap.org/api/one-call-api" target="_blank">OpenWeather API</Link>.
            </Text>
          </div>

          <Search
            ref={searchRef}
            placeholder="Look up a location"
            enterButton="Get current weather"
            onSearch={fetchAPI}
            loading={loading}
            style={{ 
              width: 350
            }}
          />

          {/* Checking whether we have received an error back from the API */}
          {result.cod === '404' && 
            <Alert
              style={{ width: 350, margin: '5vh auto'}}
              message={`Error: ${result.message}`}
              type='error'
              closable
            />
          }

          {/* If we have the data, render it using SearchResult component */}
          {result.weather && 
            <SearchResult result={result} api={api}/>
          }
        </Content>

        {/* ----------- FOOTER ----------- */}
        <Bottom />

      </Layout>
    </div>
  );
}

export default App;
