import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app= firebase.initializeApp ({
    apiKey: "AIzaSyBRh0hqCELw3CYxvaoZPsLVJNbdC6RJjBM",
    authDomain: "coderhouse-ecommercecyc.firebaseapp.com",
    projectId: "coderhouse-ecommercecyc",
    storageBucket: "coderhouse-ecommercecyc.appspot.com",
    messagingSenderId: "535552044512",
    appId: "1:535552044512:web:aceeaaa349d6deb413cf85"
  });
  
  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }