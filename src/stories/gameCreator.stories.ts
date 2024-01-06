import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {withRouter} from "storybook-addon-react-router-v6";
import GameCreator from "../components/game/gameCreator";

const meta = {
    title: 'GameList/Creator',
    component: GameCreator,
    decorators: [withRouter],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GameCreator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GameCreatorExample : Story = {
};
