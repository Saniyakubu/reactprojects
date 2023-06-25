import './App.css';
import { useState } from 'react';

function App() {
  const [checkboxx, setCheckboxx] = useState('mercedes');
  console.log(checkboxx);

  function handleChanges(e) {
    setCheckboxx(e.target.value);
  }

  return (
    <div className="App">
      <form>
        <select name="select" id="" value={checkboxx} onChange={handleChanges}>
          <option value="mercedes">mercedes</option>
          <option value="audi">audi</option>
          <option value="tesla">tesla</option>
          <option value="volvo">volvo</option>
        </select>
      </form>
    </div>
  );
}

export default App;
