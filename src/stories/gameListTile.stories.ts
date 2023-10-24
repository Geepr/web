import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {GameListTile} from '../components/game/gameListTile';
import {Game} from "../models/game";

const meta = {
    title: 'GameList/Tile',
    component: GameListTile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GameListTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GameListTileWithDescription : Story = {
    args: { game: new Game('368488b8-d7a2-495d-bb9a-7324c4b2bef0', 'Test game', 'With a short test description')}
};

export const GameListTileWithLongDescription : Story = {
    args: { game: new Game('368488b8-d7a2-495d-bb9a-7324c4b2bef0', 'Test game', 'With a looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo test description') }
};

export const GameListTileNoDescription : Story = {
    args: { game: new Game('368488b8-d7a2-495d-bb9a-7324c4b2bef0', 'Test game') }
};

export const GameListTileArchived : Story = {
    args: { game: new Game('368488b8-d7a2-495d-bb9a-7324c4b2bef0', 'Test game', null,  true) }
};
