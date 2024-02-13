import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C315DashboardCompanyPostAJobSteppers = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-row gap-4 items-start justify-start w-auto">
          <Button
            className="flex h-14 items-center justify-center rounded-[50%] w-14"
            shape="circle"
            color="indigo_A700"
            size="xl"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_icon_white_a700_36x36.svg"
              alt="icon"
            />
          </Button>
          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
            <Text
              className="text-base text-indigo-A700 w-auto"
              size="txtEpilogueRegular16IndigoA700"
            >
              {props?.step1text}
            </Text>
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtEpilogueSemiBold18Bluegray900"
            >
              {props?.step1subtext}
            </Text>
          </div>
        </div>
        <Line className="self-center rotate-[-90deg] bg-gray-300 w-[1%] flex flex-col" />
        <div className="flex flex-row gap-4 items-start justify-start w-auto">
          <Button
            className="flex h-14 items-center justify-center rounded-[50%] w-14"
            shape="circle"
            color="indigo_50_01"
            size="xl"
            variant="fill"
          >
            <Img className="h-6" src="images/img_icon_28.svg" alt="icon" />
          </Button>
          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-200 w-auto"
              size="txtEpilogueRegular16Bluegray200"
            >
              {props?.step2text}
            </Text>
            <Text
              className="text-blue_gray-400 text-lg w-auto"
              size="txtEpilogueSemiBold18Bluegray400"
            >
              {props?.step2subtext}
            </Text>
          </div>
        </div>
        <Line className="self-center rotate-[-90deg] bg-gray-300 w-[1%] flex flex-col" />
        <div className="flex flex-row gap-4 items-start justify-start w-auto">
          <Button
            className="flex h-14 items-center justify-center rounded-[50%] w-14"
            shape="circle"
            color="indigo_50_01"
            size="xl"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_icon_blue_gray_400_56x56.svg"
              alt="icon"
            />
          </Button>
          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-200 w-auto"
              size="txtEpilogueRegular16Bluegray200"
            >
              {props?.step3text}
            </Text>
            <Text
              className="text-blue_gray-400 text-lg w-auto"
              size="txtEpilogueSemiBold18Bluegray400"
            >
              {props?.step3subtext}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

C315DashboardCompanyPostAJobSteppers.defaultProps = {
  step1text: "Step 1/3",
  step1subtext: "Job Information",
  step2text: "Step 2/3",
  step2subtext: "Job Description",
  step3text: "Step 3/3",
  step3subtext: "Perks & Benefit",
};

export default C315DashboardCompanyPostAJobSteppers;
