/* import {createContext} from 'react'
import { auth, db } from '../config/firebase';
import { ReactNode, useState } from 'react';

interface AuxProps {
  children: ReactChild | ReactChildren;
}
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  QuerySnapshot,
  updateDoc,
} from 'firebase/firestore';

const DataContext = createContext({})

interface PostRes {
  id: string;
  title: string;
  post: string;
  author: { name: string; id: string; img: string };
}

 async function GetPosts({ children }: ReactNode) {

     const [post, setPost] = useState<PostRes[] | null>(null);
   const postCollectionRef = collection(db, 'posts');

   try {
     const res: QuerySnapshot = await getDocs(postCollectionRef);
     const resData: PostRes[] = res.docs.map((postData) => ({
       ...postData.data(),
       id: postData.id,
     }));
     setPost(resData);
     console.log(resData);
   } catch (error) {
     console.error('Error getting posts:', error);
   }
   return <DataContext.Provider value={post | null}>{children}</DataContext.Provider>;
 }


 export default GetPosts; */
