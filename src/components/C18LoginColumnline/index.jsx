import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const C18LoginColumnline = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <div className="flex flex-row items-center justify-center w-auto">
            <Button
              className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[115px] text-base text-center"
              shape="square"
              color="indigo_50_01"
              size="md"
              variant="fill"
            >
              {props?.jobSeeker}
            </Button>
            <Button
              className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[100px] text-base text-center"
              shape="square"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.company}
            </Button>
          </div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-auto"
            size="txtClashDisplayVariableSemiBold32Gray900"
          >
            {props?.welcomebackdudeOne}
          </Text>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[408px] sm:min-w-full"
            leftIcon={
              <Img
                className="h-5 mr-2.5"
                src="images/img_icon_amber_500.svg"
                alt="Icon"
              />
            }
            shape="square"
            color="indigo_100"
            size="xl"
            variant="outline"
          >
            <div className="font-bold font-epilogue text-base text-center">
              {props?.loginWithGoogle}
            </div>
          </Button>
        </div>
        <div className="flex flex-row gap-6 items-start justify-between w-full">
          <Line className="bg-gray-300 h-px my-[7px] w-[27%]" />
          <Text
            className="text-base text-center text-gray-900_87"
            size="txtEpilogueRegular16Gray90087"
          >
            {props?.orloginwithemaiOne}
          </Text>
          <Line className="bg-gray-300 h-px my-[7px] w-[27%]" />
        </div>
        <div className="flex flex-col gap-[22px] items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-[408px] md:w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.label}
            </Text>
            <Input
              name="input"
              placeholder="Enter email address"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-[408px] md:w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.labelOne}
            </Text>
            <Input
              name="input_One"
              placeholder="Enter password"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="border border-indigo-A700 border-solid h-6 mr-[5px] w-6"
              name="caption"
              id="caption"
              label="Remember me"
              shape="round"
              color="indigo_A700"
              size="xs"
              variant="fill"
            ></CheckBox>
          </div>
          <Button
            className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
            shape="square"
            color="indigo_A700"
            size="xl"
            variant="fill"
          >
            {props?.login}
          </Button>
        </div>
        <div className="flex flex-row gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-gray-900_99 w-auto"
            size="txtEpilogueRegular16Gray90099"
          >
            {props?.confirmation}
          </Text>
          <Text
            className="text-base text-center text-indigo-A700 w-auto"
            size="txtInterSemiBold16IndigoA700"
          >
            {props?.signup}
          </Text>
        </div>
      </div>
    </>
  );
};

C18LoginColumnline.defaultProps = {
  jobSeeker: "Job Seeker",
  company: "Company",
  welcomebackdudeOne: "Welcome Back, Dude",
  loginWithGoogle: "Login with Google",
  orloginwithemaiOne: "Or login with email",
  label: "Email Address",
  labelOne: "Password",
  login: "Login",
  confirmation: "Don’t have an account?",
  signup: "Sign Up",
};

export default C18LoginColumnline;
