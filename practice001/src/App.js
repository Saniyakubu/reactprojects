import './App.css';
import Hom from './Hom';
import Contact from './Contact';
import About from './About';
import Check from './Check';
import Notfound from './Notfound';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let myArray = [
    {
      id: 1,
      title: 'First Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim sit amet tellus rhoncus, eu sollicitudin ipsum luctus. Sed id est vitae mauris porttitor volutpat. Nulla facilisi. Donec euismod, velit ac aliquam finibus, sapien augue rutrum felis, vel pharetra turpis diam eu nibh. Integer sit amet mauris auctor, suscipit elit eget, venenatis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque hendrerit, mauris vel lacinia bibendum, lectus nisl finibus ligula, nec bibendum nulla purus non neque. Sed vel faucibus ex. Fusce tincidunt enim ac sapien pharetra, a pulvinar sapien efficitur. Mauris efficitur mauris euismod, tincidunt risus quis, tristique nulla. Vivamus in velit non ante commodo interdum vel in sapien. Sed fermentum at tortor nec placerat. Sed eget eros at quam congue interdum.',
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'Nullam euismod justo vitae ante pretium, sit amet lacinia velit congue. Donec vel risus et justo egestas consequat vitae in augue. Sed euismod imperdiet sapien sed tincidunt. Etiam euismod magna vel est placerat, a fringilla est ultrices. Nullam sodales odio a libero lacinia, vel aliquet augue feugiat. Duis ullamcorper turpis nec feugiat ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut bibendum elit sed elit ultrices, quis pulvinar purus malesuada. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus auctor nulla eu risus auctor, ac vestibulum nisi mollis.',
    },
    {
      id: 3,
      title: 'Third Post',
      body: 'Praesent eget elit non lectus venenatis volutpat. Nulla facilisi. Donec ut nunc eget leo elementum eleifend vel nec ex. Etiam malesuada dolor ut mauris tempus, eget vulputate nunc volutpat. Nam id commodo velit. Sed auctor, quam vel consequat eleifend, odio purus egestas dui, eu fringilla nibh ex at arcu. Nam posuere enim sit amet mauris sodales, ac commodo lorem laoreet. Suspendisse potenti. Nulla facilisi. Praesent vel quam in sapien finibus dictum in eu magna.',
    },
    {
      id: 4,
      title: 'Fourth Post',
      body: 'Duis tristique auctor nulla eget ullamcorper. Curabitur blandit nulla in tellus posuere, ac tempor ex scelerisque. Integer vel gravida nisi. Nunc hendrerit, sem nec elementum bibendum, eros lorem volutpat libero, non bibendum urna quam eget eros. Cras ut nisl auctor, interdum tortor sed, tincidunt massa. Donec lacinia magna id libero bibendum dignissim. Phasellus quis dui vel massa iaculis molestie ut sed purus. Maecenas metus lacus, tempus ut dolor at, laoreet semper urna.',
    },
    {
      id: 5,
      title: 'Fifth Post',
      body: 'Sed bibendum tincidunt efficitur. Morbi euismod odio sit amet justo congue blandit. Integer sed nisi fringilla, ullamcorper velit sit amet, ultricies tortor. Nulla facilisi. Maecenas faucibus ligula at ex feugiat mollis. Nulla facilisi. Donec viverra dolor at felis ultrices dignissim ut sit amet mi. Sed non velit sed arcu molestie blandit et at mauris.',
    },
  ];

  const [content, setContent] = useState(myArray);
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Hom content={content} setContent={setContent} />}
        />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Contact/:ContactId"
          element={<Check content={content} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
