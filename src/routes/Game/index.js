import s from "./style.module.css";

const GamePage = ({ onChangePage }) => {
  const handleClickButton = () => {
    onChangePage && onChangePage("app");
  };
  return (
    <div>
      this is Game Page!
      <button onClick={handleClickButton}>Back to HomePage</button>
    </div>
  );
};

export default GamePage;
