import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className=" bg-slate-200 p-12">
      <div className="container flex justify-between items-center">
        <h1 className="text-black text-3xl font-bold">Cocktails</h1>

        <ul className="flex justify-between items-center gap-7 text-black">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Newsletter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
