import React from "react";

import { Line, Text } from "components";

type C23DashboardApplicationsHistoryTabsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "allfortyfive"
  | "inreviewthirtyfour"
  | "interviewingeighteen"
  | "assessmentfive"
  | "offeredtwo"
  | "hiredone"
> &
  Partial<{
    allfortyfive: JSX.Element | string;
    inreviewthirtyfour: string;
    interviewingeighteen: string;
    assessmentfive: string;
    offeredtwo: string;
    hiredone: string;
  }>;

const C23DashboardApplicationsHistoryTabs: React.FC<
  C23DashboardApplicationsHistoryTabsProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[7px] items-center justify-start w-[78px]">
          {props?.allfortyfive}
          <Line className="bg-indigo-A700 h-1 w-full" />
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueSemiBold16Bluegray400"
          >
            {props?.inreviewthirtyfour}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueSemiBold16Bluegray400"
          >
            {props?.interviewingeighteen}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueSemiBold16Bluegray400"
          >
            {props?.assessmentfive}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueSemiBold16Bluegray400"
          >
            {props?.offeredtwo}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueSemiBold16Bluegray400"
          >
            {props?.hiredone}
          </Text>
        </div>
      </div>
    </>
  );
};

C23DashboardApplicationsHistoryTabs.defaultProps = {
  allfortyfive: (
    <Text
      className="text-base text-blue_gray-900 w-auto"
      size="txtEpilogueSemiBold16Bluegray900"
    >
      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
        All{" "}
      </span>
      <span className="text-blue_gray-400 font-epilogue text-left font-semibold">
        (
      </span>
      <span className="text-indigo-A700 font-epilogue text-left font-semibold">
        45
      </span>
      <span className="text-blue_gray-400 font-epilogue text-left font-semibold">
        )
      </span>
    </Text>
  ),
  inreviewthirtyfour: "In Review (34)",
  interviewingeighteen: "Interviewing (18)",
  assessmentfive: "Assessment (5)",
  offeredtwo: "Offered (2)",
  hiredone: "Hired (1)",
};

export default C23DashboardApplicationsHistoryTabs;
