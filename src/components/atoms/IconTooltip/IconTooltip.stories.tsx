import type { Meta, StoryObj } from '@storybook/react';

import { IconTooltip } from './IconTooltip';

const meta = {
  component: IconTooltip,
} satisfies Meta<typeof IconTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};