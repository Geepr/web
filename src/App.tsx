import {Outlet, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {NavBar} from './NavBar';
import {GameListDisplayer} from "./components/game/gameListDisplayer";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='games' element={<GameListDisplayer/>}/>
                </Route>
            </Routes>
        </>
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
