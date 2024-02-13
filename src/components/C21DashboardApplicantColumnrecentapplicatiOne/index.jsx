import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C21DashboardApplicantColumnrecentapplicatiOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="ml-6 md:ml-[0] text-blue_gray-900 text-xl"
          size="txtEpilogueSemiBold20"
        >
          {props?.recentapplicatiOne}
        </Text>
        <Line className="bg-gray-300 h-px mt-[33px] w-full" />
        <List
          className="flex flex-col items-start max-w-[1056px] ml-6 md:ml-[0] mt-[23px] w-full"
          orientation="vertical"
        >
          <div className="bg-gray-50 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between p-6 sm:px-5 rounded-lg w-full">
            <div className="flex sm:flex-1 flex-row gap-4 items-center justify-start w-[446px] sm:w-full">
              <Img
                className="h-16 w-16"
                src="images/img_television.svg"
                alt="television"
              />
              <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtEpilogueBold18"
                >
                  {props?.socialmediaassiOne}
                </Text>
                <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.nomad}
                  </Text>
                  <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.country}
                  </Text>
                  <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.fulltime}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start w-[171px]">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.dateapplied}
              </Text>
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.date}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center w-[117px]">
              <div className="border border-solid border-yellow-700 flex flex-col items-center justify-center px-2.5 py-1.5 rounded-[17px] w-auto">
                {!!props?.caption ? (
                  <Text
                    className="text-sm text-yellow-700 w-auto"
                    size="txtEpilogueSemiBold14Yellow700"
                  >
                    {props?.caption}
                  </Text>
                ) : null}
              </div>
            </div>
            <Img className="h-6 w-6" src="images/img_icon_16.svg" alt="icon" />
          </div>
          <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between p-6 sm:px-5 rounded-lg w-full">
            <div className="flex sm:flex-1 flex-row gap-4 items-center justify-start w-[446px] sm:w-full">
              <div className="flex flex-col h-16 items-center justify-start w-16">
                <Img
                  className="h-16 md:h-auto rounded-[50%] w-16"
                  src="images/img_1m3hz0d400x400.png"
                  alt="1m3hz0d400x400"
                />
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtEpilogueBold18"
                >
                  {props?.socialmediaassione1}
                </Text>
                <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.nomad1}
                  </Text>
                  <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.parisfrance}
                  </Text>
                  <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.fulltime1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start w-[171px]">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.dateapplied1}
              </Text>
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.date1}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center w-[117px]">
              <Button
                className="cursor-pointer font-epilogue font-semibold min-w-[100px] text-center text-sm"
                shape="round"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.shortlisted}
              </Button>
            </div>
            <Img className="h-6 w-6" src="images/img_icon_16.svg" alt="icon" />
          </div>
          <div className="bg-gray-50 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between p-6 sm:px-5 rounded-lg w-full">
            <div className="flex sm:flex-1 flex-row gap-4 items-center justify-start w-[446px] sm:w-full">
              <Img
                className="h-16 w-16"
                src="images/img_user_deep_orange_400.svg"
                alt="user"
              />
              <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtEpilogueBold18"
                >
                  {props?.socialmediaassione2}
                </Text>
                <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.nomad2}
                  </Text>
                  <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.country1}
                  </Text>
                  <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.fulltime2}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start w-[171px]">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.dateapplied2}
              </Text>
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.date2}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center w-[117px]">
              <Button
                className="!text-deep_orange-400 cursor-pointer font-epilogue font-semibold min-w-[82px] text-center text-sm"
                shape="round"
                color="deep_orange_400"
                size="md"
                variant="outline"
              >
                {props?.declined}
              </Button>
            </div>
            <Img className="h-6 w-6" src="images/img_icon_16.svg" alt="icon" />
          </div>
        </List>
        <div className="flex flex-row gap-4 items-center justify-end md:ml-[0] ml-[419px] mt-6 w-auto">
          <Text
            className="text-base text-center text-indigo-A700 w-auto"
            size="txtEpilogueSemiBold16IndigoA700"
          >
            {props?.viewallapplicatThree}
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowleft.svg"
            alt="arrowleft_One"
          />
        </div>
      </div>
    </>
  );
};

C21DashboardApplicantColumnrecentapplicatiOne.defaultProps = {
  recentapplicatiOne: "Recent Applications History",
  socialmediaassiOne: "Social Media Assistant",
  nomad: "Nomad",
  country: "Paris, France",
  fulltime: "Full-Time",
  dateapplied: "Date Applied",
  date: "24 July 2021",
  socialmediaassione1: "Social Media Assistant",
  nomad1: "Udacity",
  parisfrance: "New York, USA",
  fulltime1: "Full-Time",
  dateapplied1: "Date Applied",
  date1: "23 July 2021",
  shortlisted: "Shortlisted",
  socialmediaassione2: "Social Media Assistant",
  nomad2: "Packer",
  country1: "Madrid, Spain",
  fulltime2: "Full-Time",
  dateapplied2: "Date Applied",
  date2: "22 July 2021",
  declined: "Declined",
  viewallapplicatThree: "View all applications history",
};

export default C21DashboardApplicantColumnrecentapplicatiOne;
