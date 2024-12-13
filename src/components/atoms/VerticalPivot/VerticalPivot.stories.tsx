import type { Meta, StoryObj } from '@storybook/react';

import { VerticalPivot } from './VerticalPivot';

const meta = {
  component: VerticalPivot,
} satisfies Meta<typeof VerticalPivot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};