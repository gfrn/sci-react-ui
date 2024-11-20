import { Meta, StoryObj } from "@storybook/react";

import { User } from "./User";

const meta: Meta<typeof User> = {
  title: "SciReactUI/Control/User",
  component: User,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: { user: null },
};

export const LoggedIn: Story = {
  args: { user: { name: "Name", fedid: "FedID" } },
};
