import { useContext, useState } from "react";
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";

import { FirebaseContext } from "../../../../context/firebaseContext";
import { useHistory } from "react-router-dom";

import s from "./style.module.css";

const FinishPage = () => {
  const { playersPokemons, whoWon } = useContext(PokemonContext);

  const history = useHistory();
  if (Object.keys(playersPokemons).length === 0) history.replace("/game");

  const firebase = useContext(FirebaseContext);
  const [isSelected, setSelected] = useState(null);
  const handleClickEndGame = () => {
    if (whoWon === "blue") {
      const newPokemon = Object.values(playersPokemons.player2).find(
        (item) => item.id === isSelected
      );

      firebase.addPokemon(newPokemon);
    }

    history.replace("/");
  };
  return (
    <div>
      <h1>Finish!</h1>
      <div className={s.content}>
        <div className={s.cardFlow}>
          {playersPokemons.player1 &&
            Object.values(
              playersPokemons.player1
            ).map(({ name, img, id, type, values }) => (
              <PokemonCard
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                isActive={true}
                className={s.card}
              />
            ))}
        </div>
        <button
          onClick={handleClickEndGame}
          disabled={whoWon === "blue" && isSelected === null}
        >
          END GAME
        </button>
        <div className={s.cardFlow}>
          {playersPokemons.player2 &&
            Object.values(playersPokemons.player2).map(
              ({ name, img, id, type, values }) => (
                <div
                  className={s.card}
                  onClick={() => {
                    if (whoWon === "blue") setSelected(id);
                  }}
                >
                  <PokemonCard
                    name={name}
                    img={img}
                    id={id}
                    type={type}
                    values={values}
                    isSelected={isSelected === id}
                    isActive={true}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
