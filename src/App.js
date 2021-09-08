import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacter] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacter(response.results));
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <Buttons setPage={setPage} page={page} />
      </header>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
