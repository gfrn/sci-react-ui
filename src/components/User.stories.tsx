import { Meta, StoryObj } from "@storybook/react";

import { User } from "./User";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

const meta: Meta<typeof User> = {
  title: "Components/Control/User",
  component: User,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProviderWrapper>
        <Story />
      </ThemeProviderWrapper>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: { user: null },
};

export const LoggedIn: Story = {
  args: { user: { name: "Name", fedid: "FedID" } },
};
