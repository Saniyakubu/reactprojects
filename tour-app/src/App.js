import './App.css';
/* import Header from './components/Header';
import Content from './components/content'; */
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'https://www.course-api.com/react-tours-project';

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState(false);
  console.log(apiData);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dscrptn = apiData.length ? (
    apiData.map((info) => {
      return (
        <section className="card">
          <header className="header">
            <span>${info.price}</span>
            <img src={info.image} alt={info.id} />
          </header>
          <section className="infomation">
            <h1>{info.name}</h1>
            <p>
              {readMore ? info.info : `${info.info.substring(0, 100)}...`}
              <button
                className="readmorebtn"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'Show Less' : 'Read More'}
              </button>
            </p>
            <button className="deletebtn" onClick={() => deleteItem(info.id)}>
              not interested
            </button>
          </section>
        </section>
      );
    })
  ) : (
    <div className="center">
      <button className="btn" onClick={fetchData}>
        Refresh
      </button>
      <h1>No Tours Left</h1>
    </div>
  );

  function deleteItem(id) {
    const itemId = apiData.filter((item) => item.id !== id);
    setApiData(itemId);
  }

  return (
    <div className="App">
      <header className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </header>
      {loading ? (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <main>
          <div className="box">{dscrptn}</div>
        </main>
      )}
    </div>
  );
}

export default App;
