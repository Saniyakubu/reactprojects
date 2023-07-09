import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import noimage from '../assets/noimage.jpg';

type HomeProps = {
  idDrink: string;
  strAlcoholic: string;
  strDrink: string;
  strGlass: string;
  strDrinkThumb: string;
};

function Drinks(props: HomeProps): JSX.Element {
  const navigate = useNavigate();
  const { strDrinkThumb, strDrink, strGlass, strAlcoholic, idDrink } = props;

  function openDetail(id: string) {
    navigate(`/cocktail/${id}`);
  }

  return (
    <div className="md:w-80 bg-white text-black w-full shadow-md">
      <img
        className="w-full block"
        src={strDrinkThumb ? strDrinkThumb : noimage}
        alt=""
      />
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
