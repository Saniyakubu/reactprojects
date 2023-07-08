import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type DetailsProps = {
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
  strInstructions: string;
};

function Details() {
  const navigate = useNavigate();
  const [singleItem, setSingleItem] = useState<DetailsProps[]>([]);
  console.log(singleItem);
  const { id } = useParams();
  async function fetchSingleItem() {
    try {
      const res = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const { data } = res;
      if (data) {
        setSingleItem(data.drinks);
      }
    } catch (error) {}
  }

  function backHome() {
    navigate('/');
  }

  useEffect(() => {
    fetchSingleItem();
  }, []);
  return (
    <div className=" mt-14">
      {singleItem.map((item) => {
        return (
          <div className="flex gap-8 align-middle justify-center w-2/3 mx-auto">
            <img className=" w-1/2" src={item.strDrinkThumb} alt="" />

            <div className="flex flex-col gap-8 justify-center">
              <h1>
                <span className=" bg-blue-500  p-2 mx-2">Name: </span>
                {item.strDrink}
              </h1>
              <h2>
                <span className=" bg-blue-500 p-2">Category: </span>
                {item.strCategory}
              </h2>
              <h2>
                <span className=" bg-blue-500  p-2 mx-2">info: </span>
                {item.strAlcoholic}
              </h2>
              <h2>
                <span className=" bg-blue-500  p-2 mx-2">Glass: </span>
                {item.strGlass}
              </h2>
              <h2>
                <span className=" bg-blue-500  p-2 mx-2">Ingredient: </span>
                {item.strIngredient2}

                {item.strIngredient3}

                {item.strIngredient4}

                {item.strIngredient5}
              </h2>
              <h2>
                <span className=" bg-blue-500  p-2 mx-2 ">Instructions:</span>
                {item.strInstructions}
              </h2>
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
