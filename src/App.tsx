import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import {NavBar} from "./NavBar";
import {useGamesFetch} from "./clients/gameClient";
import {GameList} from "./components/game/gameList";

function App() {
    const {games, loading} = useGamesFetch(1);

  return (
      <>
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="container">
        <main role="main">
          <p>Hello!</p>
            {!loading && <GameList games={games} />}
        </main>
      </div>
    </>
  );
}

export default App;
