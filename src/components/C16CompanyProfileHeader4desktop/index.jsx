import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C16CompanyProfileHeader4desktop = (props) => {
  return (
    <>
      <div className={props.className}>
        <header className="bg-white-A700 flex md:flex-col md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[124px] w-full">
          <div className="flex sm:flex-col flex-row gap-12 h-[78px] md:h-auto items-center justify-center">
            <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
              <div className="flex h-[34px] justify-end relative w-full">
                <div className="absolute bg-indigo-A700 flex flex-col h-8 items-center justify-start left-[0] p-1 rounded-[50%] top-[0] w-8">
                  <Img
                    className="h-5 w-5"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                  <Img
                    className="h-1.5 rounded-[1px]"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <Text
                  className="ml-auto mt-auto text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.24px]"
                  size="txtRedHatDisplayBold24Bluegray900"
                >
                  {props?.jobhuntly}
                </Text>
                <div className="absolute flex flex-row gap-[7px] h-full inset-[0] items-start justify-center m-auto w-full">
                  <Img
                    className="h-8 mb-0.5 w-8"
                    src="images/img_frame3.svg"
                    alt="frameThree"
                  />
                  <Text
                    className="mt-0.5 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.24px]"
                    size="txtRedHatDisplayBold24Bluegray900"
                  >
                    {props?.jobhuntlyOne}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 h-[78px] md:h-auto items-end justify-center">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  {props?.caption}
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueMedium16IndigoA700"
                >
                  {props?.captionOne}
                </Text>
                <Line className="bg-indigo-A700 h-1 w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 h-[78px] md:h-auto items-center justify-center w-auto">
            <div className="flex flex-col items-center justify-center sm:px-5 px-6 py-3 rounded w-auto">
              <Text
                className="text-base text-center text-indigo-A700 w-auto"
                size="txtEpilogueBold16"
              >
                {props?.captionTwo}
              </Text>
            </div>
            <Line className="bg-gray-300 h-12 w-px" />
            <Button
              className="cursor-pointer font-bold font-epilogue min-w-[108px] text-base text-center"
              shape="square"
              color="indigo_A700"
              size="xl"
              variant="fill"
            >
              {props?.signUp}
            </Button>
          </div>
        </header>
        <div className="flex flex-col gap-[45px] items-start justify-start md:ml-[0] ml-[125px] w-[70%] md:w-full">
          <Text
            className="text-base text-blue_gray-900"
            size="txtEpilogueRegular16Bluegray900"
          >
            {props?.homecompanies}
          </Text>
          <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col h-[189px] items-center justify-start p-2 w-[189px]">
              <Img
                className="h-[171px] md:h-auto object-cover w-[171px]"
                src="images/img_stripelogodp4f5yykm.png"
                alt="stripelogodp4fFive"
              />
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                    size="txtClashDisplayVariableSemiBold48"
                  >
                    {props?.stripe}
                  </Text>
                  <Button
                    className="cursor-pointer font-epilogue min-w-[85px] text-base text-center"
                    shape="square"
                    color="indigo_A700"
                    size="md"
                    variant="outline"
                  >
                    {props?.p43jobs}
                  </Button>
                </div>
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueSemiBold16IndigoA700"
                >
                  {props?.weburl}
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Button
                    className="flex h-11 items-center justify-center rounded-[50%] w-11"
                    shape="circle"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_blue_500.svg"
                      alt="icon"
                    />
                  </Button>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.founded}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.july312011}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Button
                    className="flex h-11 items-center justify-center rounded-[50%] w-11"
                    shape="circle"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_blue_500_44x44.svg"
                      alt="icon"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.employees}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.p4000}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Button
                    className="flex h-11 items-center justify-center rounded-[50%] w-11"
                    shape="circle"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_linkedin_blue_500.svg"
                      alt="linkedin"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.location}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.countriescounter}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Button
                    className="flex h-11 items-center justify-center rounded-[50%] w-11"
                    shape="circle"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_44x44.svg"
                      alt="icon"
                    />
                  </Button>
                  <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.industry}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.paymentgateway}
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C16CompanyProfileHeader4desktop.defaultProps = {
  jobhuntly: "JobHuntly",
  jobhuntlyOne: "JobHuntly",
  caption: "Find Jobs",
  captionOne: "Browse Companies",
  captionTwo: "Login",
  signUp: "Sign Up",
  homecompanies: "Home / Companies / Nomad",
  stripe: "Stripe",
  p43jobs: "43 Jobs",
  weburl: "https://stripe.com",
  founded: "Founded",
  july312011: "July 31, 2011",
  employees: "Employees",
  p4000: "4000+",
  location: "Location",
  countriescounter: "20 countries",
  industry: "Industry",
  paymentgateway: "Payment Gateway",
};

export default C16CompanyProfileHeader4desktop;
