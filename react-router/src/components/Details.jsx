import { useEffect, useState } from 'react';
import foods from '../Data';

import { useParams, useNavigate } from 'react-router-dom';
const Details = () => {
  const navigate = useNavigate();
  const [foodDetail, setFoodDetail] = useState('');
  const { id } = useParams();

  console.log(foodDetail);
  useEffect(() => {
    const newFood = foods.find((foodObj) => foodObj.id === parseInt(id));
    console.log(newFood);
    setFoodDetail(newFood);
  }, []);
  console.log(id);
  return (
    <div className="details">
      <h1>Details</h1>
      {foodDetail !== undefined ? (
        <div className="detailslist">
          <h3>foodname: {foodDetail.foodname}</h3>
          <p>country: {foodDetail.country}</p>
          <p>how to prepare: {foodDetail.prepare}</p>
          <p>how to eat: {foodDetail.howToEat}</p>
          <p>benefits: {foodDetail.benefits}</p>
        </div>
      ) : (
        navigate('*')
      )}
    </div>
  );
};

export default Details;
