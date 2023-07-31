import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
const Navbar = () => {
  return (
    <nav>
      <div className="header">
        <ul>
          <li>
            <Link to={'/'} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link className="link">About</Link>
          </li>
        </ul>
        <div>
          <Link to={'/cart'} className="cart">
            Cart
            <BsFillCartCheckFill className="cart" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
