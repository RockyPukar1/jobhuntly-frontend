import React from "react";

import { Img, Text } from "components";

const C11LandingPageColumnexplorebycategoOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-2.5 items-end justify-between max-w-[1192px] w-full">
          {props?.explorebycategorytext}
          <div className="flex flex-row gap-4 items-center justify-end w-auto">
            <Text
              className="text-base text-center text-indigo-A700 w-auto"
              size="txtEpilogueSemiBold16IndigoA700"
            >
              {props?.showalljobstext}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 w-full">
              <Img
                className="h-12 w-12"
                src="images/img_music.svg"
                alt="music"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24"
                >
                  {props?.designtext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray400"
                  >
                    {props?.jobsavailabletext}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_blue_gray_900.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 w-full">
              <Img
                className="h-12 w-12"
                src="images/img_icon_indigo_a700.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24"
                >
                  {props?.salestext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray400"
                  >
                    {props?.jobsavailabletext1}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_blue_gray_900.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <div className="bg-indigo-A700 flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 w-full">
              <Img
                className="h-12 w-12"
                src="images/img_maximize.svg"
                alt="maximize"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24WhiteA700"
                >
                  {props?.marketingtext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtEpilogueRegular18WhiteA700"
                  >
                    {props?.jobsavailabletext2}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 w-full">
              <Img
                className="h-12 w-12"
                src="images/img_icon_indigo_a700_48x48.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24"
                >
                  {props?.financetext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray400"
                  >
                    {props?.jobsavailabletext3}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_blue_gray_900.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 w-full">
              <Img
                className="h-12 w-12"
                src="images/img_computer.svg"
                alt="computer"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24"
                >
                  {props?.technologytext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray400"
                  >
                    {props?.jobsavailabletext4}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_blue_gray_900.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 w-full">
              <Img className="h-12 w-12" src="images/img_user.svg" alt="user" />
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24"
                >
                  {props?.engineeringtext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray400"
                  >
                    {props?.jobsavailabletext5}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_blue_gray_900.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 w-full">
              <Img
                className="h-12 w-12"
                src="images/img_icon_48x48.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24"
                >
                  {props?.businesstext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray400"
                  >
                    {props?.jobsavailabletext6}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_blue_gray_900.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-8 sm:px-5 w-full">
              <Img
                className="h-12 w-12"
                src="images/img_icon_blue_gray_900.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24"
                >
                  {props?.humanresourcetext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray400"
                  >
                    {props?.jobsavailabletext7}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft_blue_gray_900.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C11LandingPageColumnexplorebycategoOne.defaultProps = {
  explorebycategorytext: (
    <Text
      className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
      size="txtClashDisplayVariableSemiBold48"
    >
      <span className="text-blue_gray-900 font-clashdisplayvariable text-left font-semibold">
        Explore by{" "}
      </span>
      <span className="text-blue-500 font-clashdisplayvariable text-left font-semibold">
        category
      </span>
    </Text>
  ),
  showalljobstext: "Show all jobs",
  designtext: "Design",
  jobsavailabletext: "235 jobs available",
  salestext: "Sales",
  jobsavailabletext1: "756 jobs available",
  marketingtext: "Marketing",
  jobsavailabletext2: "140 jobs available",
  financetext: "Finance",
  jobsavailabletext3: "325 jobs available",
  technologytext: "Technology",
  jobsavailabletext4: "436 jobs available",
  engineeringtext: "Engineering",
  jobsavailabletext5: "542 jobs available",
  businesstext: "Business",
  jobsavailabletext6: "211 jobs available",
  humanresourcetext: "Human Resource",
  jobsavailabletext7: "346 jobs available",
};

export default C11LandingPageColumnexplorebycategoOne;
