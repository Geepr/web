import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import platformListTile from "../components/platform/platformListTile";
import Platform from "../models/platform";
import {withRouter} from "storybook-addon-react-router-v6";

const meta = {
    title: 'PlatformList/PlatformListTile',
    component: platformListTile,
    decorators: [withRouter],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof platformListTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimplePlatformTile : Story = {
    args: { platform: new Platform('test', 'test platform', 'tp') },
};
