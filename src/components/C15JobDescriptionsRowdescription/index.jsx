import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C15JobDescriptionsRowdescription = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[752px] w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
              size="txtClashDisplayVariableSemiBold32"
            >
              {props?.descriptiontext}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[752px] md:max-w-full text-base text-blue_gray-700"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.descriptiononetext}
            </Text>
          </div>
          <List
            className="flex flex-col gap-[38px] items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtClashDisplayVariableSemiBold32"
              >
                {props?.responsibilitieOne}
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.communityengagetext}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_One"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.focusonsocial}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Two"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.marketingandstrOne}
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Three"
                  />
                  <Text
                    className="leading-[160.00%] max-w-[682px] md:max-w-full text-base text-blue_gray-700"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.stayontopoftrenOne}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_teal_300.svg"
                    alt="icon_Four"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.engagewithonlinOne}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtClashDisplayVariableSemiBold32"
              >
                {props?.whoyouaretext}
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
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
                    {props?.yougetenergyfromtext}
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
                    {props?.youhaveasensetext}
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
                    {props?.youareaconfidenttext}
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
                    {props?.youredetailorientedtext}
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
                    {props?.youreagrowthtext}
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
              size="txtClashDisplayVariableSemiBold32"
            >
              {props?.nicetohaves}
            </Text>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_teal_300.svg"
                  alt="icon_One"
                />
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.languagetext}
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
                  {props?.projectmanagementtext}
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
                  {props?.copyeditingtext}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start w-full">
          <div className="flex flex-col gap-[23px] items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
              size="txtClashDisplayVariableSemiBold32"
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
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
              size="txtClashDisplayVariableSemiBold32"
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
                {props?.marketingbutton}
              </Button>
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                shape="round"
                color="teal_300_19"
                size="md"
                variant="fill"
              >
                {props?.designbutton}
              </Button>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="md:ml-[0] ml-[3px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtClashDisplayVariableSemiBold32"
              >
                {props?.requiredskills}
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-between mt-3 w-full">
                <Button
                  className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[189px] text-base text-center"
                  shape="square"
                  color="gray_50"
                  size="md"
                  variant="fill"
                >
                  {props?.projectmanagementbutton}
                </Button>
                <Button
                  className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[117px] text-base text-center"
                  shape="square"
                  color="gray_50"
                  size="md"
                  variant="fill"
                >
                  {props?.copywritingbutton}
                </Button>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[94%] md:w-full">
                <Button
                  className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[205px] text-base text-center"
                  shape="square"
                  color="gray_50"
                  size="md"
                  variant="fill"
                >
                  {props?.socialmediamarketingbutton}
                </Button>
                <Button
                  className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[79px] text-base text-center"
                  shape="square"
                  color="gray_50"
                  size="md"
                  variant="fill"
                >
                  {props?.englishbutton}
                </Button>
              </div>
              <Button
                className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[120px] mt-2.5 text-base text-center"
                shape="square"
                color="gray_50"
                size="md"
                variant="fill"
              >
                {props?.copyeditingbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C15JobDescriptionsRowdescription.defaultProps = {
  descriptiontext: "Description",
  descriptiononetext:
    "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.",
  responsibilitieOne: "Responsibilities",
  communityengagetext:
    "Community engagement to ensure that is supported and actively represented online",
  focusonsocial: "Focus on social media content development and publication",
  marketingandstrOne: "Marketing and strategy support",
  stayontopoftrenOne:
    "Stay on top of trends on social media platforms, and suggest content ideas to the team",
  engagewithonlinOne: "Engage with online communities",
  whoyouaretext: "Who You Are",
  yougetenergyfromtext:
    "You get energy from people and building the ideal work environment",
  youhaveasensetext:
    "You have a sense for beautiful spaces and office experiences",
  youareaconfidenttext:
    "You are a confident office manager, ready for added responsibilities",
  youredetailorientedtext: <>You&#39;re detail-oriented and creative</>,
  youreagrowthtext: (
    <>You&#39;re a growth marketer and know how to run campaigns</>
  ),
  nicetohaves: "Nice-To-Haves",
  languagetext: "Fluent in English",
  projectmanagementtext: "Project management skills",
  copyeditingtext: "Copy editing skills",
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
  marketingbutton: "Marketing",
  designbutton: "Design",
  requiredskills: "Required Skills",
  projectmanagementbutton: "Project Management",
  copywritingbutton: "Copywriting",
  socialmediamarketingbutton: "Social Media Marketing",
  englishbutton: "English",
  copyeditingbutton: "Copy Editing",
};

export default C15JobDescriptionsRowdescription;
