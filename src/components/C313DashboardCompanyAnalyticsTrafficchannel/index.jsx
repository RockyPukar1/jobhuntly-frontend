import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const C313DashboardCompanyAnalyticsTrafficchannel = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-900 text-xl"
          size="txtClashDisplayVariableSemiBold20"
        >
          {props?.trafficchannel}
        </Text>
        <div className="md:h-[199px] h-[202px] md:ml-[0] ml-[39px] mt-2 relative w-[74%]">
          <div className="absolute bottom-[0] h-[191px] left-[0] w-[191px]">
            <div className="absolute border-[17px] border-indigo-50_01 border-solid h-[179px] inset-[0] justify-center m-auto rounded-[89px] w-[179px]"></div>
            <div className="!w-[191px] absolute border-solid h-[191px] inset-[0] justify-center m-auto overflow-visible">
              <CircularProgressbar
                className="!w-[191px] absolute border-solid h-[191px] inset-[0] justify-center m-auto overflow-visible"
                value={23}
                strokeWidth={15}
                styles={{
                  trail: { strokeWidth: 15, stroke: "" },
                  path: {
                    strokeLinecap: "square",
                    height: "100%",
                    transformOrigin: "center",
                    transform: "rotate(173deg)",
                  },
                }}
              ></CircularProgressbar>
            </div>
            <div className="!w-[191px] absolute border-solid h-[191px] inset-[0] justify-center m-auto overflow-visible">
              <CircularProgressbar
                className="!w-[191px] absolute border-solid h-[191px] inset-[0] justify-center m-auto overflow-visible"
                value={21}
                strokeWidth={15}
                styles={{
                  trail: { strokeWidth: 15, stroke: "" },
                  path: {
                    strokeLinecap: "square",
                    height: "100%",
                    transformOrigin: "center",
                    transform: "rotate(255deg)",
                  },
                }}
              ></CircularProgressbar>
            </div>
            <div className="!w-[191px] absolute border-solid h-[191px] inset-[0] justify-center m-auto overflow-visible">
              <CircularProgressbar
                className="!w-[191px] absolute border-solid h-[191px] inset-[0] justify-center m-auto overflow-visible"
                value={8}
                strokeWidth={15}
                styles={{
                  trail: { strokeWidth: 15, stroke: "" },
                  path: {
                    strokeLinecap: "square",
                    height: "100%",
                    transformOrigin: "center",
                    transform: "rotate(-31deg)",
                  },
                }}
              ></CircularProgressbar>
            </div>
          </div>
          <div className="absolute md:h-[29px] h-[33px] right-[0] top-[0] w-[27%]">
            <Img
              className="absolute bottom-[0] h-4 left-[12%] w-4"
              src="images/img_lightbulb.svg"
              alt="lightbulb_One"
            />
            <Button
              className="!text-white-A700 absolute cursor-pointer font-epilogue inset-x-[0] min-w-[59px] mx-auto text-base text-center top-[0]"
              shape="square"
              color="blue_gray_700"
              size="sm"
              variant="fill"
            >
              {props?.twohundredfortythreeOne}
            </Button>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-[47px] grid grid-cols-2 justify-start mt-4 w-auto"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <div className="bg-yellow-700 h-5 rounded w-5"></div>
              {props?.directfortyeight}
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <div className="bg-deep_purple-A200 h-5 rounded w-5"></div>
              {props?.organictwentyfour}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <div className="bg-blue-500 h-5 rounded w-5"></div>
              {props?.socialtwentythree}
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <div className="bg-teal-300 h-5 rounded w-5"></div>
              {props?.otherfive}
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

C313DashboardCompanyAnalyticsTrafficchannel.defaultProps = {
  trafficchannel: "Traffic channel",
  twohundredfortythreeOne: "243",
  directfortyeight: (
    <Text
      className="text-base text-blue_gray-400 w-auto"
      size="txtEpilogueRegular16Bluegray400"
    >
      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
        Direct :{" "}
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
        48%
      </span>
    </Text>
  ),
  organictwentyfour: (
    <Text
      className="text-base text-blue_gray-400 w-auto"
      size="txtEpilogueRegular16Bluegray400"
    >
      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
        Organic :{" "}
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
        24%
      </span>
    </Text>
  ),
  socialtwentythree: (
    <Text
      className="text-base text-blue_gray-400 w-auto"
      size="txtEpilogueRegular16Bluegray400"
    >
      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
        Social :{" "}
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
        23%
      </span>
    </Text>
  ),
  otherfive: (
    <Text
      className="text-base text-blue_gray-400 w-auto"
      size="txtEpilogueRegular16Bluegray400"
    >
      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
        Other :{" "}
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
        5%
      </span>
    </Text>
  ),
};

export default C313DashboardCompanyAnalyticsTrafficchannel;
