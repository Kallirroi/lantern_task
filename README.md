## OpenWeather CRA app

A CRA (create-react-app) frontend that allows the user to enter a location and be presented with the weather there, which uses the [Ant Design](https://ant.design/docs/react/introduce) system.


### Process - React
OpenWeather is pretty easy to sign up for, and all membership options use ["One Call API"](https://openweathermap.org/api/one-call-api) which looks like an updated API that bundles current, minute, hourly, daily and some historical data all in one. Great!

**Note - I am not going to remove the API key since they limit the number of calls one can make on the free plan anyways. If that wasn't the case I would use a package like `dotenv` to set up an `.env` file with global variables. 