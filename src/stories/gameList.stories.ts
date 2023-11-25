import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {GameList} from "../components/game/gameList";
import {Game} from "../models/game";

const meta = {
    title: 'GameList/List',
    component: GameList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GameList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GameList10Elements : Story = {
    args: {games: [
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef0", "test game 1"),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef1", "test game 2", "This is a test game description"),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef2", "test game 3", undefined,  true),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef3", "test game 4"),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef4", "test game 5"),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef5", "test game 6", undefined,  true),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef6", "test game 7"),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef7", "test game 8", "This game has a veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong description!"),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef8", "test game 9 with a ridiculously long title"),
        new Game("368488b8-d7a2-495d-bb9a-7324c4b2bef9", "test game 10"),
        ]}
};
