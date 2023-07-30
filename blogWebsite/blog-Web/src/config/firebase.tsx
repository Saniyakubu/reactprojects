import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

interface apiKeys {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: apiKeys = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'blog-web-8379c.firebaseapp.com',
  projectId: 'blog-web-8379c',
  storageBucket: 'blog-web-8379c.appspot.com',
  messagingSenderId: '901059461351',
  appId: '1:901059461351:web:b34f60b165b29887e0e242',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
