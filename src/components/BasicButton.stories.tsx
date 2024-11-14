import type { Meta, StoryObj } from '@storybook/react';

import { BasicButton } from './BasicButton';

const meta: Meta<typeof BasicButton> = {
  title: 'SciReactUI/Basic/BasicButton',
  component: BasicButton,
  tags: ['autodocs'],
  render: ({ ...args }) => (
      <BasicButton {...args}>A button</BasicButton>
  ),
};

export default meta;
type Story = StoryObj<typeof BasicButton>;

export const Primary: Story = {
  args: {
  },
};

export const Variants: Story = {
  args: {
    variant: "contained",
  }
};

export const Disabled: Story = {
  args: {
    variant: "contained",
    disabled: true
  },
};

export const SecondaryColour: Story = {
  args: {
    color: 'secondary'
  },
};