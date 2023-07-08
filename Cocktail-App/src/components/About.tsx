import { useEffect, useState } from 'react';
import axios from 'axios';
function About() {
  const [cocktails, setCocktails] = useState<string[]>([]);

  function fetchData() {
    try {
      const res = axios(
        'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      );

      console.log(res);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>about</h1>
    </div>
  );
}

export default About;
