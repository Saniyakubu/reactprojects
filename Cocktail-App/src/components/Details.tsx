import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Skeleton from '@mui/material/Skeleton';

import axios from 'axios';

interface DetailsProps {
  idDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strCategory: string;
  strGlass: string;
  strDrink: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strInstructions: string;
}

function Details(): JSX.Element {
  const navigate = useNavigate();
  const [singleItem, setSingleItem] = useState<DetailsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  async function fetchSingleItem(): Promise<void> {
    try {
      setLoading(true);
      const res = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const { data } = res;
      if (data) {
        setSingleItem(data.drinks);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  function backHome() {
    navigate('/');
  }

  useEffect((): void => {
    fetchSingleItem();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col md:flex-row gap-8 justify-center p-8 md:p-0 container mt-14 items-center mx-auto">
        <Skeleton variant="rectangular" width={550} height={450} />
        <div className="flex flex-col gap-3">
          <Skeleton animation="wave" width={340} />
          <Skeleton animation="wave" width={340} />
          <Skeleton animation="wave" width={340} />
          <Skeleton animation="wave" width={340} />
          <Skeleton animation="wave" width={340} />
          <Skeleton animation="wave" width={340} />
        </div>
      </div>
    );
  }

  return (
    <div className=" mt-14">
      {singleItem.map((item) => {
        return (
          <div
            key={item.idDrink}
            className="flex flex-col md:flex-row gap-8 justify-center p-8 md:p-0 container mx-auto"
          >
            <div className="md:w-1/3">
              <img className="w-full" src={item.strDrinkThumb} alt="drinks" />
            </div>
            <div className="flex flex-col p-0 justify-center">
              <p className="mb-5 text-black">
                <span className="p-1 bg-blue-500 font-bold text-lg mr-4">
                  Name:
                </span>
                {item.strDrink}
              </p>

              <p className="mb-5 text-black">
                <span className=" p-1 bg-blue-500 font-bold text-lg mr-4">
                  Category:
                </span>
                {item.strCategory}
              </p>

              <p className="mb-5 text-black">
                <span className=" p-1 bg-blue-500 font-bold text-lg mr-4">
                  info:{' '}
                </span>
                {item.strAlcoholic}
              </p>

              <p className="mb-5 text-black">
                <span className=" p-1 bg-blue-500 font-bold text-lg mr-4">
                  Glass:{' '}
                </span>
                {item.strGlass}
              </p>
              <p className="mb-5 text-black">
                <span className=" p-1 bg-blue-500 font-bold text-lg mr-4">
                  Ingredient:
                </span>
                {item.strIngredient2 ? item.strIngredient2 : null}

                {item.strIngredient3 ? item.strIngredient3 : null}

                {item.strIngredient4 ? item.strIngredient4 : null}

                {item.strIngredient5 ? item.strIngredient5 : null}

                {item.strIngredient6 ? item.strIngredient6 : null}

                {item.strIngredient7 ? item.strIngredient7 : null}

                {item.strIngredient8 ? item.strIngredient8 : null}

                {item.strIngredient9 ? item.strIngredient9 : null}

                {item.strIngredient10 ? item.strIngredient10 : null}

                {item.strIngredient11 ? item.strIngredient11 : null}

                {item.strIngredient12 ? item.strIngredient12 : null}

                {item.strIngredient13 ? item.strIngredient13 : null}

                {item.strIngredient14 ? item.strIngredient14 : null}

                {item.strIngredient15 ? item.strIngredient15 : null}
              </p>
              <p className="mb-5 text-black">
                <span className=" p-1 bg-blue-500 font-bold text-lg mr-4">
                  Instructions:
                </span>
                {item.strInstructions}
              </p>
            </div>
          </div>
        );
      })}
      <div className=" text-center mt-7">
        <Button variant="outlined" onClick={backHome}>
          Back Home
        </Button>
      </div>
    </div>
  );
}

export default Details;
