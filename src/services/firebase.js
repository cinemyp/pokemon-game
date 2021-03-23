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
class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref("pokemons").on("value", (snap) => {
      cb && cb(snap.val());
    });
  };

  offPokemonSocket = () => {
    this.database.ref("pokemons").off();
  };

  getPokemonsOnce = async () => {
    return await this.database
      .ref("pokemons")
      .once("value")
      .then((snap) => snap.val());
  };

  postPokemon = (key, pokemon) => {
    this.database.ref("pokemons/" + key).set(pokemon);
  };

  addPokemon = (data) => {
    const newKey = this.database.ref().child("pokemons").push().key;
    this.database.ref("pokemons/" + newKey).set(data);
  };
}

export default Firebase;
