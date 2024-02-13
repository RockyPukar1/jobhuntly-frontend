import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C213DashboardNotificationsColumnnotifications = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[201px] items-start justify-between w-auto sm:w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtEpilogueSemiBold20"
          >
            {props?.notifications}
          </Text>
          <Text
            className="text-base text-indigo-A700 text-right w-auto"
            size="txtEpilogueMedium16IndigoA700"
          >
            {props?.markallasread}
          </Text>
        </div>
        <Line className="bg-indigo-50 h-px w-full" />
        <div className="flex flex-col gap-4 items-start justify-center w-auto sm:w-full">
          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_avatar.png"
              alt="avatar_One"
            />
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              {props?.janmayerinvitedOne}
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold text-center text-sm w-[78px]"
                shape="round"
                color="yellow_700"
                size="md"
                variant="outline"
              >
                {props?.new}
              </Button>
              <Text
                className="text-base text-blue_gray-200 w-auto"
                size="txtEpilogueRegular16Bluegray200"
              >
                {props?.timeFour}
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
            <div className="flex flex-col h-12 items-center justify-start w-12">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_michaeldammez.png"
                alt="michaeldammez"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              {props?.janaaliciafrom}
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold text-center text-sm w-[108px]"
                shape="round"
                color="teal_300"
                size="md"
                variant="outline"
              >
                {props?.shortlisted}
              </Button>
              <Text
                className="text-base text-blue_gray-200 w-auto"
                size="txtEpilogueRegular16Bluegray200"
              >
                {props?.durationOne}
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col h-12 items-center justify-start w-12">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_sarahbrownttd.png"
                alt="sarahbrownttd"
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
              {props?.allywalesfrom}
              <div className="bg-gray-50_01 flex flex-col items-start justify-start rounded w-full">
                <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-[95%] md:w-full">
                  <Line className="bg-indigo-A700 sm:h-1.5 h-[209px] rounded-bl rounded-tl w-1.5 sm:w-full" />
                  <div className="flex flex-col items-start justify-start w-[94%] sm:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtEpilogueSemiBold20"
                      >
                        {props?.interviewjake}
                      </Text>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.socialmediamanaOne}
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[18px] grid grid-cols-2 justify-start mt-2.5 w-auto"
                      orientation="horizontal"
                    >
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon_blue_gray_400_20x20.svg"
                          alt="icon"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-400 w-auto"
                            size="txtEpilogueMedium16Bluegray400"
                          >
                            {props?.date}
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900 w-[134px]"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            {props?.mon20july2021}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-400 w-auto"
                            size="txtEpilogueMedium16Bluegray400"
                          >
                            {props?.time}
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900 w-[124px]"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            {props?.timeOne}
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-row gap-3 items-center justify-start mt-[15px] w-auto">
                      <div className="bg-indigo-A700_75 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_kevinkeithiql_32x32.png"
                          alt="kevinkeithiql"
                        />
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-900 w-[69px]"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          {props?.jakegyllOne}
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400 w-auto"
                          size="txtEpilogueRegular16Bluegray400"
                        >
                          {props?.email}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-base text-blue_gray-200 w-auto"
                  size="txtEpilogueRegular16Bluegray200"
                >
                  {props?.date1}
                </Text>
                <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-base text-blue_gray-200 w-auto"
                  size="txtEpilogueRegular16Bluegray200"
                >
                  {props?.timeFive}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C213DashboardNotificationsColumnnotifications.defaultProps = {
  notifications: "Notifications",
  markallasread: "Mark all as read",
  janmayerinvitedOne: (
    <Text
      className="text-base text-blue_gray-900 w-full"
      size="txtEpilogueSemiBold16Bluegray900"
    >
      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
        Jan Mayer{" "}
      </span>
      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
        invited you to interview with Nomad
      </span>
    </Text>
  ),
  new: "New",
  timeFour: "12 mins ago",
  janaaliciafrom: (
    <Text
      className="leading-[160.00%] max-w-[402px] md:max-w-full text-base text-blue_gray-900"
      size="txtEpilogueSemiBold16Bluegray900"
    >
      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
        Jana Alicia
      </span>
      <span className="text-gray-900_b2 font-epilogue text-left font-normal">
        {" "}
      </span>
      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
        from Udacity updated your job applications status
      </span>
    </Text>
  ),
  shortlisted: "Shortlisted",
  durationOne: "3 days ago",
  allywalesfrom: (
    <Text
      className="leading-[160.00%] max-w-[334px] md:max-w-full text-base text-blue_gray-900"
      size="txtEpilogueRegular16Bluegray900"
    >
      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
        Ally Wales
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-normal">
        {" "}
      </span>
      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
        from Digital Ocean sent you an interview invitation
      </span>
    </Text>
  ),
  interviewjake: "Interview - Jake Gyll",
  socialmediamanaOne: "Social Media Manager Role",
  date: "Date",
  mon20july2021: "Mon, 20 July 2021",
  time: "Time",
  timeOne: "12 PM - 12:30 PM",
  jakegyllOne: "Jake Gyll",
  email: "jakegyll@email.com",
  date1: "14 July 2021",
  timeFive: "3:26 PM",
};

export default C213DashboardNotificationsColumnnotifications;
