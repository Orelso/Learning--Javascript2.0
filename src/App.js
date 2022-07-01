import logo from './logo.svg';
import './App.css';

function App() {
  // kelvin is equal to 293
  const kelvin = 293;
  // kelvin minus 273 equals celsius
  const celsius = kelvin - 273;
  //celsius * 9/5 + 32 equals fahrenheit
  let fahrenheit = celsius * (9 / 5) + 32;
  fahrenheit = Math.floor(fahrenheit)
}

// kelvin is equal to 293
const kelvin = 293;
// kelvin minus 273 equals celsius
const celsius = kelvin - 273;
//celsius * 9/5 + 32 equals fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit)

export default App;
