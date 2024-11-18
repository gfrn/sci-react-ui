import Chip from "@mui/material/Chip";
import { Meta, StoryObj } from "@storybook/react";
import { User } from "./User";
import { NavLink, NavLinks, Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "SciReactUI/Navigation/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};

export const WithLogin: Story = {
  args: {
    children: <User onLogin={() => {}} onLogout={() => {}} user={null} />,
  },
};

export const WithUser: Story = {
  args: {
    children: (
      <User
        onLogin={() => {}}
        onLogout={() => {}}
        user={{ name: "Name", fedid: "FedID" }}
      />
    ),
  },
};

export const Links: Story = {
  args: {
    children: (
      <NavLinks>
        <NavLink href="#" key="proposal">Proposal</NavLink>
        <NavLink href="#" key="visits">Visits</NavLink>
      </NavLinks>
    ),
  },
};

export const LinksAndUser: Story = {
  args: {
    children: [
      <NavLinks>
        <NavLink href="#" key="proposal">Proposal</NavLink>
        <NavLink href="#" key="visits">Visits</NavLink>
      </NavLinks>,
      <User
        onLogin={() => {}}
        onLogout={() => {}}
        user={{ name: "Name", fedid: "FedID" }}
      />,
    ],
  },
};

export const NoLogo: Story = {
  args: {
    children: (
      <NavLinks>
        <NavLink href="#" key="proposal">Proposal</NavLink>
        <NavLink href="#" key="visits">Visits</NavLink>
      </NavLinks>
    ),
    logo: null,
  },
};

export const CustomChildElement: Story = {
  args: {
    children: <Chip label="Hello, World" sx={{ bgcolor: "#ffffff" }} />,
  },
};
