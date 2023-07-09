import { useEffect, useState } from 'react';
import axios from 'axios';
import Drinks from './Drinks';
import Search from './Search';

import Skeleton from '@mui/material/Skeleton';

type HomeProps = {
  idDrink: string;
  strAlcoholic: string;
  strDrink: string;
  strGlass: string;
  strDrinkThumb: string;
};

function Home() {
  const [cocktails, setCocktails] = useState<HomeProps[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      setLoading(true);
      const res = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (res) {
        const { data } = res;
        if (data) {
          setCocktails(data.drinks);
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search]);

  if (loading) {
    return (
      <div>
        <Search setSearch={setSearch} search={search} />
        <div className="flex gap-8 justify-center items-center container mx-auto mt-52  flex-wrap">
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
          <Skeleton variant="rectangular" width={320} height={320} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Search setSearch={setSearch} search={search} />
      <div className="container mx-auto flex-col p-7 md:flex-row flex flex-wrap gap-8 justify-between align-middle mt-16">
        {cocktails ? (
          cocktails.map((items) => {
            return <Drinks key={items.idDrink} {...items} />;
          })
        ) : (
          <div className="text-center">
            <h1 className=" text-2xl font-bold">No Match Item</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
