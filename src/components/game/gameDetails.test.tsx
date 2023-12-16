import {Game} from "../../models/game";
import {act, render, screen} from "@testing-library/react";
import GameDetailsSideCar from "./gameDetails";
import {BrowserRouter} from "react-router-dom";

afterEach(jest.restoreAllMocks);
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({gameId: 'd83b105d-99f9-4e28-af94-ed99d316902f'}),
}));

test('game details loads details about a gate', async () => {
    const testUuid = 'd83b105d-99f9-4e28-af94-ed99d316902f';
    const mockFetch = jest.fn().mockImplementation(async (route) => {
        if (!route.includes(testUuid))
            return undefined;
        return {
            ok: true,
            json: async () => new Game(testUuid, 'test title', 'test description')
        }
    });
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => render(<BrowserRouter><GameDetailsSideCar/></BrowserRouter>));

    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(mockFetch).toBeCalledTimes(1);
})
