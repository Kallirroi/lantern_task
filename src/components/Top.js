import React from 'react';

import {Typography, Layout} from 'antd';

const { Title } = Typography;
const { Header } = Layout;

function Top() {
  return (
    <Header 
    	style={{
    		background: "#fff", 
    		paddingTop: '5vh',
        height: '10vh'
    	}}>
      <Title 
      	level={2} 
      	style={{
      		fontWeight: 'normal', 
      		color: '#00f'
      	}}>
      	Simple Weather
      </Title>
    </Header>
  )
}

export default Top;