import React from 'react';
import PropTypes from "prop-types"

import { Typography, Card, Avatar} from 'antd';

const { Meta } = Card;
const { Text, Title } = Typography;

function SearchResult({result, api}) {

  // A function that receives a string and capitalizes its first character
  const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
  
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
                {Object.keys(result.main).map(fieldKey=> 
                  <li key={fieldKey}>
                    {capitalize(fieldKey.replace('_', ' '))}: {result.main[fieldKey]}
                  </li>
                )}
              </Text>

              {/* ----------- Wind data ----------- */}
              <Text>
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