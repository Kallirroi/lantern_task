  
  // A function that receives a string and capitalizes its first character
  export const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
  
  // A function that converts between Kelvin and Fahrenheit
  export const convertKtoF = (K) => (9/5*(K - 273) + 32).toFixed() + ' F'