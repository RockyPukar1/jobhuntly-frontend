import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "jobhuntly/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder0",
  variant: "OutlineGray300",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
