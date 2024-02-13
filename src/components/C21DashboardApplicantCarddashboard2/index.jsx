import React from "react";

import { Img, List, Text } from "components";

const C21DashboardApplicantCarddashboard2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="mt-[5px] text-blue_gray-900 text-center text-xl"
          size="txtEpilogueSemiBold20"
        >
          {props?.jobsappliedstatOne}
        </Text>
        <div className="flex flex-row gap-6 items-center justify-start w-auto">
          <Img
            className="h-[152px] w-[152px]"
            src="images/img_graph.svg"
            alt="graph"
          />
          <List
            className="flex flex-col gap-2 items-start w-auto"
            orientation="vertical"
          >
            <div className="flex flex-row gap-4 items-center justify-start my-0 w-auto">
              <div className="bg-indigo-A700 h-5 rounded w-5"></div>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-[34px]"
                  size="txtEpilogueBold18"
                >
                  {props?.sixty}
                </Text>
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.unsuitable}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start my-0 w-auto">
              <div className="bg-indigo-50_01 h-5 rounded w-5"></div>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-lg w-[34px]"
                  size="txtEpilogueBold18"
                >
                  {props?.forty}
                </Text>
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.interviewed}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-row gap-2 items-center justify-end w-auto">
          <Text
            className="text-base text-indigo-A700 w-auto"
            size="txtEpilogueSemiBold16IndigoA700"
          >
            {props?.viewallapplicatOne}
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
        </div>
      </div>
    </>
  );
};

C21DashboardApplicantCarddashboard2.defaultProps = {
  jobsappliedstatOne: "Jobs Applied Status",
  sixty: "60%",
  unsuitable: "Unsuitable",
  forty: "40%",
  interviewed: "Interviewed",
  viewallapplicatOne: "View All Applications",
};

export default C21DashboardApplicantCarddashboard2;
