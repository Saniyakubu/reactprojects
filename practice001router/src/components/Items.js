import React from 'react';
import Contents from './Contents';
const Items = ({ arrayObject }) => {
  /* console.log(arrayObject); */
  return (
    <div>
      {arrayObject.map((items) => {
        return <Contents key={items.id} items={items} />;
      })}
    </div>
  );
};

export default Items;
