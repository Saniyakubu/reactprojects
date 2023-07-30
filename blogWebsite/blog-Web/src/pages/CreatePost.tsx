import { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { auth, db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const CreatePost = () => {
  const navigate = useNavigate();
  const [inputsValues, setInputsValues] = useState({
    title: '',
    texts: '',
  });

  const userAuth = localStorage.getItem('isAuth');

  const postCollectionRef = collection(db, 'posts');

  function updateInputValue(event: ChangeEvent) {
    const { value, name } = event.target as HTMLInputElement;

    console.log(value, name);
    setInputsValues({ ...inputsValues, [name]: value });
  }
  const [open, setOpen] = useState(false);
  async function newPost() {
    if (inputsValues.texts === '' || inputsValues.title === '') {
      toast.error('inputs are empty');
      return;
    } else {
      setOpen(true);
      await addDoc(postCollectionRef, {
        title: inputsValues.title,
        post: inputsValues.texts,
        author: {
          name: auth?.currentUser?.displayName,
          id: auth?.currentUser?.uid,
          img: auth?.currentUser?.photoURL,
        },
      })
        .then(() => {
          setOpen(false);
          toast('your post has been published', {
            icon: '😀',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        })
        .catch((error) => {
          toast.error(error.message);
          setOpen(false);
        });

      setInputsValues({
        title: '',
        texts: '',
      });
      navigate('/');
    }
  }

  useEffect(() => {
    if (!userAuth) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Toaster position="top-center" reverseOrder={false} />
      <div className="border">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch', color: 'white' },
          }}
          noValidate
          autoComplete="off"
          className="text-white"
        >
          <TextField
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            inputProps={{ style: { color: 'white', borderColor: 'white' } }}
            InputLabelProps={{ style: { color: 'white', fontWeight: 'bold' } }}
            value={inputsValues.title}
            onChange={updateInputValue}
          />
        </Box>

        <br />
        <div>
          <textarea
            placeholder="Post"
            name="texts"
            value={inputsValues.texts}
            id=""
            cols={Number(60)}
            rows={Number(10)}
            onChange={updateInputValue}
          ></textarea>
        </div>
        <Stack spacing={2} direction="row" className="m-3">
          <Button variant="outlined" onClick={newPost}>
            Post
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default CreatePost;
