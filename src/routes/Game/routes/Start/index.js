import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";
import { FirebaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

import s from "./style.module.css";

const StartPage = () => {
  const firebase = useContext(FirebaseContext);
  const pokemonContext = useContext(PokemonContext);

  const [cards, setPokemons] = useState({});
  const history = useHistory();

  useEffect(() => {
    firebase.getPokemonSocket((cards) => {
      setPokemons(cards);
    });

    return () => firebase.offPokemonSocket();
  }, []);

  const handleClickStartGame = () => {
    history.push("/game/board");
  };
  const handleBackToHome = () => {
    history.push("/");
  };
  const handleClickUpdatePokemon = (key) => {
    const pokemon = { ...cards[key] };
    pokemonContext.onSelectedPokemon(key, pokemon);
    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        isSelected: !prevState[key].isSelected,
      },
    }));
  };
  return (
    <>
      <div className={s.startGame}>
        <button
          onClick={handleClickStartGame}
          disabled={Object.keys(pokemonContext.pokemons).length < 5}
        >
          START NEW GAME
        </button>
      </div>
      <div className={s.flex}>
        {Object.entries(cards).map(
          ([key, { name, img, id, type, values, isSelected }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              className={s.card}
              isSelected={isSelected}
              onClickCard={() => {
                if (
                  Object.keys(pokemonContext.pokemons).length < 5 ||
                  isSelected
                )
                  handleClickUpdatePokemon(key);
              }}
            />
          )
        )}
      </div>
      <button onClick={handleBackToHome}>Back to HomePage</button>
    </>
  );
};

export default StartPage;
