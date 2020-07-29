## OpenWeather CRA app

A CRA (create-react-app) frontend that allows the user to enter a location and be presented with the weather there, which uses the [Ant Design](https://ant.design/docs/react/introduce) system.


### Process - React
OpenWeather is pretty easy to sign up for, and offers many options (one location, multiple locations, multiple forecasts etc). We are going with [Current weather data](https://openweathermap.org/current).

**Note - I am not going to remove the API key from the committed code since they limit the number of calls one can make on the free plan anyways. If that wasn't the case I would use a package like `dotenv` to set up an `.env` file with global variables.