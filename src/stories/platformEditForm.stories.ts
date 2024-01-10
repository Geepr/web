import type { Meta, StoryObj } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {withRouter} from "storybook-addon-react-router-v6";
import PlatformEditForm from "../components/platform/platformEditForm";
import Platform from "../models/platform";

const meta = {
    title: 'PlatformList/Edit',
    component: PlatformEditForm,
    decorators: [withRouter],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PlatformEditForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlatformEditFormExample : Story = {
    args: {platform: new Platform('test', 'test platform', 'tp')}
};
