import { useEffect, useState } from 'react';
import './App.css';
import { auth, googleProvider } from './config/firebase';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from './config/firebase';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [movies, setMovies] = useState([]);

  const [movieInfo, setMovieInfo] = useState({
    title: '',
    director: '',
    date: '',
  });

  const [isUser, setIsUser] = useState({});

  console.log(isUser);

  onAuthStateChanged(auth, (CurrentUser) => {
    setIsUser(CurrentUser);
  });

  console.log(Number(movieInfo.date));
  console.log(auth?.currentUser?.email);

  const movieCollectionRef = collection(db, 'movies');

  async function getMovies() {
    try {
      const res = await getDocs(movieCollectionRef);
      const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

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

  function updateInput(e) {
    const { name, value } = e.target;
    setMovieInfo({ ...movieInfo, [name]: value });
  }

  async function addMovie() {
    try {
      const newMovie = await addDoc(movieCollectionRef, {
        title: movieInfo.title,
        director: movieInfo.director,
        year: Number(movieInfo.date),
      });
      console.log(newMovie);
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }

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

      <div>
        <input
          type="text"
          name="title"
          value={movieInfo.title}
          onChange={updateInput}
        />
        <input
          type="text"
          name="director"
          value={movieInfo.director}
          onChange={updateInput}
        />
        <input
          type="number"
          name="date"
          value={movieInfo.date}
          onChange={updateInput}
        />

        <button onClick={addMovie}>Add</button>
        {movies.map((items) => {
          return (
            <div key={items.id}>
              <h1>title: {items.title}</h1>
              <p>director: {items.director}</p>
              <p>releaseDate: {items.year}</p>
            </div>
          );
        })}
        <h1>user:{isUser?.email}</h1>
      </div>
    </>
  );
}

export default App;
