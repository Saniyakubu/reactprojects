import React from 'react';

import { Link } from 'react-router-dom';
const Contact = ({ items }) => {
  return (
    <div>
      <Link to={`/Contact/${items.id}`}>
        <h1>{items.title}</h1>
        <p>
          {items.body.length <= 25
            ? items.body
            : `${items.body.slice(0, 25)}...`}
        </p>
      </Link>
    </div>
  );
};

export default Contact;
