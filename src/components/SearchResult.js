import React from 'react';
import PropTypes from "prop-types"

import { Typography, Card, Avatar} from 'antd';

const { Meta } = Card;
const { Text, Title } = Typography;

function SearchResult({result, api}) {

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
            {result.name}
            <Text style={{fontSize: '1rem'}}>
              {result.coord.lon}, {result.coord.lat}
            </Text>
          </>
        }

        description={
          result.weather && 
            <>
              <Avatar 
                shape="square" 
                size="large" 
                src={`${api.icon}${result.weather[0].icon}@2x.png`}/>

              <Title 
                level={3}>
                {capitalize(result.weather[0].description)}
              </Title>
              
              <Text>
                {Object.keys(result.main).map(fieldKey=> 
                  <li key={fieldKey}>
                    {capitalize(fieldKey.replace('_', ' '))}: {result.main[fieldKey]}
                  </li>
                )}
              </Text>

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