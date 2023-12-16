import {Game} from "../../models/game";
import {act, fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {GameListDisplayer} from "./gameListDisplayer";
import * as async_hooks from "async_hooks";

afterEach(jest.restoreAllMocks);

test('Game list displayer single game returned', async () => {
    const mockFetch = jest.fn().mockImplementation((input) => {
        if (input.includes("page=1&pageSize=20&title=")) {
            return {
                ok: true,
                json: async () => ({
                    games: [new Game('test-id', 'test title')],
                    page: 1,
                    totalPages: 1,
                    pageSize: 20
                })
            };
        }
        return undefined;
    })
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(<BrowserRouter><GameListDisplayer/></BrowserRouter>));

    expect(mockFetch).toBeCalledTimes(1);
    expect(screen.getByText('test title')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('1').parentElement).toHaveClass('active');
})

test('Game list displayer two pages', async () => {
    const mockFetch = jest.fn().mockImplementation((input) => {
        if (input.includes("page=1&pageSize=20&title=")) {
            return {
                ok: true,
                json: async () => ({
                    games: [new Game('test-id-1', 'test title 1'), new Game('test-id-2', 'test title 2')],
                    page: 1,
                    totalPages: 2,
                    pageSize: 2
                })
            };
        }
        if (input.includes("page=2&pageSize=20&title=")) {
            return {
                ok: true,
                json: async () => ({
                    games: [new Game('test-id-3', 'test title 3')],
                    page: 2,
                    totalPages: 2,
                    pageSize: 2
                })
            };
        }
        return undefined;
    })
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(<BrowserRouter><GameListDisplayer/></BrowserRouter>));

    expect(mockFetch).toBeCalledTimes(1);
    expect(screen.getByText('test title 1')).toBeInTheDocument();
    expect(screen.getByText('test title 2')).toBeInTheDocument();
    expect(screen.queryByText('test title 3')).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('1').parentElement).toHaveClass('active');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => fireEvent.click(screen.getByText('Next')));

    expect(mockFetch).toBeCalledTimes(2);
    expect(screen.queryByText('test title 1')).not.toBeInTheDocument();
    expect(screen.queryByText('test title 2')).not.toBeInTheDocument();
    expect(screen.getByText('test title 3')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('2').parentElement).toHaveClass('active');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => fireEvent.click(screen.getByText('Previous')));

    expect(mockFetch).toBeCalledTimes(3);
    expect(screen.getByText('test title 1')).toBeInTheDocument();
    expect(screen.getByText('test title 2')).toBeInTheDocument();
    expect(screen.queryByText('test title 3')).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('1').parentElement).toHaveClass('active');
})

test('Game list displayer filter applied', async () => {
    const mockFetch = jest.fn().mockImplementation(() => {
        return {
            ok: true,
            json: async () => ({
                games: [new Game('test-id', 'test title')],
                page: 1,
                totalPages: 1,
                pageSize: 20
            })
        };
    })
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(<BrowserRouter><GameListDisplayer/></BrowserRouter>));
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => fireEvent.change(screen.getByPlaceholderText('Game title...'), {target: {value: "title"}}));

    expect(mockFetch).toBeCalledWith("http://localhost:5510/api/v0/games?page=1&pageSize=20&title=");
    expect(mockFetch).toBeCalledWith("http://localhost:5510/api/v0/games?page=1&pageSize=20&title=title");
    expect(mockFetch).toBeCalledTimes(2);
})
