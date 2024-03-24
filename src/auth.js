
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZTRdIjvpqJY-ORSx_M16yexdti8an8bo",
    authDomain: "urlshort-95a8c.firebaseapp.com",
    projectId: "urlshort-95a8c",
    storageBucket: "urlshort-95a8c.appspot.com",
    messagingSenderId: "35868586636",
    appId: "1:35868586636:web:899bb5942ac604d1a701a9",
    measurementId: "G-4GR6BQ8F0B"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth();


export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Error signing in with Google:', errorMessage);
      });
  };

  export default firebaseConfig;