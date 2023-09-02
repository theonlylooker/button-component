import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ReactComponent as Logo } from "../../assets/react.svg";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};
export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};
export const Text: Story = {
  args: {
    children: "Text",
    variant: "text",
  },
};
export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};
export const Secondary: Story = {
  args: {
    children: "Secondary",
    color: "secondary",
  },
};
export const Danger: Story = {
  args: {
    children: "Danger",
    color: "danger",
  },
};
export const NoBoxShadow: Story = {
  args: {
    children: "No Shadow",
    size: "lg",
    disableShadow: true,
  },
};
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};
export const Medium: Story = {
  args: {
    children: "Medium",
    size: "md",
  },
};
export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};
export const StartIcon: Story = {
  args: {
    children: "Start Icon",
    size: "lg",
    StartIcon: Logo,
  },
};
export const EndIcon: Story = {
  args: {
    children: "End Icon",
    size: "lg",
    EndIcon: Logo,
  },
};
