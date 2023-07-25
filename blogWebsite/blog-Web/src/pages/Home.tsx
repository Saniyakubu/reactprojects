import React, { useEffect, useState } from 'react';
import { auth, db } from '../config/firebase';
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  QuerySnapshot,
  updateDoc,
} from 'firebase/firestore';
interface PostRes {
  id: string;
  title: string;
  post: string;
  author: { name: string; id: string; img: string };
}
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Home: React.FC = () => {
  const [post, setPost] = useState<PostRes[] | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [NewValue, setNewValue] = useState('');
  const [itemId, setItemId] = useState('');

  const postCollectionRef = collection(db, 'posts');

  async function getPosts() {
    setOpen(true);
    try {
      const res: QuerySnapshot = await getDocs(postCollectionRef);
      const resData: PostRes[] = res.docs.map((postData) => ({
        ...postData.data(),
        id: postData.id,
      }));
      setPost(resData);
      setOpen(false);
    } catch (error) {
      console.error('Error getting posts:', error);
      setOpen(false);
    }
  }

  async function remove(id: any) {
    if (confirm('are you sure you want to delete ?')) {
      const post = doc(postCollectionRef, id);
      await deleteDoc(post);
      getPosts();
    } else {
      return;
    }
  }

  function edit(id: string) {
    setItemId(id);
    setIsClicked(true);
  }

  async function update(id: string) {
    if (!NewValue) {
      setIsClicked(false);
      return;
    }
    const post = doc(postCollectionRef, id);
    await updateDoc(post, { post: NewValue });
    setIsClicked(false);
    getPosts();
  }

  useEffect(() => {
    getPosts();
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <main className="container mx-auto p-5 my-8 items-center flex flex-col gap-8">
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {post &&
        post.map((item) => (
          <div
            key={item.id}
            className=" w-11/12 bg-primary p-4 lg:max-w-lg rounded-md shadow-md"
          >
            {item.author.id === auth.currentUser?.uid && (
              <div className=" text-end">
                <button
                  onClick={() => remove(item.id)}
                  className=" text-3xl text-red-700"
                >
                  <MdDelete />
                </button>
              </div>
            )}
            <div className="flex gap-3 items-center content-center">
              <img
                src={item.author.img}
                alt={item.id}
                className="w-10 rounded-full"
              />
              <div className=" md:mb-4 mb-2">
                <p className="text-lg font-bold text-white">
                  {item.author.name}
                </p>
              </div>
            </div>
            <div className="md:mb-4 mb-2">
              <h1 className=" text-2xl">{item.title}</h1>
            </div>

            {isClicked && itemId === item.id && (
              <>
                <br />
                <textarea
                  value={NewValue}
                  cols={Number(30)}
                  rows={Number(10)}
                  onChange={(e) => setNewValue(e.target.value)}
                ></textarea>
                <br />

                <button onClick={() => update(item.id)}>
                  {!NewValue ? 'cancel' : 'update'}
                </button>
                <br />
              </>
            )}
            <div className="break-words">
              <div className="break-words w-full flex gap-3 justify-between">
                <p className="text-lg break-all hyphens-auto">{item.post}</p>
                {!isClicked && item.author.id === auth.currentUser?.uid && (
                  <button
                    onClick={() => edit(item.id)}
                    className=" self-start h-5  text-green-600"
                  >
                    <FaEdit />
                  </button>
                )}
              </div>
            </div>
            <div></div>
          </div>
        ))}
    </main>
  );
};

export default Home;
