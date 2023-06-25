import { useState } from 'react';
const List = ({ foodItemsList }) => {
  console.log(foodItemsList);

  return <div className="box">{foodItemsList}</div>;
};

export default List;
