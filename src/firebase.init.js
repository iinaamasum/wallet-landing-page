import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCPwftqAA7h3xDwZndsvyUKcOBiYLboNf0',
  authDomain: 'wallet-store-c8f66.firebaseapp.com',
  projectId: 'wallet-store-c8f66',
  storageBucket: 'wallet-store-c8f66.appspot.com',
  messagingSenderId: '617811568718',
  appId: '1:617811568718:web:516b8e84f07b1f13913b1f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
