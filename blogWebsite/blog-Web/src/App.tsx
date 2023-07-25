import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPost" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
