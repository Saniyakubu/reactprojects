import { useContext } from 'react';
import { DataContext } from './propContext';
import FormInputs from './components/FormInputs';
import './App.css';

function App() {
  const { Data, setData } = useContext(DataContext);

  console.log(Data);

  async function deleteItem(id) {
    console.log(id);
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE',
    });
    const removeitem = Data.filter((items) => items.id !== id);
    setData(removeitem);
  }

  return (
    <>
      <FormInputs />
      <div className="box">
        {Data.map((items) => {
          return (
            <div className="boxb" key={items.id} id={items.id}>
              <p>name: {items.name}</p>
              <p>age: {items.age}</p>
              <p>job title: {items.jobtitle}</p>
              <button onClick={() => deleteItem(items.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
