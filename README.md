## OpenWeather CRA app

A CRA (create-react-app) frontend that allows the user to enter a location and be presented with the weather there, which uses the [Ant Design](https://ant.design/docs/react/introduce) system.


### Process - React
OpenWeather is pretty easy to sign up for, and offers many options (one location, multiple locations, multiple forecasts etc). We are going with [Current weather data](https://openweathermap.org/current).

*Note - I am not going to remove the API key from the committed code since they limit the number of calls one can make on the free plan anyways. If that wasn't the case I would use a package like `dotenv` to set up an `.env` file with global variables.*

Basic characteristics (you can see more details about my to-do process in the [Projects page](https://github.com/Kallirroi/lantern_task/projects/1)):
- Fetches the current weather data for a given city using the API 
- Handles empty search strings
- Handles errors by displaying an error modal (in case the city wasn't found)
- Presents the current weather information as provided by the following objects in the JSON response: 
```
"coord": { "lon": 139,"lat": 35},
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 281.52,
    "feels_like": 278.99,
    "temp_min": 280.15,
    "temp_max": 283.71,
    "pressure": 1016,
    "humidity": 93
  },
  "wind": {
    "speed": 0.47,
    "deg": 107.538
  },
  ```

### Process - UX/UI
Using a design system has the upside of providing full responsiveness out of the box, but the downside of locking us into their own UI patterns. I have been using `ant.d` for a few projects and I know my way around it - I have no reason to believe its better than the other existing systems. I have tried minimally styling the components, and I am doing it inline for the ones that do need it (with the exception of hover effects which are described in `App.css`). 

I decided to design mobile-first since I have the tendency to check the weather on my phone. Here is a screenshot of my Figma file with some basic progression from mockups to finer-tuned screen.
![Figma screenshot](https://user-images.githubusercontent.com/10440556/88853138-48492a00-d1bd-11ea-8ae7-8da89261c487.png)
