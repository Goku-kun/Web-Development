const kelvin = 293;
// declared constant variable kelvin
let celsius = kelvin - 273;
// declared another variable converting from kelvin
let fahrenheit = celsius * (9 / 5) + 32;
// declared variable converting from celsius
fahrenheit = Math.floor(fahrenheit);
// using the floor method to convert value
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
