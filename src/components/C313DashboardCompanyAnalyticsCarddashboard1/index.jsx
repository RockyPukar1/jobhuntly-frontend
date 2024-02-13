import React from "react";

import { Img, Line, Text } from "components";

const C313DashboardCompanyAnalyticsCarddashboard1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between pt-4 sm:px-5 px-6 w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtClashDisplayVariableSemiBold20"
          >
            {props?.text}
          </Text>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-2 items-center justify-center px-4 py-3 w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown_blue_gray_900.svg"
              alt="arrowdown_Two"
            />
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtInterMedium16Bluegray900"
            >
              {props?.duration}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[393px] md:h-auto items-start justify-start sm:px-5 px-6 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start max-w-[680px] w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-700 w-[33px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.zipcode}
                  </Text>
                  <Line className="bg-gray-300 h-px w-[91%]" />
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-700 w-[33px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.zipcodeOne}
                  </Text>
                  <Line className="bg-gray-300 h-px w-[91%]" />
                </div>
                <div className="sm:h-[212px] h-[233px] md:h-[262px] relative w-full">
                  <div className="sm:h-[212px] h-[233px] md:h-[262px] m-auto w-full">
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                      <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-700 w-[33px]"
                            size="txtEpilogueRegular16Bluegray700"
                          >
                            {props?.zipcodeTwo}
                          </Text>
                          <Line className="bg-gray-300 h-px w-[91%]" />
                        </div>
                        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-700 w-[26px]"
                            size="txtEpilogueRegular16Bluegray700"
                          >
                            {props?.sevenhundredfifty}
                          </Text>
                          <Line className="bg-gray-300 h-px w-[91%]" />
                        </div>
                        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-700 w-[27px]"
                            size="txtEpilogueRegular16Bluegray700"
                          >
                            {props?.fivehundred}
                          </Text>
                          <Line className="bg-gray-300 h-px w-[91%]" />
                        </div>
                        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-700 w-[27px]"
                            size="txtEpilogueRegular16Bluegray700"
                          >
                            {props?.twohundredfifty}
                          </Text>
                          <Line className="bg-gray-300 h-px w-[91%]" />
                        </div>
                        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Text
                            className="text-base text-blue_gray-700 w-6"
                            size="txtEpilogueRegular16Bluegray700"
                          >
                            {props?.onehundred}
                          </Text>
                          <Line className="bg-gray-300 h-px w-[91%]" />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-36 left-[10%]"
                      src="images/img_vector_teal_300.svg"
                      alt="vector"
                    />
                  </div>
                  <div className="absolute flex flex-col gap-2 items-center justify-start right-[24%] top-[2%] w-[14%]">
                    <div className="md:h-[83px] h-[98px] relative w-full">
                      <div className="absolute bg-blue_gray-700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-4 top-[0] w-auto">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <div className="flex flex-row gap-2 items-center justify-center w-auto">
                            <div className="bg-teal-300 h-[9px] rounded w-[9px]"></div>
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtEpilogueRegular16WhiteA700"
                            >
                              {props?.views}
                            </Text>
                          </div>
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtEpilogueSemiBold16WhiteA700"
                          >
                            {props?.salesbreakdown}
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[22px] inset-x-[0] mx-auto w-[22px]"
                        src="images/img_lightbulb.svg"
                        alt="lightbulb"
                      />
                    </div>
                    <div className="bg-teal-300 h-2.5 outline outline-[2px] outline-white-A700 rounded-[50%] w-2.5"></div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-700 w-[9px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.zero}
                  </Text>
                  <Line className="bg-gray-300 h-px w-[91%]" />
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between md:pl-10 sm:pl-5 pl-[72px] w-full">
                <Text
                  className="text-base text-blue_gray-700 w-[41px]"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.julcounter}
                </Text>
                <Text
                  className="text-base text-blue_gray-700 w-11"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.julcounterOne}
                </Text>
                <Text
                  className="text-base text-blue_gray-700 w-[41px]"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.julcounterTwo}
                </Text>
                <Text
                  className="text-base text-blue_gray-700 w-11"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.julcounterThree}
                </Text>
                <Text
                  className="text-base text-teal-300 w-[46px]"
                  size="txtEpilogueSemiBold16Teal300"
                >
                  {props?.julcounterFour}
                </Text>
                <Text
                  className="text-base text-blue_gray-700 w-[43px]"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.julcounterFive}
                </Text>
                <Text
                  className="text-base text-blue_gray-700 w-11"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.julcounterSix}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C313DashboardCompanyAnalyticsCarddashboard1.defaultProps = {
  text: "Job Listing View stats",
  duration: "Last 7 days",
  zipcode: "1500",
  zipcodeOne: "1250",
  zipcodeTwo: "1000",
  sevenhundredfifty: "750",
  fivehundred: "500",
  twohundredfifty: "250",
  onehundred: "100",
  views: "Views",
  salesbreakdown: "243",
  zero: "0",
  julcounter: "19 Jul",
  julcounterOne: "20 Jul",
  julcounterTwo: "21 Jul",
  julcounterThree: "22 Jul",
  julcounterFour: "23 Jul",
  julcounterFive: "24 Jul",
  julcounterSix: "25 Jul",
};

export default C313DashboardCompanyAnalyticsCarddashboard1;
