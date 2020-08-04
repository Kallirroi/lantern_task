import React from 'react';

import { Typography, Layout } from 'antd';

const { Text } = Typography;
const { Footer } = Layout;

function Bottom() {
  return (
	  <Footer 
	    style={{
	      color: '#00f', 
	      borderTop: '1px solid #00f', 
	      background: '#fff'
	    }}>
	    <Text>Made by Kalli using OpenWeather API and the ant.d design language.</Text>
	  </Footer>
  )
}

export default Bottom;



