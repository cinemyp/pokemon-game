import { useState, useEffect, useHistory } from "react";
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

import database from "../../services/firebase";

import s from "./style.module.css";

const GamePage = () => {
  const [cards, setPokemons] = useState({});

  useEffect(() => {
    database.ref("pokemons").on("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);
  const addPokemon = ({ name, img, id, type, values }) => {
    const newKey = database.ref().child("pokemons").push().key;
    database.ref("pokemons/" + newKey).set({
      name: name,
      img: img,
      id: id,
      type: type,
      values: values,
      active: false,
    });
  };
  const updatePokemon = (key, { name, img, id, type, values, active }) => {
    database.ref("pokemons/" + key).set({
      name: name,
      img: img,
      id: id,
      type: type,
      values: values,
      active: active,
    });
  };
  const handleAddClick = () => {
    //console.log(cards["-MSjWsPjJfFkNKk6ixPF"]);
    addPokemon({ ...cards["-MSjWsPjJfFkNKk6ixPF"] });
  };
  const handleClick = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((newPokes, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
          updatePokemon(item[0], pokemon);
        }
        newPokes[item[0]] = pokemon;

        return newPokes;
      }, {});
    });
  };
  return (
    <>
      <Layout title="Cards" colorBg="#e2e2e2">
        <div className={s.addPokemon}>
          <button onClick={handleAddClick}>ADD NEW POKEMON</button>
        </div>
        <div className={s.flex}>
          {Object.entries(cards).map(
            ([key, { name, img, id, type, values, active }]) => (
              <PokemonCard
                key={key}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                active={active}
                onClickCard={() => {
                  handleClick(id);
                }}
              />
            )
          )}
        </div>
      </Layout>
      <button>Back to HomePage</button>
    </>
  );
};

export default GamePage;
