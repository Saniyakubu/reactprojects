import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import Details from './components/Details';
import Items from './components/Items';
import Footer from './components/Footer';
import Post from './components/Post';
import Notfound from './components/Notfound';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  const [arrayObject, setArrayobject] = useState([]);
  console.log(arrayObject);
  const [newItems, setNewItems] = useState('');
  const [newBody, setNewBody] = useState('');

  useEffect(() => {
    const dataItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        const data = await response.json();
        console.log(data);
        if (!response.ok) throw Error('errow');
        setArrayobject(data);
      } catch (error) {}
    };
    dataItems();
  }, []);

  async function deleteItems(id) {
    await fetch(`http://localhost:5000/post/${id}`, {
      method: 'DELETE',
    });
    const myArray = arrayObject.filter((Items) => Items.id !== id);
    console.log(myArray);
    setArrayobject(myArray);
    navigate('/');
  }

  function submitNewItems(e) {
    e.preventDefault();
    /* console.log(newItems, newBody); */
    const id = arrayObject.length
      ? arrayObject[arrayObject.length - 1].id + 1
      : 1;
    console.log(id);
    const newObj = { id, title: newItems, body: newBody };
    const newArray = [...arrayObject, newObj];

    setArrayobject(newArray);
    setNewBody('');
    setNewItems('');
    /*  console.log(newArray);
    console.log(arrayObject); */
    navigate('/');
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Items arrayObject={arrayObject} />} />
        <Route path="/Contents" element={<Contents />} />
        <Route
          path="/Contents/:id"
          element={
            <Details arrayObject={arrayObject} deleteItems={deleteItems} />
          }
        />
        <Route
          path="/post"
          element={
            <Post
              submitNewItems={submitNewItems}
              newItems={newItems}
              setNewItems={setNewItems}
              newBody={newBody}
              setNewBody={setNewBody}
            />
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
