import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C12FindJobsHeader2desktop = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_header2desktop.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
          <header className="bg-white-A700 flex md:flex-col md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[124px] w-full">
            <div className="flex sm:flex-col flex-row gap-12 h-[78px] md:h-auto items-center justify-center">
              <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                <div className="h-[34px] relative w-full">
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
                    className="absolute bottom-[0] right-[0] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.24px]"
                    size="txtRedHatDisplayBold24Bluegray900"
                  >
                    {props?.jobhuntly}
                  </Text>
                  <div className="absolute flex flex-row gap-2 h-full inset-[0] items-start justify-center m-auto w-full">
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
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-base text-indigo-A700 w-auto"
                    size="txtEpilogueMedium16IndigoA700"
                  >
                    {props?.caption}
                  </Text>
                  {!!props?.rectangle2740 ? (
                    <Line className="bg-indigo-A700 h-1 w-full" />
                  ) : null}
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueMedium16Bluegray700"
                  >
                    {props?.captionOne}
                  </Text>
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
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
              <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                    size="txtClashDisplayVariableSemiBold48"
                  >
                    {props?.findyour}
                  </Text>
                  <div className="flex flex-col relative w-[241px]">
                    <Text
                      className="mt-[-NaNpx] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-blue-500 text-center w-auto z-[1]"
                      size="txtClashDisplayVariableSemiBold48Blue500"
                    >
                      {props?.dreamjob}
                    </Text>
                    <Img
                      className="h-3.5 mt-[-7px] mx-auto w-full z-[1]"
                      src="images/img_group.svg"
                      alt="group"
                    />
                  </div>
                </div>
                <Text
                  className="text-blue_gray-700 text-center text-lg w-auto"
                  size="txtEpilogueRegular18Bluegray700"
                >
                  {props?.findyournextcarOne}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <div className="bg-white-A700 flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1192px] p-6 sm:px-5 shadow-bs w-full">
                <div className="flex flex-1 sm:flex-col flex-row gap-4 h-full items-center justify-start px-4 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start pt-2.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.jobtitleorkeywoOne}
                    </Text>
                    <Line className="bg-gray-300 h-px w-full" />
                  </div>
                </div>
                <Line className="bg-gray-900_63 h-14 md:h-px md:w-full w-px" />
                <div className="flex flex-1 sm:flex-col flex-row gap-4 h-full items-center justify-start pl-2 sm:pr-5 pr-6 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <SelectBox
                    className="!text-gray-900_ab flex-1 sm:flex-1 font-epilogue text-base text-left w-[92%] sm:w-full"
                    placeholderClassName="!text-gray-900_ab"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_blue_gray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="country"
                    options={countryOptionsList}
                    isSearchable={false}
                    placeholder="Florence, Italy"
                    color="gray_300"
                    size="sm"
                    variant="underline"
                  />
                </div>
                <Button
                  className="cursor-pointer font-bold font-epilogue text-base text-center w-[113px]"
                  shape="square"
                  color="indigo_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.search}
                </Button>
              </div>
              <Text
                className="text-base text-blue_gray-700_99 w-auto"
                size="txtEpilogueRegular16Bluegray70099"
              >
                {props?.popularuidesignOne}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C12FindJobsHeader2desktop.defaultProps = {
  jobhuntly: "JobHuntly",
  jobhuntlyOne: "JobHuntly",
  caption: "Find Jobs",
  captionOne: "Browse Companies",
  captionTwo: "Login",
  signUp: "Sign Up",
  findyour: "Find your",
  dreamjob: "dream job",
  findyournextcarOne:
    "Find your next career at companies like HubSpot, Nike, and Dropbox",
  jobtitleorkeywoOne: "Job title or keyword",
  search: "Search",
  popularuidesignOne: "Popular : UI Designer, UX Researcher, Android, Admin",
};

export default C12FindJobsHeader2desktop;
