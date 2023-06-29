import { useContext, useEffect, useState } from 'react';
import { myContext } from './components/DataContext';
import axios from 'axios';
function App() {
  const { inputs, setInputs } = useContext(myContext);
  const [reData, setReData] = useState([]);

  function update(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function newData() {
    const id = reData.length ? reData[reData.length - 1].id + 1 : 1;
    const newImput = { id, ...inputs };
    console.log(newImput);
    const { data } = await axios.post('http://localhost:5000/posts', newImput);
    console.log(data);
    const newRes = [...reData, data];
    setReData(newRes);
  }

  async function fetchData() {
    try {
      const { data } = await axios('http://localhost:5000/posts');
      console.log(data);
      setReData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function removeItems(id) {
    const dlt = reData.filter((items) => items.id !== id);
    await axios.delete(`http://localhost:5000/posts/${id}`);
    setReData(dlt);
    console.log(id);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" onChange={update} />
        <input type="number" name="age" onChange={update} />
        <input type="text" name="jobTitle" onChange={update} />
        <input type="text" name="country" onChange={update} />
        <button onClick={newData}>submit</button>
      </form>
      <div>
        {reData &&
          reData.map((items) => {
            return (
              <>
                <h1>{items.name}</h1>
                <button onClick={() => removeItems(items.id)}>delete</button>
              </>
            );
          })}
      </div>
    </>
  );
}

export default App;
