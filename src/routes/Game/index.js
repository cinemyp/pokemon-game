import { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [pokemons, setPokemons] = useState({});
  const [whoWon, setWhoWon] = useState("");

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };

  const handleFinishGame = (playersPokemons, whoWon) => {
    setPokemons(() => {
      const newState = { ...playersPokemons };
      return newState;
    });
    setWhoWon(whoWon);
  };
  const handleClearContext = () => {
    setSelectedPokemons(() => {
      const newState = {};
      return newState;
    });
  };
  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemons,
        onSelectedPokemon: handleSelectedPokemons,
        playersPokemons: pokemons,
        onFinishGame: handleFinishGame,
        onClearContext: handleClearContext,
        whoWon: whoWon,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
