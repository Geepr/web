import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {PageControl} from "../components/pagination/pageControl";

const meta = {
    title: 'PageControl/PageControl',
    component: PageControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PageControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SinglePage : Story = {
    args: { Page: 1, TotalPages: 1, SetPage: null! },
};

export const TwoPages : Story = {
    args: { Page: 1, TotalPages: 2, SetPage: null! },
    render: function Render(args) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const[_, updateArgs] = useArgs();
        function setPage(page : number) {
            updateArgs({Page: page});
        }

        return <PageControl Page={args.Page} TotalPages={args.TotalPages} SetPage={setPage} />
    }
};

export const ThreePages : Story = {
    args: { Page: 1, TotalPages: 3, SetPage: null! },
    render: function Render(args) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const[_, updateArgs] = useArgs();
        function setPage(page : number) {
            updateArgs({Page: page});
        }

        return <PageControl Page={args.Page} TotalPages={args.TotalPages} SetPage={setPage} />
    }
};

export const FourPages : Story = {
    args: { Page: 1, TotalPages: 4, SetPage: null! },
    render: function Render(args) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const[_, updateArgs] = useArgs();
        function setPage(page : number) {
            updateArgs({Page: page});
        }

        return <PageControl Page={args.Page} TotalPages={args.TotalPages} SetPage={setPage} />
    }
};

export const FivePages : Story = {
    args: { Page: 1, TotalPages: 5, SetPage: null! },
    render: function Render(args) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const[_, updateArgs] = useArgs();
        function setPage(page : number) {
            updateArgs({Page: page});
        }

        return <PageControl Page={args.Page} TotalPages={args.TotalPages} SetPage={setPage} />
    }
};

export const LotsOfPages : Story = {
    args: { Page: 1, TotalPages: 80, SetPage: null! },
    render: function Render(args) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const[_, updateArgs] = useArgs();
        function setPage(page : number) {
            updateArgs({Page: page});
        }

        return <PageControl Page={args.Page} TotalPages={args.TotalPages} SetPage={setPage} />
    }
};
