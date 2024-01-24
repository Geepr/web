import GameRelease from "../../../models/gameRelease";
import {Game} from "../../../models/game";
import {render, screen} from "@testing-library/react";
import GameReleaseBox from "./gameReleaseBox";

test('Game release box displays default title when not overridden', () => {
    const release = new GameRelease('test', undefined, []);
    const game = new Game('a', 'game title');

    render(<GameReleaseBox game={game} release={release}/>);

    expect(screen.getByText('game title')).toBeInTheDocument();
})

test('Game release box displays overridden title when available', () => {
    const release = new GameRelease('test', 'overridden title', []);
    const game = new Game('a', 'game title');

    render(<GameReleaseBox game={game} release={release}/>);

    expect(screen.queryByText('game title')).not.toBeInTheDocument();
    expect(screen.getByText('overridden title')).toBeInTheDocument();
})
