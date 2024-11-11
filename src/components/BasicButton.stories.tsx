import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import { BasicButton } from './BasicButton';

const meta: Meta<typeof BasicButton> = {
  component: BasicButton,
};

export default meta;
type Story = StoryObj<typeof BasicButton>;

export const Primary: Story = {
  args: {
    label: 'Button'
  },
};