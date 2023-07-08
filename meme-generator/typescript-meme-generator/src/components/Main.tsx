import { useState, useEffect, ChangeEvent } from 'react';

function Main() {
  const [inputData, setInputData] = useState({
    topText: '',
    bottomText: '',
    randomimage: '',
  });
  const [meme, setMeme] = useState<string[]>([]);

  console.log(inputData.randomimage);

  const fetchData = async () => {
    const res = await fetch('https://api.imgflip.com/get_memes');
    const data = await res.json();
    const dataRes = data.data.memes;
    console.log(data);
    setMeme(dataRes.map((meme: any) => meme.url));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function shufflememe() {
    if (meme.length === 0) return;
    const randomNumber: number = Math.floor(Math.random() * meme.length);
    const url: any = meme[randomNumber];
    console.log(url);
    setInputData((prevInputData) => ({
      ...prevInputData,
      randomimage: url,
    }));
  }

  function updateInputs(e: ChangeEvent<HTMLInputElement>) {
    setInputData((prevInputData) => {
      const { name, value } = e.target;
      return {
        ...prevInputData,
        [name]: value,
      };
    });
  }

  return (
    <main className="main">
      <div className="inputs">
        <div>
          <label htmlFor="text">Top</label>
          <br />
          <input
            type="text"
            placeholder="topText"
            name="topText"
            value={inputData.topText}
            onChange={updateInputs}
          />
          <br />
          <label htmlFor="text">Bottom</label>
          <br />
          <input
            type="text"
            placeholder="bottomText"
            name="bottomText"
            value={inputData.bottomText}
            onChange={updateInputs}
          />
        </div>
        <div>
          <button className="btn" onClick={shufflememe}>
            Get a new meme image 🖼
          </button>
        </div>
      </div>
      <div className="memediv">
        <div className="imagtextdiv">
          <h1 className="toptext">{inputData.topText}</h1>
          <img className="memeimg" src={inputData.randomimage} alt="" />
          <h1 className="bottomtext">{inputData.bottomText.toUpperCase()}</h1>
        </div>
      </div>
    </main>
  );
}

export default Main;
