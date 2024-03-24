import { initializeApp }  from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // ваши настройки Firebase
  apiKey: "AIzaSyB8Wa4uNYD1H7T34TSwwPe2eQpwUXmYGvc",
  authDomain: "urls23-e8a31.firebaseapp.com",
  databaseURL: "https://urls23-e8a31-default-rtdb.firebaseio.com",
  projectId: "urls23-e8a31",
  storageBucket: "urls23-e8a31.appspot.com",
  messagingSenderId: "836383621786",
  appId: "1:836383621786:web:f0171cdb87b97fddd7d523",
  measurementId: "G-20Z38HKBVC"
};

const app = initializeApp(firebaseConfig);

export const firestore = app.firestore();
