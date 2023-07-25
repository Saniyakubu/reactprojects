import { useState, useEffect } from 'react';
import { store } from './config/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

import './App.css';

function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const [image, setImage] = useState('');
  console.log(image);

  const listItemRef = ref(store, 'images/');
  async function uploadFile() {
    if (!fileUpload) {
      return;
    }
    const fileRef = ref(store, `images/${fileUpload.name + v4()}`);
    await uploadBytes(fileRef, fileUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        alert('uploaded');
        setImage((prev) => [...prev, url]);
      });
    });
  }

  function files() {
    listAll(listItemRef).then((response) => {
      response.items.map((item) => {
        getDownloadURL(item).then((url) => {
          setImage((prev) => [...prev, url]);
        });
      });
    });
  }

  useEffect(() => {
    files();
  }, []);

  return (
    <div>
      <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
      <button onClick={uploadFile}>upload</button>
      <div>
        {image &&
          image.map((item) => {
            return <img src={item} className="img" />;
          })}
      </div>
    </div>
  );
}

export default App;
