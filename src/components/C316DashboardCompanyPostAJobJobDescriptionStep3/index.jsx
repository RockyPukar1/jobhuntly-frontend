import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C316DashboardCompanyPostAJobJobDescriptionStep3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3.5 items-start justify-start">
          <Text
            className="text-blue_gray-900 text-lg"
            size="txtEpilogueSemiBold18Bluegray900"
          >
            {props?.details}
          </Text>
          <Text
            className="text-base text-blue_gray-400"
            size="txtEpilogueRegular16Bluegray400"
          >
            {props?.description}
          </Text>
        </div>
        <List
          className="flex flex-col gap-6 items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-between w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-[137px]"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.jobdescriptionsOne}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.timezone}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col h-[152px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-300 p-4 w-full">
                  <Text
                    className="text-base text-blue_gray-200 w-auto"
                    size="txtEpilogueRegular16Bluegray200"
                  >
                    {props?.jobdescription}
                  </Text>
                </div>
                <div className="bg-white-A700 gap-3 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-start outline outline-[0.5px] outline-gray-300 pl-4 py-3 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_400_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_10.svg"
                    alt="icon_One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_11.svg"
                    alt="icon_Two"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_share.svg"
                    alt="share"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_12.svg"
                    alt="icon_Three"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowup_blue_gray_400.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between pt-1 w-full">
                  <Text
                    className="text-base text-blue_gray-200 w-auto"
                    size="txtEpilogueRegular16Bluegray200"
                  >
                    {props?.maximum500charaone}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 text-right w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.p0500}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="self-center h-px bg-gray-300 w-full" />
          <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-between w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-[127px]"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.responsibilitieOne}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.outlinethecore}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col h-[152px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-300 p-4 w-full">
                  <Text
                    className="text-base text-blue_gray-200 w-auto"
                    size="txtEpilogueRegular16Bluegray200"
                  >
                    {props?.responsibilities}
                  </Text>
                </div>
                <div className="bg-white-A700 gap-3 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-start outline outline-[0.5px] outline-gray-300 pl-4 py-3 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_400_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_10.svg"
                    alt="icon_One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_11.svg"
                    alt="icon_Two"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_share.svg"
                    alt="share"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_12.svg"
                    alt="icon_Three"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowup_blue_gray_400.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between pt-1 w-full">
                  <Text
                    className="text-base text-blue_gray-200 w-auto"
                    size="txtEpilogueRegular16Bluegray200"
                  >
                    {props?.maximum500charaone1}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 text-right w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.p05001}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="self-center h-px bg-gray-300 w-full" />
          <div className="flex flex-1 sm:flex-col flex-row md:gap-10 gap-[117px] items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-[100px]"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.whoyouare}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.addyourpreferreOne}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="bg-white-A700 flex flex-col h-[152px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-300 p-4 w-full">
                  <Text
                    className="text-base text-blue_gray-200 w-auto"
                    size="txtEpilogueRegular16Bluegray200"
                  >
                    {props?.qualifications}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row gap-3 items-center justify-start outline outline-[0.5px] outline-gray-300 pl-4 py-3 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_400_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_10.svg"
                    alt="icon_One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_11.svg"
                    alt="icon_Two"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_share.svg"
                    alt="share"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_12.svg"
                    alt="icon_Three"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowup_blue_gray_400.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="flex flex-col md:gap-10 items-start justify-between pt-1 w-full">
                  <Text
                    className="text-base text-blue_gray-200 w-auto"
                    size="txtEpilogueRegular16Bluegray200"
                  >
                    {props?.maximum500charaone2}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 text-right w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.p05002}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="self-center h-px bg-gray-300 w-full" />
          <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-[116px]"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.nicetohaves}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.addnicetohave}
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-col items-start justify-start w-[414px] sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="bg-white-A700 flex flex-col h-[152px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-300 p-4 w-full">
                  <Text
                    className="text-base text-blue_gray-200 w-auto"
                    size="txtEpilogueRegular16Bluegray200"
                  >
                    {props?.nicetohaves1}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row gap-3 items-center justify-start outline outline-[0.5px] outline-gray-300 pl-4 py-3 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_400_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_10.svg"
                    alt="icon_One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_11.svg"
                    alt="icon_Two"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_share.svg"
                    alt="share"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_12.svg"
                    alt="icon_Three"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowup_blue_gray_400.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="flex flex-col md:gap-10 items-start justify-between pt-1 w-full">
                  <Text
                    className="text-base text-blue_gray-200 w-auto"
                    size="txtEpilogueRegular16Bluegray200"
                  >
                    {props?.maximum500charaone3}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 text-right w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.p05003}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
        <Button
          className="cursor-pointer font-bold font-epilogue min-w-[146px] text-center text-lg"
          shape="square"
          color="indigo_A700"
          size="2xl"
          variant="fill"
        >
          {props?.nextStep}
        </Button>
      </div>
    </>
  );
};

C316DashboardCompanyPostAJobJobDescriptionStep3.defaultProps = {
  details: "Details",
  description:
    "Add the description of the job, responsibilities, who you are, and nice-to-haves.",
  jobdescriptionsOne: "Job Descriptions",
  timezone: "Job titles must be describe one position",
  jobdescription: "Enter job description",
  maximum500charaone: "Maximum 500 characters",
  p0500: "0 / 500",
  responsibilitieOne: "Responsibilities",
  outlinethecore: "Outline the core responsibilities of the position",
  responsibilities: "Enter job responsibilities",
  maximum500charaone1: "Maximum 500 characters",
  p05001: "0 / 500",
  whoyouare: "Who You Are",
  addyourpreferreOne: "Add your preferred candidates qualifications",
  qualifications: "Enter qualifications",
  maximum500charaone2: "Maximum 500 characters",
  p05002: "0 / 500",
  nicetohaves: "Nice-To-Haves",
  addnicetohave:
    "Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply",
  nicetohaves1: "Enter nice-to-haves",
  maximum500charaone3: "Maximum 500 characters",
  p05003: "0 / 500",
  nextStep: "Next Step",
};

export default C316DashboardCompanyPostAJobJobDescriptionStep3;
