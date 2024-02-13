import React from "react";

import { Button, Img, Text } from "components";

const C13BrowseCompaniesColumnrecommendedcompOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 h-[67px] md:h-auto items-start justify-start w-auto sm:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
            size="txtClashDisplayVariableSemiBold32"
          >
            {props?.recommendedcompaniestext}
          </Text>
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueRegular16Bluegray400"
          >
            {props?.basedonyourprofiletext}
          </Text>
        </div>
        <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-[328px]">
              <Img
                className="h-[88px] w-[88px]"
                src="images/img_television.svg"
                alt="television"
              />
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.jobsbutton1}
              </Button>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.nomadtext1}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[328px] md:max-w-full text-blue_gray-700 text-lg"
                size="txtEpilogueRegular18Bluegray700"
              >
                {props?.pricetext1}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[140px] text-center text-sm"
                shape="round"
                color="yellow_700"
                size="md"
                variant="outline"
              >
                {props?.businessservicebutton1}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-[328px]">
              <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                <Img
                  className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                  src="images/img_dbymbmgq400x400.png"
                  alt="dbymbmgq400x400"
                />
              </div>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.jobsbutton2}
              </Button>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.nomadtext2}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[328px] md:max-w-full text-blue_gray-700 text-lg"
                size="txtEpilogueRegular18Bluegray700"
              >
                {props?.nomadislocatedtext2}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[140px] text-center text-sm"
                shape="round"
                color="yellow_700"
                size="md"
                variant="outline"
              >
                {props?.businessservicebutton2}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-[328px]">
              <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                <Img
                  className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                  src="images/img_7tuadqi400x400_88x88.png"
                  alt="7tuadqi400x400"
                />
              </div>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.jobsbutton3}
              </Button>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.nomadtext3}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[328px] md:max-w-full text-blue_gray-700 text-lg"
                size="txtEpilogueRegular18Bluegray700"
              >
                {props?.nomadislocatedtext3}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[140px] text-center text-sm"
                shape="round"
                color="yellow_700"
                size="md"
                variant="outline"
              >
                {props?.businessservicebutton3}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-[328px]">
              <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                <Img
                  className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                  src="images/img_1m3hz0d400x400_88x88.png"
                  alt="1m3hz0d400x400"
                />
              </div>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.jobsbutton4}
              </Button>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.nomadtext4}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[328px] md:max-w-full text-blue_gray-700 text-lg"
                size="txtEpilogueRegular18Bluegray700"
              >
                {props?.nomadislocatedtext4}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[140px] text-center text-sm"
                shape="round"
                color="yellow_700"
                size="md"
                variant="outline"
              >
                {props?.businessservicebutton4}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-[328px]">
              <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                <div className="flex flex-col h-[79px] items-center justify-start w-[79px]">
                  <Img
                    className="h-[79px] md:h-auto object-cover w-[79px]"
                    src="images/img_tg7mrqk2400x400_79x79.png"
                    alt="tg7mrqk2400x400"
                  />
                </div>
              </div>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.jobsbutton5}
              </Button>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.nomadtext5}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[328px] md:max-w-full text-blue_gray-700 text-lg"
                size="txtEpilogueRegular18Bluegray700"
              >
                {props?.nomadislocatedtext5}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[140px] text-center text-sm"
                shape="round"
                color="yellow_700"
                size="md"
                variant="outline"
              >
                {props?.businessservicebutton5}
              </Button>
              <Button
                className="!text-deep_orange-400 cursor-pointer font-epilogue font-semibold min-w-[102px] text-center text-sm"
                shape="round"
                color="deep_orange_400_19"
                size="md"
                variant="fill"
              >
                {props?.technologybutton5}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-row items-start justify-between w-[328px]">
              <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_2ali5jb7400x400.png"
                  alt="2ali5jb7400x400"
                />
              </div>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.jobsbutton6}
              </Button>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.nomadtext6}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[328px] md:max-w-full text-blue_gray-700 text-lg"
                size="txtEpilogueRegular18Bluegray700"
              >
                {props?.nomadislocatedtext6}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[140px] text-center text-sm"
                shape="round"
                color="yellow_700"
                size="md"
                variant="outline"
              >
                {props?.businessservicebutton6}
              </Button>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[69px] text-center text-sm"
                shape="round"
                color="indigo_A700_19"
                size="md"
                variant="fill"
              >
                {props?.cryptobutton6}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C13BrowseCompaniesColumnrecommendedcompOne.defaultProps = {
  recommendedcompaniestext: "Recommended Companies",
  basedonyourprofiletext:
    "Based on your profile, company preferences, and recent activity",
  jobsbutton1: "3 Jobs",
  nomadtext1: "Nomad",
  pricetext1:
    "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
  businessservicebutton1: "Business Service",
  jobsbutton2: "3 Jobs",
  nomadtext2: "Discord",
  nomadislocatedtext2: (
    <>
      We&#39;d love to work with someone like you. We care about creating a
      delightful experience.
    </>
  ),
  businessservicebutton2: "Business Service",
  jobsbutton3: "3 Jobs",
  nomadtext3: "Maze",
  nomadislocatedtext3: (
    <>
      We&#39;re a passionate bunch working from all over the world to build the
      future of rapid testing together.
    </>
  ),
  businessservicebutton3: "Business Service",
  jobsbutton4: "3 Jobs",
  nomadtext4: "Udacity",
  nomadislocatedtext4:
    "Udacity is a new type of online university that teaches the actual programming skills.",
  businessservicebutton4: "Business Service",
  jobsbutton5: "3 Jobs",
  nomadtext5: "Webflow",
  nomadislocatedtext5:
    "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
  businessservicebutton5: "Business Service",
  technologybutton5: "Technology",
  jobsbutton6: "3 Jobs",
  nomadtext6: "Foundation",
  nomadislocatedtext6:
    "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
  businessservicebutton6: "Business Service",
  cryptobutton6: "Crypto",
};

export default C13BrowseCompaniesColumnrecommendedcompOne;
