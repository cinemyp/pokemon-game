import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAEXrE9LEk_rTul8CBn4OjTbSBY2fRstI4",
  authDomain: "pokemons-9326d.firebaseapp.com",
  databaseURL: "https://pokemons-9326d-default-rtdb.firebaseio.com",
  projectId: "pokemons-9326d",
  storageBucket: "pokemons-9326d.appspot.com",
  messagingSenderId: "1022340539174",
  appId: "1:1022340539174:web:de7dfa439b45622c5457e7",
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;
