import { useState, useContext, createContext } from 'react';
import Comp from './Comp';
import './App.css';

export const textContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <textContext.Provider value={{ sani: 'sani' }}>
      <h1>hello</h1>
      <Comp />
    </textContext.Provider>
  );
}

export default App;
