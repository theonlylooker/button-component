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
    color: "danger",
    size: "sm",
    disabled: true,
    StartIcon: Logo,
  },
};
