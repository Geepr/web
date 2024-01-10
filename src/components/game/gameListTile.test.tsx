import {Game} from "../../models/game";
import {render, screen} from "@testing-library/react";
import {GameListTile} from "./gameListTile";
import {BrowserRouter} from "react-router-dom";

test('game tile with no description', () => {
    const game = new Game('test-id', 'test title');
    render(<BrowserRouter><GameListTile game={game} /></BrowserRouter>)

    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('This game has no description...')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test-id')
})

test('game tile with description', () => {
    const game = new Game('test-id', 'test title', 'test description');
    render(<BrowserRouter><GameListTile game={game} /></BrowserRouter>)

    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test-id')
})

test('game tile with long description', () => {
    const game = new Game('test-id', 'test title', 'test description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo');
    render(<BrowserRouter><GameListTile game={game} /></BrowserRouter>)

    expect(screen.getByText('test title')).toBeInTheDocument();
    //this is 100 characters with ... at the end
    expect(screen.getByText('test description loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo...')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test-id')
})

it.each([undefined, 'test description'])('game tile displays archived string', (description) => {
    const game = new Game('test-id', 'test title', description, true);
    render(<BrowserRouter><GameListTile game={game} /></BrowserRouter>)

    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('This game has been archived')).toBeInTheDocument();
});
