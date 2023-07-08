import logo from '../img/TrollFace.png';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar--icon-div">
        <img className="logo" src={logo} alt={logo} />
        <h1>Meme Generator</h1>
      </div>
      <div>
        <p>React Course - Project 3</p>
      </div>
    </nav>
  );
}

export default Header;
