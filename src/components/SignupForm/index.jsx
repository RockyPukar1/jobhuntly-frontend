import React, { useState } from "react";

import { Button, Img, Input, Line, Text } from "components";

const SignupForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("fullname: ", fullName);
  console.log("email: ", email);
  console.log("password: ", password)

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
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-full"
            size="txtClashDisplayVariableSemiBold32Gray900"
          >
            {props?.language}
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
              {props?.signUpWithGoogle}
            </div>
          </Button>
        </div>
        <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between w-full">
          <Line className="bg-gray-300 h-px sm:mt-0 my-[7px] w-[27%]" />
          <Text
            className="text-base text-center text-gray-900_87"
            size="txtEpilogueRegular16Gray90087"
          >
            {props?.orsignupwith}
          </Text>
          <Line className="bg-gray-300 h-px sm:mt-0 my-[7px] w-[27%]" />
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
              onChange={(e) => setFullName(e.target.value)}
              name="input"
              placeholder="Enter your full name"
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
              onChange={(e) => setEmail(e.target.value)}
              name="input_One"
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
              {props?.labelTwo}
            </Text>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              name="input_Two"
              placeholder="Enter password"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <Button
            className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
            shape="square"
            color="indigo_A700"
            size="xl"
            variant="fill"
          >
            {props?.continue}
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
            {props?.login}
          </Text>
        </div>
        {props?.byclickingcontiOne}
      </div>
    </>
  );
};

SignupForm.defaultProps = {
  jobSeeker: "Job Seeker",
  company: "Company",
  language: "Get more opportunities ",
  signUpWithGoogle: "Sign Up with Google",
  orsignupwith: "Or sign up with email",
  label: "Full name",
  labelOne: "Email Address",
  labelTwo: "Password",
  continue: "Continue",
  confirmation: "Already have an account?",
  login: "Login",
  byclickingcontiOne: (
    <Text
      className="leading-[160.00%] max-w-[408px] md:max-w-full text-blue_gray-400 text-sm"
      size="txtEpilogueRegular14"
    >
      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
        <>
          By clicking &#39;Continue&#39;, you acknowledge that you have read and
          accept the{" "}
        </>
      </span>
      <span className="text-indigo-A700 font-epilogue text-left font-normal">
        Terms of Service
      </span>
      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
        {" "}
        and{" "}
      </span>
      <span className="text-indigo-A700 font-epilogue text-left font-normal">
        Privacy Policy.
      </span>
    </Text>
  ),
};

export default SignupForm;
