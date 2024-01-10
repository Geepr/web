import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {withRouter} from "storybook-addon-react-router-v6";
import GameEditForm from "../components/game/gameEditForm";
import {Game} from "../models/game";

const meta = {
    title: 'GameList/Edit',
    component: GameEditForm,
    decorators: [withRouter],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GameEditForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GameEditFormExample : Story = {
    args: {game: new Game('test', 'test game', 'test game description')}
};
