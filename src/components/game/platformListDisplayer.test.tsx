import Platform from "../../models/platform";
import {act, fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import PlatformListDisplayer from "./platformListDisplayer";

afterEach(jest.restoreAllMocks);

test('Platform list displayer single game returned', async () => {
    const mockFetch = jest.fn().mockImplementation((input) => {
        if (input.includes("page=1&pageSize=20")) {
            return {
                ok: true,
                json: async () => ({
                    platforms: [new Platform('test-id', 'test name', 'tt')],
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
    await act(async () => render(<BrowserRouter><PlatformListDisplayer/></BrowserRouter>));

    expect(mockFetch).toBeCalledTimes(1);
    expect(screen.getByText('test name')).toBeInTheDocument();
    expect(screen.getByText('tt')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('1').parentElement).toHaveClass('active');
})

test('Platform list displayer two pages', async () => {
    const mockFetch = jest.fn().mockImplementation((input) => {
        if (input.includes("page=1&pageSize=20")) {
            return {
                ok: true,
                json: async () => ({
                    platforms: [new Platform('test-id-1', 'test name 1', 'tt1'), new Platform('test-id-2', 'test name 2', 'tt2')],
                    page: 1,
                    totalPages: 2,
                    pageSize: 2
                })
            };
        }
        if (input.includes("page=2&pageSize=20")) {
            return {
                ok: true,
                json: async () => ({
                    platforms: [new Platform('test-id-3', 'test name 3', 'tt3')],
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
    await act(async () => render(<BrowserRouter><PlatformListDisplayer/></BrowserRouter>));

    expect(mockFetch).toBeCalledTimes(1);
    expect(screen.getByText('test name 1')).toBeInTheDocument();
    expect(screen.getByText('tt1')).toBeInTheDocument();
    expect(screen.getByText('test name 2')).toBeInTheDocument();
    expect(screen.getByText('tt2')).toBeInTheDocument();
    expect(screen.queryByText('test name 3')).not.toBeInTheDocument();
    expect(screen.queryByText('tt3')).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('1').parentElement).toHaveClass('active');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => fireEvent.click(screen.getByText('Next')));

    expect(mockFetch).toBeCalledTimes(2);
    expect(screen.queryByText('test name 1')).not.toBeInTheDocument();
    expect(screen.queryByText('tt1')).not.toBeInTheDocument();
    expect(screen.queryByText('test name 2')).not.toBeInTheDocument();
    expect(screen.queryByText('tt2')).not.toBeInTheDocument();
    expect(screen.getByText('test name 3')).toBeInTheDocument();
    expect(screen.getByText('tt3')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('2').parentElement).toHaveClass('active');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => fireEvent.click(screen.getByText('Previous')));

    expect(mockFetch).toBeCalledTimes(3);
    expect(screen.getByText('test name 1')).toBeInTheDocument();
    expect(screen.getByText('tt1')).toBeInTheDocument();
    expect(screen.getByText('test name 2')).toBeInTheDocument();
    expect(screen.getByText('tt2')).toBeInTheDocument();
    expect(screen.queryByText('test name 3')).not.toBeInTheDocument();
    expect(screen.queryByText('tt3')).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('1').parentElement).toHaveClass('active');
})
