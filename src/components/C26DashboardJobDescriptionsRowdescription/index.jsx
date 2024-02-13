import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C26DashboardJobDescriptionsRowdescription = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[815px] w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtClashDisplayVariableSemiBold24"
            >
              {props?.descriptiontext}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[815px] md:max-w-full text-base text-blue_gray-700"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.descriptiontextone}
            </Text>
          </div>
          <List
            className="flex flex-col gap-[39px] items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.responsibilitiestext}
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.communityengagementtext}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_One"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.focusonsocialmediatext}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Two"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.marketingandstrategysupporttext}
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Three"
                  />
                  <Text
                    className="flex-1 text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.stayontopoftrendstext}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Four"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.engagewithonlinecommunitiestext}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.whoyouaretext}
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.yougetenergyfrompeopletext}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_One"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.youhaveasenseforbeautifulspacestext}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Two"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.youareaconfidentofficemanagertext}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Three"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.youaredetailorientedandcreativetext}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Four"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.youareagrowthmarketertext}
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtClashDisplayVariableSemiBold24"
            >
              {props?.nicetohavestext}
            </Text>
            <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
              <div className="flex flex-row gap-2 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_teal_300.svg"
                  alt="icon_Five"
                />
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.fluentinenglishtext}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_teal_300.svg"
                  alt="icon_Six"
                />
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.projectmanagementskillstext}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_teal_300.svg"
                  alt="icon_Seven"
                />
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.copyeditingskillstext}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start w-full">
          <div className="flex flex-col gap-[23px] items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
              size="txtClashDisplayVariableSemiBold24"
            >
              {props?.aboutthisroletext}
            </Text>
            <div className="bg-gray-50 flex flex-col gap-2 items-start justify-start p-4 w-full">
              {props?.p5appliedoften}
              <Img
                className="h-2 w-full"
                src="images/img_progressbar.svg"
                alt="progressbar"
              />
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.applybefore}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.applybeforetext}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.jobpostedon}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.jobpostedontext}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.jobtype}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.jobtypetext}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.salary}
              </Text>
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtEpilogueSemiBold16"
              >
                {props?.salarytext}
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtClashDisplayVariableSemiBold24"
            >
              {props?.categories}
            </Text>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                shape="round"
                color="yellow_900_19"
                size="md"
                variant="fill"
              >
                {props?.marketingcategory}
              </Button>
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                shape="round"
                color="teal_300_19"
                size="md"
                variant="fill"
              >
                {props?.designcategory}
              </Button>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col items-center justify-start w-4/5 md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.requiredskills}
              </Text>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[189px] mt-[22px] text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.projectmanagementskill}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-between mt-2 w-full">
                <Button
                  className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[117px] text-base text-center"
                  shape="square"
                  color="gray_50"
                  size="md"
                  variant="fill"
                >
                  {props?.copywritingskill}
                </Button>
                <Button
                  className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[79px] text-base text-center"
                  shape="square"
                  color="gray_50"
                  size="md"
                  variant="fill"
                >
                  {props?.englishskill}
                </Button>
              </div>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[205px] mt-2 text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.socialmediamarketingskill}
              </Button>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[120px] mt-2 text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.copyeditingskill}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C26DashboardJobDescriptionsRowdescription.defaultProps = {
  descriptiontext: "Description",
  descriptiontextone:
    "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.",
  responsibilitiestext: "Responsibilities",
  communityengagementtext:
    "Community engagement to ensure that is supported and actively represented online",
  focusonsocialmediatext:
    "Focus on social media content development and publication",
  marketingandstrategysupporttext: "Marketing and strategy support",
  stayontopoftrendstext:
    "Stay on top of trends on social media platforms, and suggest content ideas to the team",
  engagewithonlinecommunitiestext: "Engage with online communities",
  whoyouaretext: "Who You Are",
  yougetenergyfrompeopletext:
    "You get energy from people and building the ideal work environment",
  youhaveasenseforbeautifulspacestext:
    "You have a sense for beautiful spaces and office experiences",
  youareaconfidentofficemanagertext:
    "You are a confident office manager, ready for added responsibilities",
  youaredetailorientedandcreativetext: (
    <>You&#39;re detail-oriented and creative</>
  ),
  youareagrowthmarketertext: (
    <>You&#39;re a growth marketer and know how to run campaigns</>
  ),
  nicetohavestext: "Nice-To-Haves",
  fluentinenglishtext: "Fluent in English",
  projectmanagementskillstext: "Project management skills",
  copyeditingskillstext: "Copy editing skills",
  aboutthisroletext: "About this role",
  p5appliedoften: (
    <Text
      className="text-base text-blue_gray-900 text-center w-auto"
      size="txtEpilogueSemiBold16Bluegray900"
    >
      <span className="text-blue_gray-900 font-epilogue font-semibold">
        5 applied
      </span>
      <span className="text-blue_gray-900 font-epilogue font-semibold"> </span>
      <span className="text-blue_gray-400 font-epilogue font-normal">
        of 10 capacity
      </span>
    </Text>
  ),
  applybefore: "Apply Before",
  applybeforetext: "July 31, 2021",
  jobpostedon: "Job Posted On",
  jobpostedontext: "July 1, 2021",
  jobtype: "Job Type",
  jobtypetext: "Full-Time",
  salary: "Salary",
  salarytext: "$75k-$85k USD",
  categories: "Categories",
  marketingcategory: "Marketing",
  designcategory: "Design",
  requiredskills: "Required Skills",
  projectmanagementskill: "Project Management",
  copywritingskill: "Copywriting",
  englishskill: "English",
  socialmediamarketingskill: "Social Media Marketing",
  copyeditingskill: "Copy Editing",
};

export default C26DashboardJobDescriptionsRowdescription;
