import React from 'react';

function Header() {
  return (
    <nav className=" bg-slate-200 p-12">
      <div className="container flex justify-between items-center">
        <h1 className="text-black text-3xl font-bold">Cocktails</h1>

        <ul className="flex justify-between items-center gap-7 text-black">
          <li>Home</li>
          <li>About</li>
          <li>Newsletter</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
