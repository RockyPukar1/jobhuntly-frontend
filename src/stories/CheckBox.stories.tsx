import React from "react";
import { CheckBox } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "jobhuntly/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox: Story<any> = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "RoundedBorder4",
  variant: "OutlineGray300",
  label: "Checkbox",
  inputClassName: "mr-1",
};
