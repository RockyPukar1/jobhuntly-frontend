import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const C210DashboardSettingsLoginDetailsColumnlineTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text
            className="text-gray-900 text-lg w-40"
            size="txtEpilogueSemiBold18Gray900"
          >
            {props?.basicinformatioOne}
          </Text>
          <Text
            className="text-base text-blue_gray-700 w-auto"
            size="txtEpilogueRegular16Bluegray700"
          >
            {props?.thisislogininfoOne}
          </Text>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-start w-full">
          <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.updateemail}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-700"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.updateyouremailOne}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueMedium16Bluegray900"
                >
                  {props?.email}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_teal_300.svg"
                  alt="icon_Four"
                />
              </div>
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.youremailaddresOne}
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-[539px] sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.label}
              </Text>
              <Input
                name="input"
                placeholder="Enter your new email"
                className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <Button
              className="cursor-pointer font-bold font-epilogue min-w-[155px] text-base text-center"
              shape="square"
              color="indigo_A700"
              size="xl"
              variant="fill"
            >
              {props?.updateEmail}
            </Button>
          </div>
        </div>
        <Line className="bg-indigo-50 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-start w-full">
          <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.newpassword}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-700"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.manageyourpasswOne}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-[540px] sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelOne}
              </Text>
              <Input
                name="input_One"
                placeholder="Enter your old password"
                className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtEpilogueRegular14"
              >
                {props?.thisishelpertex}
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-[540px] sm:w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelTwo}
              </Text>
              <Input
                name="input_Two"
                placeholder="Enter your new password"
                className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtEpilogueRegular14"
              >
                {props?.thisishelpertexOne}
              </Text>
            </div>
            <Input
              name="button"
              placeholder="Change Password"
              className="font-bold font-epilogue p-0 placeholder:text-white-A700 text-base text-center w-full"
              wrapClassName="w-[36%]"
              shape="square"
              color="indigo_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
        </div>
        <Line className="bg-indigo-50 h-px w-full" />
        <div className="flex flex-row gap-2 items-center justify-start w-auto">
          <Text
            className="text-base text-center text-deep_orange-400 w-auto"
            size="txtEpilogueSemiBold16Deeporange400"
          >
            {props?.closeaccount}
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_icon_deep_orange_400.svg"
            alt="icon_Five"
          />
        </div>
      </div>
    </>
  );
};

C210DashboardSettingsLoginDetailsColumnlineTwo.defaultProps = {
  basicinformatioOne: "Basic Information",
  thisislogininfoOne: "This is login information that you can update anytime.",
  updateemail: "Update Email",
  updateyouremailOne: "Update your email address to make sure it is safe",
  email: "jakegyll@email.com",
  youremailaddresOne: "Your email address is verified.",
  label: "Update Email",
  updateEmail: "Update Email",
  newpassword: "New Password",
  manageyourpasswOne: "Manage your password to make sure it is safe",
  labelOne: "Old Password",
  thisishelpertex: "Minimum 8 characters",
  labelTwo: "New Password",
  thisishelpertexOne: "Minimum 8 characters",
  closeaccount: "Close Account",
};

export default C210DashboardSettingsLoginDetailsColumnlineTwo;
