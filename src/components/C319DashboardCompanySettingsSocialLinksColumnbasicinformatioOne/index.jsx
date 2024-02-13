import React from "react";

import { Button, Input, Line, Text } from "components";

const C319DashboardCompanySettingsSocialLinksColumnbasicinformatioOne = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[142px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.basicinformationtext}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.addelsewheretext}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start max-w-[728px] w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.label}
              </Text>
              <Input
                name="input"
                placeholder="https://www.instagram.com/nomad/"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelOne}
              </Text>
              <Input
                name="input_One"
                placeholder="https://twitter.com/nomad/"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelTwo}
              </Text>
              <Input
                name="input_Two"
                placeholder="https://web.facebook.com/nomad/"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelThree}
              </Text>
              <Input
                name="input_Three"
                placeholder="Enter your LinkedIn address"
                className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelFour}
              </Text>
              <Input
                name="input_Four"
                placeholder="Enter your youtube address"
                className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <Button
          className="cursor-pointer font-bold font-epilogue min-w-[209px] text-center text-lg"
          shape="square"
          color="indigo_A700"
          size="2xl"
          variant="fill"
        >
          {props?.savechangesbutton}
        </Button>
      </div>
    </>
  );
};

C319DashboardCompanySettingsSocialLinksColumnbasicinformatioOne.defaultProps = {
  basicinformationtext: "Basic Information",
  addelsewheretext:
    "Add elsewhere links to your company profile. You can add only username without full https links.",
  label: "Instagram",
  labelOne: "Twitter",
  labelTwo: "Facebook",
  labelThree: "LinkedIn",
  labelFour: "Youtube",
  savechangesbutton: "Save Changes",
};

export default C319DashboardCompanySettingsSocialLinksColumnbasicinformatioOne;
