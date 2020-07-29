import React from 'react';
import PropTypes from "prop-types"
import {capitalize, convertKtoF} from '../utils'

import { Typography, Card, Avatar} from 'antd';

const { Meta } = Card;
const { Text, Title } = Typography;

function SearchResult({result, api}) {

  return (
    <Card 
      style={{ 
        width: 300, 
        margin: '5vh auto'
      }} 
      bordered>
      <Meta
        title={
          <>
            {/* ----------- Location ----------- */}
            {result.name}

            {/* ----------- Coordinates ----------- */}
            <div 
              style={{
                fontSize: '1rem', 
                color: '#aaa', 
                fontWeight: 'normal'
              }}>
              {result.coord.lon}, {result.coord.lat}
            </div>
          </>
        }

        description={
          result.weather && 
            <>
              {/* ----------- Icon ----------- */}
              <Avatar 
                shape="square" 
                size="large" 
                src={`${api.icon}${result.weather[0].icon}@2x.png`}/>

              {/* ----------- Description field ----------- */}
              <Title 
                level={3}>
                {capitalize(result.weather[0].description)}
              </Title>
              
              {/* ----------- Main data ----------- */}
              <Text>
                {/*  Iterate over {result.main} */}
                {Object.keys(result.main).map((fieldKey, index)=> 
                  <li key={fieldKey}>
                    {capitalize(fieldKey.replace('_', ' '))} : {index < 4 ? convertKtoF(result.main[fieldKey]) : result.main[fieldKey]}
                  </li>
                )}
              </Text>

              {/* ----------- Wind data ----------- */}
              <Text>
                {/*  Iterate over {result.wind} */}
                {Object.keys(result.wind).map(fieldKey=> 
                  <li key={fieldKey}>
                    Wind {fieldKey}: {result.wind[fieldKey]}
                  </li>
                )}
              </Text>
            </>
          }
      />
    </Card>
  )
}


SearchResult.defaultProps = {
  result: {},
  api: {},
}

SearchResult.propTypes = {
  result: PropTypes.object,
  api: PropTypes.object,
}

export default SearchResult;