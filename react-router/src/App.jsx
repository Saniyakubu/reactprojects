import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import List from './components/List';
import Details from './components/Details';
import Lost from './components/Lost';
import foods from './Data';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const foodItemsList = foodList.map((items) => {
    return (
      <div key={items.id} className="list">
        <div>
          <h1>foodname: {items.foodname}</h1>
          <p> country: {items.country}</p>
        </div>
        <div>
          <Link className="link" to={`/list/${items.id}`}>
            learn more
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <Link to="/about">About</Link>
      <br />
      <br />
      <Link to="/list">list</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List foodItemsList={foodItemsList} />} />
        <Route path="/list/:id" element={<Details />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </>
  );
}

export default App;
