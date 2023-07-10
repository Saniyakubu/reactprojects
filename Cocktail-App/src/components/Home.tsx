import { useEffect, useState } from 'react';
import axios from 'axios';
import Drinks from './Drinks';
import Search from './Search';
import { AxiosError } from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface HomeProps {
  idDrink: string;
  strAlcoholic: string;
  strDrink: string;
  strGlass: string;
  strDrinkThumb: string;
}

function Home(): JSX.Element {
  const [cocktails, setCocktails] = useState<HomeProps[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('');
  async function fetchData(): Promise<void> {
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
      const e = error as AxiosError;
      const { message } = e;

      if (e) {
        setLoading(false);
        setErr(true);
        setErrMsg(message);
      }
    }
  }

  useEffect((): void => {
    fetchData();
  }, [search]);

  if (err) {
    return (
      <div className="mt-24  w-1/2 mx-auto">
        <Alert className="" severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>{errMsg}</strong>
        </Alert>
      </div>
    );
  }

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
          <div className="w-1/2 mx-auto">
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              <strong>No Matching Cocktails Found...</strong>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
