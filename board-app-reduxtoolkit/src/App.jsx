import { useState } from 'react';
import './App.css';
import Post from './features/post/post';
function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Post />
    </main>
  );
}

export default App;
