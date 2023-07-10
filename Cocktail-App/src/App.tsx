import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import Header from './components/Header';
function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
