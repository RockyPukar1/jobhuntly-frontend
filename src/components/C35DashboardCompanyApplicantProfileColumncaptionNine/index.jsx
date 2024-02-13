import React from "react";

import { Button, Line, List, Text } from "components";

const C35DashboardCompanyApplicantProfileColumncaptionNine = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[718px] pt-4 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-10 items-start justify-start max-w-[718px] sm:pl-5 pl-6 shadow-bs1 w-full">
            <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.captionnine}
              </Text>
              <Line className="bg-indigo-A700 h-1 w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captionten}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captioneleven}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captiontwelve}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-4 items-start justify-start max-w-2xl w-full">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtEpilogueSemiBold18Bluegray900"
            >
              {props?.personalinfo}
            </Text>
            <List
              className="sm:flex-col flex-row md:gap-6 grid sm:grid-cols-1 grid-cols-2 justify-between w-[456px] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.fullname}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.jeromebell}
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.dateofbirth}
                  </Text>
                  {props?.language}
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.gender}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.genderone}
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.language1}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.englishfrench}
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.address}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[232px] md:max-w-full text-base text-blue_gray-900"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p4517washington}
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col gap-4 items-start justify-start max-w-2xl w-full">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtEpilogueSemiBold18Bluegray900"
            >
              {props?.professionalinfOne}
            </Text>
            <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.aboutme}
              </Text>
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start max-w-2xl w-full">
                <Text
                  className="leading-[160.00%] max-w-2xl md:max-w-full text-base text-blue_gray-900"
                  size="txtEpilogueMedium16Bluegray900"
                >
                  {props?.description}
                </Text>
                <Text
                  className="leading-[160.00%] max-w-2xl md:max-w-full text-base text-blue_gray-900"
                  size="txtEpilogueMedium16Bluegray900"
                >
                  {props?.descriptionone}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.currentjob}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.productdesignerthree}
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.highestqualificOne}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.bachelorsinengione}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.experienceinyeaOne}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.durationone}
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.skillset}
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-1 items-start justify-start w-auto sm:w-full">
                    <Button
                      className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[189px] text-base text-center"
                      shape="square"
                      color="gray_50"
                      size="md"
                      variant="fill"
                    >
                      {props?.projectManagement}
                    </Button>
                    <Button
                      className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[117px] text-base text-center"
                      shape="square"
                      color="gray_50"
                      size="md"
                      variant="fill"
                    >
                      {props?.copywriting}
                    </Button>
                    <Button
                      className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[79px] text-base text-center"
                      shape="square"
                      color="gray_50"
                      size="md"
                      variant="fill"
                    >
                      {props?.english}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C35DashboardCompanyApplicantProfileColumncaptionNine.defaultProps = {
  captionnine: "Applicant Profile",
  captionten: "Resume",
  captioneleven: "Hiring Progress",
  captiontwelve: "Interview Schedule",
  personalinfo: "Personal Info",
  fullname: "Full Name",
  jeromebell: "Jerome Bell",
  dateofbirth: "Date of Birth",
  language: (
    <Text
      className="text-base text-blue_gray-900 w-auto"
      size="txtEpilogueMedium16Bluegray900"
    >
      <span className="text-blue_gray-900 font-epilogue text-left font-medium">
        March 23, 1995{" "}
      </span>
      <span className="text-blue_gray-200 font-epilogue text-left font-medium">
        (26 y.o)
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-medium">
        {" "}
      </span>
    </Text>
  ),
  gender: "Gender",
  genderone: "Male",
  language1: "Language",
  englishfrench: "English, French, Bahasa",
  address: "Address",
  p4517washington: "4517 Washington Ave. Manchester, Kentucky 39495",
  professionalinfOne: "Professional Info",
  aboutme: "About Me",
  description:
    "I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.",
  descriptionone:
    "For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.",
  currentjob: "Current Job",
  productdesignerthree: "Product Designer",
  highestqualificOne: "Highest Qualification Held",
  bachelorsinengione: "Bachelors in Engineering",
  experienceinyeaOne: "Experience in Years",
  durationone: "4 Years",
  skillset: "Skill set",
  projectManagement: "Project Management",
  copywriting: "Copywriting",
  english: "English",
};

export default C35DashboardCompanyApplicantProfileColumncaptionNine;
