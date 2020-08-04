import React from 'react';

import Top from './components/Top'
import Main from './components/Main'
import Bottom from './components/Bottom'

import {Layout} from 'antd';
import './App.css';

function App() {

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Top />
        <Main />
        <Bottom />
      </Layout>
    </div>
  );
}

export default App;
