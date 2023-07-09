import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className=" bg-blue-500 p-12">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold">
          Cocktails
        </Link>

        <ul className="flex justify-between items-center gap-7 text-black">
          <li>
            <Link to="/" className=" text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className=" text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className=" text-white">
              Newsletter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
