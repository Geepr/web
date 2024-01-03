import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {withRouter} from "storybook-addon-react-router-v6";
import PlatformList from "../components/platform/platformList";
import Platform from "../models/platform";

const meta = {
    title: 'PlatformList/List',
    component: PlatformList,
    decorators: [withRouter],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PlatformList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlatformList10Elements : Story = {
    args: {platforms: [
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef0", "test platform 1", "tp1"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef1", "test platform 2", "tp2"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef2", "test platform 3", "tp3"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef3", "test platform 4", "tp4"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef4", "test platform 5", "tp5"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef5", "test platform 6", "tp6"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef6", "test platform 7", "tp7"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef7", "test platform 8", "tp8"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef8", "test platform 9 with a ridiculously long title", "tpppp9"),
        new Platform("368488b8-d7a2-495d-bb9a-7324c4b2bef9", "test platform 10", "tp10"),
        ]}
};
