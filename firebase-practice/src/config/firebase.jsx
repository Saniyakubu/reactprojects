import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBuRT2CQ0UVkrqxYed7S9JbDER0VolD5Ak',
  authDomain: 'fir-practice-1461d.firebaseapp.com',
  projectId: 'fir-practice-1461d',
  storageBucket: 'fir-practice-1461d.appspot.com',
  messagingSenderId: '907205684722',
  appId: '1:907205684722:web:5180681dd5ae53fb3d0f6b',
  measurementId: 'G-LVE25T2TC2',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
