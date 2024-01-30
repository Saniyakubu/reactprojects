import { useState } from 'react';
import Loading from './Loading';
import { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import './App.css';

const Users = lazy(() => import('./Users'));

function App() {
  const [usersArray, setUsersArray] = useState([]);
  async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    setUsersArray(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Names</h1>
      <Suspense fallback={<Loading />}>
        <Users usersArray={usersArray} />
      </Suspense>
    </div>
  );
}

export default App;
