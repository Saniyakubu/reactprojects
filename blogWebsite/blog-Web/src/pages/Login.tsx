import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
interface userV {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ setIsAuth }: userV): JSX.Element {
  const navigate = useNavigate();
  async function sinIn() {
    try {
      const user = await signInWithPopup(auth, provider);
      if (user) {
        localStorage.setItem('isAuth', true.toString());
        setIsAuth(true);
        toast.success('Logged in Successfully');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
      }
    } catch (error) {
      /* toast.error(error.message); */
    }
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <h1>Sign In with google to continue</h1>

      <button onClick={sinIn}>
        Sign In with google
        <FcGoogle />
      </button>
    </div>
  );
}

export default Login;
