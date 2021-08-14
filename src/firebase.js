import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
  apiKey: 'AIzaSyB777pFskY9RPByC00p_CSG08TabowC7cs',
  authDomain: 'audioplanetstore.firebaseapp.com',
  databaseURL:
    'https://audioplanetstore-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'audioplanetstore',
  storageBucket: 'audioplanetstore.appspot.com',
  messagingSenderId: '232000612247',
  appId: '1:232000612247:web:8b44d229de1e859ff5c6d2',
  measurementId: 'G-EJXXYDRPN4',
});

export var database = firebase.database();

export const auth = firebase.auth();

