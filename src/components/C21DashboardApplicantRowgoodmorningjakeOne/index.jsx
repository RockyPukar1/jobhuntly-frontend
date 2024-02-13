import React from "react";

import { Img, Text } from "components";

const C21DashboardApplicantRowgoodmorningjakeOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
            size="txtClashDisplayVariableSemiBold24"
          >
            {props?.greetingtext}
          </Text>
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueMedium16Bluegray400"
          >
            {props?.jobapplicationstext}
          </Text>
        </div>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-4 items-center justify-between px-4 py-3 w-[180px]">
          {!!props?.datetext ? (
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtEpilogueRegular16Bluegray900"
            >
              {props?.datetext}
            </Text>
          ) : null}
          {!!props?.calendaricon ? (
            <Img
              className="h-5 w-5"
              alt="icon_Four"
              src={props?.calendaricon}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

C21DashboardApplicantRowgoodmorningjakeOne.defaultProps = {
  greetingtext: "Good morning, Jake",
  jobapplicationstext:
    "Here is what’s happening with your job search applications from July 19 - July 25.",
};

export default C21DashboardApplicantRowgoodmorningjakeOne;
