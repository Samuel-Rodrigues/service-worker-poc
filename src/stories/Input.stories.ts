import { Input } from "../components/Input/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeText: Story = {
  args: {
    type: "text",
    onFocus: () => {
      console.log("oioi");
    },
  },
};

export const TypeNumber: Story = {
  args: {
    type: "number",
    onFocus: () => {
      console.log("oioi");
    },
  },
};

export const onFocus: Story = {
  args: {
    isFocus: true,
  },
};
