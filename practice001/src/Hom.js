import React from 'react';

import Contact from './Contact';
const Hom = ({ content }) => {
  return (
    <div>
      {content.map((items) => {
        return <Contact key={items.id} items={items}></Contact>;
      })}
    </div>
  );
};

export default Hom;
