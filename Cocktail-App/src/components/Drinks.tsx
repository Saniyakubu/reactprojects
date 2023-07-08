import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
type HomeProps = {
  idDrink: string;
  strAlcoholic: string;
  strDrink: string;
  strGlass: string;
  strDrinkThumb: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function Drinks(props: HomeProps): JSX.Element {
  const navigate = useNavigate();
  const {
    strDrinkThumb,
    strDrink,
    strGlass,
    strAlcoholic,
    idDrink,
    setSearch,
  } = props;
  console.log(props);

  function openDetail(id: string) {
    navigate(`/cocktail/${id}`);
  }

  return (
    <div className="md:w-72 bg-slate-200 text-black w-full  border border-yellow-50">
      <img className="w-full block" src={strDrinkThumb} alt="" />
      <div className=" p-3 space-y-2">
        <h1 className="font-bold text-2xl ">{strDrink}</h1>
        <h3 className="text-2xl text-gray-600">{strGlass}</h3>
        <p className="text-medium">{strAlcoholic}</p>
        <Button variant="contained" onClick={() => openDetail(idDrink)}>
          Details
        </Button>
      </div>
    </div>
  );
}

export default Drinks;
