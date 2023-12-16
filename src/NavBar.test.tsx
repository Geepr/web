import React from 'react';
import { render, screen } from '@testing-library/react';
import {NavBar} from "./NavBar";
import {BrowserRouter} from "react-router-dom";

test('renders navbar with links', () => {
  render(<BrowserRouter><NavBar /></BrowserRouter>);
  const linkElement = screen.getByText(/Games/i);
  expect(linkElement).toBeInTheDocument();
});
