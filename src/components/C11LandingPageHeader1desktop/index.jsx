import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C11LandingPageHeader1desktop = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-end my-auto md:pl-10 sm:pl-5 pl-[302px] pt-[302px] right-[0] w-3/5"
          style={{ backgroundImage: "url('images/img_group24.svg')" }}
        >
          <Img
            className="h-[239px] md:h-auto mt-[253px] object-cover"
            src="images/img_pic.png"
            alt="pic"
          />
        </div>
        <div className="absolute bottom-[13%] flex flex-col gap-[23px] items-start justify-start left-[9%] max-w-[852px] w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start w-[63%] md:w-full">
            {props?.discovermoretext}
            <Img className="h-[39px]" src="images/img_group.svg" alt="group" />
          </div>
          <Text
            className="leading-[160.00%] max-w-[521px] md:max-w-full text-blue_gray-700_99 text-xl"
            size="txtEpilogueRegular20Bluegray70099"
          >
            {props?.greatplatformtext}
          </Text>
          <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[852px] p-4 shadow-bs w-full">
              <div className="flex flex-1 flex-row gap-4 h-full items-center justify-start px-4 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
                <div className="flex flex-1 flex-col gap-2.5 h-full items-start justify-between pt-5 w-full">
                  <Text
                    className="text-base text-blue_gray-400_87 w-auto"
                    size="txtEpilogueRegular16Bluegray40087"
                  >
                    {props?.jobtitletext}
                  </Text>
                  <Line className="bg-gray-300 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-1 flex-row gap-4 h-full items-center justify-start pl-2 sm:pr-5 pr-6 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <SelectBox
                  className="!text-blue_gray-900_ab flex-1 sm:flex-1 font-epilogue h-full text-base text-left w-[86%] sm:w-full"
                  placeholderClassName="!text-blue_gray-900_ab"
                  indicator={
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown_blue_gray_400.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="country"
                  options={countryOptionsList}
                  isSearchable={false}
                  placeholder="Florence, Italy"
                  color="gray_300"
                  size="md"
                  variant="underline"
                />
              </div>
              <Button
                className="cursor-pointer font-bold font-epilogue h-[57px] text-center text-lg w-[209px]"
                shape="square"
                color="indigo_A700"
                size="2xl"
                variant="fill"
              >
                {props?.searchbutton}
              </Button>
            </div>
            {props?.populartext}
          </div>
        </div>
        <header className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[124px] top-[0] w-full">
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
                    {props?.jobhuntlytext1}
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
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  {props?.browsecompaniestext}
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
                {props?.logintext}
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
      </div>
    </>
  );
};

C11LandingPageHeader1desktop.defaultProps = {
  discovermoretext: (
    <Text
      className="leading-[110.00%] md:text-5xl text-7xl text-blue_gray-900 w-full"
      size="txtClashDisplayVariableSemiBold72"
    >
      <span className="text-blue_gray-900 font-clashdisplayvariable text-left font-semibold">
        Discover more than
      </span>
      <span className="text-blue_gray-900 font-clashdisplayvariable text-left font-semibold">
        {" "}
      </span>
      <span className="text-blue-500 font-clashdisplayvariable text-left font-semibold">
        5000+ Jobs
      </span>
    </Text>
  ),
  greatplatformtext:
    "Great platform for the job seeker that searching for new career heights and passionate about startups.",
  jobtitletext: "Job title or keyword",
  searchbutton: "Search my job",
  populartext: (
    <Text
      className="text-base text-gray-900_99 w-auto"
      size="txtEpilogueRegular16Gray90099"
    >
      <span className="text-gray-900 font-epilogue text-left font-normal">
        Popular :{" "}
      </span>
      <span className="text-gray-900 font-epilogue text-left font-medium">
        UI Designer, UX Researcher, Android, Admin
      </span>
    </Text>
  ),
  jobhuntlytext: "JobHuntly",
  jobhuntlytext1: "JobHuntly",
  caption: "Find Jobs",
  browsecompaniestext: "Browse Companies",
  logintext: "Login",
  signupbutton: "Sign Up",
};

export default C11LandingPageHeader1desktop;
