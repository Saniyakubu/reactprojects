import React from 'react';
import { Link } from 'react-router-dom';
const Contents = ({ items }) => {
  console.log(items.body);
  return (
    <main>
      <Link to={`/Contents/${items.id}`}>
        <div>
          <h1>{items.title}</h1>
          <p>{items.subtitle}</p>
          {/*  <h1>{items.title}</h1>
          {items.body.length <= 50
            ? items.body
            : `${items.body.slice(0, 50)}...`} */}
        </div>
      </Link>
    </main>
  );
};

export default Contents;
