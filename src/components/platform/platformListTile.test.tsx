import Platform from "../../models/platform";
import {render, screen} from "@testing-library/react";
import PlatformListTile from "./platformListTile";
import {BrowserRouter} from "react-router-dom";

test('platform list tile displayed correctly', () => {
    const platform = new Platform('test-id', 'test name', 'tn');

    render(<BrowserRouter><PlatformListTile platform={platform} /></BrowserRouter>)

    expect(screen.getByText('test name')).toBeInTheDocument();
    expect(screen.getByText('tn')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/platforms/edit/test-id')
})
