import { useEffect, useState } from 'react';
import axios from 'axios';
import Drinks from './Drinks';

type HomeProps = {
  idDrink: string;
  strAlcoholic: string;
  strDrink: string;
  strGlass: string;
  strDrinkThumb: string;
};

function Home() {
  const [cocktails, setCocktails] = useState<HomeProps[]>([]);
  const [search, setSearch] = useState<string>('a');
  console.log(cocktails);
  async function fetchData() {
    try {
      const res = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );

      const { data } = res;

      if (data) {
        setCocktails(data.drinks);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto flex-col p-7 md:flex-row flex flex-wrap gap-2 justify-between align-middle mt-16">
      {cocktails.map((items) => {
        return <Drinks key={items.idDrink} {...items} />;
      })}
    </div>
  );
}

export default Home;
