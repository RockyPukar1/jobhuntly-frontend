import React from "react";

import { Button, Img, Text } from "components";

const C11LandingPageColumnfeaturedjobs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-2.5 items-end justify-between max-w-[1192px] w-full">
          {props?.featuredjobs}
          <div className="flex flex-row gap-4 items-center justify-end w-auto">
            <Text
              className="text-base text-center text-indigo-A700 w-auto"
              size="txtEpilogueSemiBold16IndigoA700"
            >
              {props?.showalljobsOne}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft_Two"
            />
          </div>
        </div>
        <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start min-h-[auto] w-auto md:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col h-12 items-center justify-start w-12">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_bvboaeet400x400.png"
                  alt="bvboaeet400x400"
                />
              </div>
              <Button
                className="cursor-pointer font-epilogue min-w-[91px] text-base text-center"
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.fullTime}
              </Button>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.emailmarketing}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.revolut}
                </Text>
                <div className="bg-blue_gray-700_75 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.country}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[226px] md:max-w-full text-base text-blue_gray-400"
              size="txtInterRegular16Bluegray400"
            >
              {props?.revolutislookinOne}
            </Text>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[104px] rounded-[15px] text-center text-sm"
                shape="round"
                color="yellow_900_19"
                size="md"
                variant="fill"
              >
                {props?.marketing}
              </Button>
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[80px] rounded-[15px] text-center text-sm"
                shape="round"
                color="teal_300_19"
                size="md"
                variant="fill"
              >
                {props?.design}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Img
                className="h-12 w-12"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="cursor-pointer font-epilogue min-w-[91px] text-base text-center"
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.fulltime1}
              </Button>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.emailmarketing1}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.revolut1}
                </Text>
                <div className="bg-blue_gray-700_75 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.madridspain}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[226px] md:max-w-full text-base text-blue_gray-400"
              size="txtInterRegular16Bluegray400"
            >
              {props?.revolutislookin}
            </Text>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[80px] rounded-[15px] text-center text-sm"
                shape="round"
                color="teal_300_19"
                size="md"
                variant="fill"
              >
                {props?.design1}
              </Button>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[95px] rounded-[15px] text-center text-sm"
                shape="round"
                color="indigo_A700_19"
                size="md"
                variant="fill"
              >
                {props?.business}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col h-12 items-center justify-start w-12">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_fisx9qyy400x400.png"
                  alt="fisx9qyy400x400"
                />
              </div>
              <Button
                className="cursor-pointer font-epilogue min-w-[91px] text-base text-center"
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.fulltime2}
              </Button>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.emailmarketing2}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.revolut2}
                </Text>
                <div className="bg-blue_gray-700_75 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.country1}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[226px] md:max-w-full text-base text-blue_gray-400"
              size="txtInterRegular16Bluegray400"
            >
              {props?.revolutislookin1}
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[104px] rounded-[15px] text-center text-sm"
                shape="round"
                color="yellow_900_19"
                size="md"
                variant="fill"
              >
                {props?.marketing1}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col h-12 items-center justify-start w-12">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_quvcta52400x400.png"
                  alt="quvcta52400x400"
                />
              </div>
              <Button
                className="cursor-pointer font-epilogue min-w-[91px] text-base text-center"
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.fulltime3}
              </Button>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.emailmarketing3}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.revolut3}
                </Text>
                <div className="bg-blue_gray-700_75 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.country2}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[226px] md:max-w-full text-base text-blue_gray-400"
              size="txtInterRegular16Bluegray400"
            >
              {props?.revolutislookin2}
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[80px] rounded-[15px] text-center text-sm"
                shape="round"
                color="teal_300_19"
                size="md"
                variant="fill"
              >
                {props?.design2}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col h-12 items-center justify-start w-12">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_s93hu9p3400x400.png"
                  alt="s93hu9p3400x400"
                />
              </div>
              <Button
                className="cursor-pointer font-epilogue min-w-[91px] text-base text-center"
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.fulltime4}
              </Button>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.emailmarketing4}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.revolut4}
                </Text>
                <div className="bg-blue_gray-700_75 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.madridspain1}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[226px] md:max-w-full text-base text-blue_gray-400"
              size="txtInterRegular16Bluegray400"
            >
              {props?.revolutislookin3}
            </Text>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[104px] rounded-[15px] text-center text-sm"
                shape="round"
                color="yellow_900_19"
                size="md"
                variant="fill"
              >
                {props?.marketing2}
              </Button>
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[80px] rounded-[15px] text-center text-sm"
                shape="round"
                color="teal_300_19"
                size="md"
                variant="fill"
              >
                {props?.design3}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col h-12 items-center justify-start w-12">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_v6ghzad400x400.png"
                  alt="v6ghzad400x400"
                />
              </div>
              <Button
                className="cursor-pointer font-epilogue min-w-[91px] text-base text-center"
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.fulltime5}
              </Button>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.emailmarketing5}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.revolut5}
                </Text>
                <div className="bg-blue_gray-700_75 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.country3}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[226px] md:max-w-full text-base text-blue_gray-400"
              size="txtInterRegular16Bluegray400"
            >
              {props?.revolutislookin4}
            </Text>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[80px] rounded-[15px] text-center text-sm"
                shape="round"
                color="teal_300_19"
                size="md"
                variant="fill"
              >
                {props?.design4}
              </Button>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[95px] rounded-[15px] text-center text-sm"
                shape="round"
                color="indigo_A700_19"
                size="md"
                variant="fill"
              >
                {props?.business1}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col h-12 items-center justify-start w-12">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_godaddylogo01.png"
                  alt="godaddylogoOne"
                />
              </div>
              <Button
                className="cursor-pointer font-epilogue min-w-[91px] text-base text-center"
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.fulltime6}
              </Button>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.emailmarketing6}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.revolut6}
                </Text>
                <div className="bg-blue_gray-700_75 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.country4}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[226px] md:max-w-full text-base text-blue_gray-400"
              size="txtInterRegular16Bluegray400"
            >
              {props?.revolutislookin5}
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[104px] rounded-[15px] text-center text-sm"
                shape="round"
                color="yellow_900_19"
                size="md"
                variant="fill"
              >
                {props?.marketing3}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col h-12 items-center justify-start w-12">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_btnfm47p400x400.png"
                  alt="btnfm47p400x400"
                />
              </div>
              <Button
                className="cursor-pointer font-epilogue min-w-[91px] text-base text-center"
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.fulltime7}
              </Button>
            </div>
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.emailmarketing7}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.revolut7}
                </Text>
                <div className="bg-blue_gray-700_75 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.madridspain2}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[226px] md:max-w-full text-base text-blue_gray-400"
              size="txtInterRegular16Bluegray400"
            >
              {props?.revolutislookin6}
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="!text-deep_orange-400 cursor-pointer font-epilogue font-semibold min-w-[114px] rounded-[19px] text-center text-sm"
                shape="round"
                color="deep_orange_400_19"
                size="md"
                variant="fill"
              >
                {props?.technology}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C11LandingPageColumnfeaturedjobs.defaultProps = {
  featuredjobs: (
    <Text
      className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
      size="txtClashDisplayVariableSemiBold48"
    >
      <span className="text-blue_gray-900 font-clashdisplayvariable text-left font-semibold">
        Featured{" "}
      </span>
      <span className="text-blue-500 font-clashdisplayvariable text-left font-semibold">
        jobs
      </span>
    </Text>
  ),
  showalljobsOne: "Show all jobs",
  fullTime: "Full Time",
  emailmarketing: "Email Marketing",
  revolut: "Revolut",
  country: "Madrid, Spain",
  revolutislookinOne:
    "Revolut is looking for Email Marketing to help team ma ...",
  marketing: "Marketing",
  design: "Design",
  fulltime1: "Full Time",
  emailmarketing1: "Brand Designer",
  revolut1: "Dropbox",
  madridspain: "San Fransisco, US",
  revolutislookin:
    "Dropbox is looking for Brand Designer to help the team t ...",
  design1: "Design",
  business: "Business",
  fulltime2: "Full Time",
  emailmarketing2: "Email Marketing",
  revolut2: "Pitch",
  country1: "Berlin, Germany",
  revolutislookin1:
    "Pitch is looking for Customer Manager to join marketing t ...",
  marketing1: "Marketing",
  fulltime3: "Full Time",
  emailmarketing3: "Visual Designer",
  revolut3: "Blinklist",
  country2: "Granada, Spain",
  revolutislookin2:
    "Blinkist is looking for Visual Designer to help team desi ...",
  design2: "Design",
  fulltime4: "Full Time",
  emailmarketing4: "Product Designer",
  revolut4: "ClassPass",
  madridspain1: "Manchester, UK",
  revolutislookin3: "ClassPass is looking for Product Designer to help us...",
  marketing2: "Marketing",
  design3: "Design",
  fulltime5: "Full Time",
  emailmarketing5: "Lead Designer",
  revolut5: "Canva",
  country3: "Ontario, Canada",
  revolutislookin4: "Canva is looking for Lead Engineer to help develop n ...",
  design4: "Design",
  business1: "Business",
  fulltime6: "Full Time",
  emailmarketing6: "Brand Strategist",
  revolut6: "GoDaddy",
  country4: "Marseille, France",
  revolutislookin5:
    "GoDaddy is looking for Brand Strategist to join the team...",
  marketing3: "Marketing",
  fulltime7: "Full Time",
  emailmarketing7: "Data Analyst",
  revolut7: "Twitter",
  madridspain2: "San Diego, US",
  revolutislookin6: "Twitter is looking for Data Analyst to help team desi ...",
  technology: "Technology",
};

export default C11LandingPageColumnfeaturedjobs;
