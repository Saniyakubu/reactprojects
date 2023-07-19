import { useState } from 'react';
import './App.css';
import { auth, googleProvider } from './config/firebase';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth';
function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  console.log(auth?.currentUser?.email);

  const sinIn = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, name, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const sinInWithGoogleAcc = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={sinIn}>sign in</button>
      <br />
      <button onClick={logOut}>sign out</button>
      <br />
      <button onClick={sinInWithGoogleAcc}>sign with google</button>
    </>
  );
}

export default App;
