import {Outlet, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {NavBar} from './NavBar';
import {GameListDisplayer} from "./components/game/gameListDisplayer";
import GameDetailsSideCar from "./components/game/gameDetails";
import GameEditDisplayer from "./components/game/gameEditDisplayer";
import GameDeleteDisplayer from "./components/game/gameDeleteDisplayer";
import GameCreator from "./components/game/gameCreator";
import PlatformListDisplayer from "./components/platform/platformListDisplayer";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/games' element={<GameListDisplayer/>}>
                    <Route path=':gameId' element={<GameDetailsSideCar/>}/>
                </Route>
                <Route path='/games/edit/:gameId' element={<GameEditDisplayer/>} />
                <Route path='/games/delete/:gameId' element={<GameDeleteDisplayer/>} />
                <Route path='/games/create' element={<GameCreator/>} />

                <Route path={'/platforms'} element={<PlatformListDisplayer/>} />

            </Route>
        </Routes>
    )
}

function Layout() {
    return (
        <>
            <header className="App-header">
                <NavBar/>
            </header>
            <div className="container">
                <main role="main">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default App;
