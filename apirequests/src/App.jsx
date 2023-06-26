import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [jobtitle, setJobtitle] = useState('');
  const [country, setCountry] = useState('');

  const [datas, setDatas] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch('http://localhost:5000/posts');
      if (!res.ok) throw new Error('refresh');
      const data = await res.json();

      setDatas(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  /*  async function deleteItem(e) {
    const id = e.currentTarget.id;
    console.log(id);
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE',
    });
    const del = datas.filter((items) => items.id !== id);
    setDatas(del);
  }

  async function newData() {
    const id = datas[datas.length - 1].id ? datas[datas.length - 1].id + 1 : 1;

    console.log(id);
    const newItem = {
      id: id,
      name: name,
      age: age,
      jobtitle: jobtitle,
      country: country,
    };
    console.log(newItem);

    const newPost = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });

    const newdata = await newPost.json();
    setDatas([...datas, newdata]);
  }
 */
  async function deleteItem(e) {
    const id = e.target.id;
    console.log(id);
    const removeitem = datas.filter((items) => items.id !== id);
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE',
    });
    setDatas(removeitem);
  }

  async function newData() {
    const id = datas[datas.length - 1].id ? datas[datas.length - 1].id + 1 : 1;
    const newObject = {
      id,
      name: name,
      age: age,
      jobtitle: jobtitle,
      country: country,
    };
    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newObject),
    });

    const newData = await res.json();
    console.log(newObject);

    setDatas([...datas, newData]);
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <h1>hello</h1>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          name="age"
          placeholder="age"
        />
        <input
          type="text"
          value={jobtitle}
          onChange={(e) => setJobtitle(e.target.value)}
          name="jobtitle"
          placeholder="jobtitle"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          name="country"
          placeholder="country"
        />
        <button onClick={newData}>submit</button>
      </form>
      <div className="box">
        {datas.map((items) => {
          return (
            <div className="boxb" key={items.id} id={items.id}>
              <p>name: {items.name}</p>
              <p>age: {items.age}</p>
              <p>job title: {items.jobtitle}</p>
              <button id={items.id} onClick={deleteItem}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
