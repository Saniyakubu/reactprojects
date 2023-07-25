import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
const Header = (): JSX.Element => {
  const userAuth = localStorage.getItem('isAuth');

  async function logOut() {
    const noUser = await signOut(auth);
    console.log(noUser);
    if (noUser === undefined) {
      console.log('user gone..');
      localStorage.removeItem('isAuth');
      window.location.reload();
    }
  }

  return (
    <header className=" bg-accent p-4">
      <nav className="container mx-auto">
        <ul className="flex gap-9 justify-center items-center  text-xl text-white">
          <Link to={'/'}>Home</Link>

          <Link to={'/about'}>About</Link>
          {!userAuth ? (
            <Link to={'/login'}>Login</Link>
          ) : (
            <>
              <Link to={'/newPost'}>Create Post</Link>
              <button onClick={logOut}>logout</button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
