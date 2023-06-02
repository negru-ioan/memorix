import { useEffect } from 'react';

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => (document.title = wins ? `${wins} ${victorii(wins)}` : 'Memorix'), [wins]);

  return (
    <header className="header">
      <h4>{wins} {victorii(wins)} </h4>
      <h3>Joc de Memorie</h3>
      <button onClick={handleNewGame}>Joc Nou</button>
    </header>
  );
};

export default Header;

function victorii(wins){
  return wins === 1 ? "victorie" : "victorii"
}