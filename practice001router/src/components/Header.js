import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <h1>Header</h1>
      <Link to="/post">post</Link>
    </nav>
  );
};

export default Header;
