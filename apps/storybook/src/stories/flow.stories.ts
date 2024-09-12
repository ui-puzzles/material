import type { Meta, StoryObj } from '@storybook/react';

import { ReactFlow } from '@ui-puzzles/flow';

const meta = {
  title: '@ui-puzzles/flow',
  component: ReactFlow,
  parameters: {},
  args: {
    height: 500,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReactFlow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
