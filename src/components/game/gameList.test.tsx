import {Game} from "../../models/game";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {GameList} from "./gameList";

test('game list displays all elements', () => {
    const games = [
        new Game('1', 'title 1'),
        new Game('2', 'title 2'),
        new Game('3', 'title 3'),
        new Game('4', 'title 4'),
        new Game('5', 'title 5'),
    ];

    render(<BrowserRouter><GameList games={games} /></BrowserRouter>);

    for (const game of games) {
        expect(screen.getByText(game.title)).toBeInTheDocument();
    }
})
