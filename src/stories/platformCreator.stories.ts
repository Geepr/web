import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {withRouter} from "storybook-addon-react-router-v6";
import PlatformCreator from "../components/platform/platformCreator";

const meta = {
    title: 'PlatformList/Creator',
    component: PlatformCreator,
    decorators: [withRouter],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PlatformCreator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlatformCreatorExample : Story = {
};
