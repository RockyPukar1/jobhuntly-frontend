import React from "react";

import { Button, Img, Line, Text } from "components";

const C15JobDescriptionsHeader3desktop = (props) => {
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
                  {props?.jobhuntlytext}
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
                    {props?.jobhuntlyonetext}
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
                  {props?.captiontext}
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueMedium16IndigoA700"
                >
                  {props?.captiononetext}
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
                {props?.captiontwotext}
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
              {props?.signupbutton}
            </Button>
          </div>
        </header>
        <div className="flex flex-col gap-[45px] items-start justify-start w-[83%] md:w-full">
          <Text
            className="text-base text-gray-900"
            size="txtEpilogueRegular16Gray900"
          >
            {props?.homecompaniestext}
          </Text>
          <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1187px] p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start p-1 w-1/5 sm:w-full">
                <Img
                  className="h-[82px] md:h-auto object-cover w-full"
                  src="images/img_stripelogodp4f5yykm.png"
                  alt="stripelogodp4fFive"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                  size="txtClashDisplayVariableSemiBold32"
                >
                  {props?.socialmediaassistanttext}
                </Text>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Text
                    className="text-blue_gray-700 text-xl w-auto"
                    size="txtEpilogueRegular20Bluegray700"
                  >
                    {props?.nomadtext}
                  </Text>
                  <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-blue_gray-700 text-xl w-auto"
                    size="txtEpilogueRegular20Bluegray700"
                  >
                    {props?.countrytext}
                  </Text>
                  <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-blue_gray-700 text-xl w-auto"
                    size="txtEpilogueRegular20Bluegray700"
                  >
                    {props?.fulltimetext}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[30px] items-center justify-center w-auto">
              <Img
                className="h-[33px] w-8"
                src="images/img_icon_blue_gray_400.svg"
                alt="icon"
              />
              <Line className="bg-gray-300 h-[58px] w-px" />
              <Button
                className="cursor-pointer font-bold font-epilogue min-w-[164px] text-center text-lg"
                shape="square"
                color="indigo_A700"
                size="2xl"
                variant="fill"
              >
                {props?.applybutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C15JobDescriptionsHeader3desktop.defaultProps = {
  jobhuntlytext: "JobHuntly",
  jobhuntlyonetext: "JobHuntly",
  captiontext: "Find Jobs",
  captiononetext: "Browse Companies",
  captiontwotext: "Login",
  signupbutton: "Sign Up",
  homecompaniestext: "Home / Companies / Nomad / Social Media Assistant",
  socialmediaassistanttext: "Social Media Assistant",
  nomadtext: "Stripe",
  countrytext: "Paris, France",
  fulltimetext: "Full-Time",
  applybutton: "Apply",
};

export default C15JobDescriptionsHeader3desktop;
