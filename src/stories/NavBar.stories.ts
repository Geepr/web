import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import {NavBar} from '../NavBar';

const meta = {
    title: 'NavBar/Main',
    component: NavBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainNavBar : Story = {
    args: {
        primary: true,
    },
};
