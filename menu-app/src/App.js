import './App.css';
import Data from './Data';
import { useState } from 'react';

const addnewBtn = [
  'all',
  ...new Set(
    Data.map((items) => {
      return items.category;
    })
  ),
];

function App() {
  const [foodList, setFoodList] = useState(Data);
  const [btn, setBtn] = useState(addnewBtn);

  console.log(btn);
  const change = (id) => {
    if (id === 'all') {
      return setFoodList(Data);
    }
    console.log(id);
    const newarray = Data.filter((items) => items.category === id);
    setFoodList(newarray);
  };
  const fooditems = foodList.map((food) => {
    const { id, foodName, category, image } = food;
    return (
      <div key={id} className="list">
        <div>
          <img src={image} alt="id" />
          <p>{foodName}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="btn">
        {btn.map((items) => {
          return <button onClick={() => change(items)}>{items}</button>;
        })}
      </div>
      <div className="list">{fooditems}</div>
    </div>
  );
}

export default App;
