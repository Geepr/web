import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from 'storybook-addon-react-router-v6';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {Game} from "../models/game";
import GameReleaseBox from "../components/game/releases/gameReleaseBox";
import GameRelease from "../models/gameRelease";

const meta = {
    title: 'GameList/ReleaseBox',
    component: GameReleaseBox,
    decorators: [withRouter],
    tags: ['autodocs'],
} satisfies Meta<typeof GameReleaseBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GameReleaseBoxWithOverriddenTitle : Story = {
    args: {
        game: new Game('368488b8-d7a2-495d-bb9a-7324c4b2bef0', 'Test game', 'With a short test description'),
        release: new GameRelease('test', 'title overridden', ['a', 'b'])
    }
};

export const GameReleaseBoxWithDefaultTitle : Story = {
    args: {
        game: new Game('368488b8-d7a2-495d-bb9a-7324c4b2bef0', 'Test game', 'With a short test description'),
        release: new GameRelease('test', undefined, ['a', 'b'])
    }
};
