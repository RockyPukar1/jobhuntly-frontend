import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const C212DashboardHelpRowtypeyourquestioOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[138px] items-start justify-start p-8 sm:px-5 shadow-bs3 w-auto sm:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-auto">
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueMedium16Bluegray400"
              >
                {props?.typeyourquestioOne}
              </Text>
              <Input
                name="input"
                placeholder="Search"
                className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                prefix={
                  <Img
                    className="h-6 mr-4 my-auto"
                    src="images/img_rewind_blue_gray_700.svg"
                    alt="rewind"
                  />
                }
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueSemiBold16IndigoA700"
                >
                  {props?.gettingstartedtext}
                </Text>
                <Line className="bg-gray-300 h-px w-full" />
              </div>
              <Input
                name="groupNinetySeven"
                placeholder="My Profile"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue font-medium p-0 sm:pr-5 text-base text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="gray_300"
                size="2xl"
                variant="underline"
              ></Input>
              <Input
                name="groupNinetyNine"
                placeholder="Applying for a job"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue font-medium p-0 sm:pr-5 text-base text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="gray_300"
                size="2xl"
                variant="underline"
              ></Input>
              <Input
                name="group101"
                placeholder="Job Search Tips"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue font-medium p-0 sm:pr-5 text-base text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="gray_300"
                size="2xl"
                variant="underline"
              ></Input>
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueMedium16Bluegray700"
              >
                {props?.jobalertstext}
              </Text>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[194px] items-center justify-end p-[23px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_contactus.svg')" }}
          >
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[120.00%] text-white-A700 text-xl w-full"
                size="txtEpilogueSemiBold20WhiteA700"
              >
                {props?.didntfindwhattext}
              </Text>
              <Text
                className="mt-2.5 text-base text-gray-50"
                size="txtEpilogueRegular16Gray50"
              >
                {props?.contactcustomerservicetext}
              </Text>
              <Button
                className="!text-indigo-A700 cursor-pointer font-bold font-epilogue min-w-[122px] ml-0.5 md:ml-[0] mt-[29px] text-center text-sm"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                {props?.contactusbutton}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start p-8 sm:px-5 w-auto md:w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Text
              className="text-base text-blue_gray-400 text-right w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.sortby}
            </Text>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.mostrelevant}
              </Text>
              <div className="flex flex-col h-4 items-center justify-start w-4">
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_indigo_a700.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <List
            className="flex flex-col gap-6 items-start w-auto"
            orientation="vertical"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start my-0 p-6 sm:px-5 w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between max-w-2xl w-full">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.whatismyapplicationstitle}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_16.svg"
                    alt="icon"
                  />
                </div>
                <Text
                  className="leading-[160.00%] max-w-2xl md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.whatismyapplicationsdescription}
                </Text>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.wasthisarticlehelpfultext}
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[83px]"
                  leftIcon={
                    <Img
                      className="h-4 mt-px mr-2.5"
                      src="images/img_offer.svg"
                      alt="offer"
                    />
                  }
                  shape="square"
                  color="indigo_100"
                  size="lg"
                  variant="outline"
                >
                  <div className="font-bold font-epilogue text-center text-sm">
                    {props?.yesbutton}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[78px]"
                  leftIcon={
                    <Img
                      className="h-4 mt-px mr-2.5"
                      src="images/img_icon.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="indigo_100"
                  size="lg"
                  variant="outline"
                >
                  <div className="font-bold font-epilogue text-center text-sm">
                    {props?.nobutton}
                  </div>
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start my-0 p-6 sm:px-5 w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-2xl w-full">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.accessapplicationshistorytitle}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_16.svg"
                    alt="icon"
                  />
                </div>
                <Text
                  className="leading-[160.00%] max-w-2xl md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.accessapplicationshistorydescription}
                </Text>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.wasthisarticlehelpfultext1}
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[83px]"
                  leftIcon={
                    <Img
                      className="h-4 mt-px mr-2.5"
                      src="images/img_offer.svg"
                      alt="offer"
                    />
                  }
                  shape="square"
                  color="indigo_100"
                  size="lg"
                  variant="outline"
                >
                  <div className="font-bold font-epilogue text-center text-sm">
                    {props?.yesbutton1}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[78px]"
                  leftIcon={
                    <Img
                      className="h-4 mt-px mr-2.5"
                      src="images/img_icon.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="indigo_100"
                  size="lg"
                  variant="outline"
                >
                  <div className="font-bold font-epilogue text-center text-sm">
                    {props?.nobutton1}
                  </div>
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start my-0 p-6 sm:px-5 w-auto md:w-full">
              <div className="h-36 sm:h-[205px] relative w-full">
                <div className="absolute flex flex-col gap-4 h-full inset-[0] items-center justify-start m-auto max-w-2xl w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-2xl w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtEpilogueSemiBold20"
                    >
                      {props?.notseeingjobstitle}
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_16.svg"
                      alt="icon"
                    />
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-2xl md:max-w-full text-base text-blue_gray-400"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.notseeingjobsdescription}
                  </Text>
                </div>
                <Button
                  className="absolute bottom-[15%] flex h-16 items-center justify-center right-[0] rounded-[50%] w-16"
                  shape="circle"
                  color="gray_900"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-8"
                    src="images/img_icon_white_a700_64x64.svg"
                    alt="icon_One"
                  />
                </Button>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.wasthisarticlehelpfultext2}
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[83px]"
                  leftIcon={
                    <Img
                      className="mt-[3px] mr-2.5"
                      src="images/img_icon_indigo_a700_-43x16.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="indigo_100"
                  size="sm"
                  variant="outline"
                >
                  <div className="font-bold font-epilogue text-center text-sm">
                    {props?.yesbutton2}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[78px]"
                  leftIcon={
                    <Img
                      className="mt-[3px] mr-2.5"
                      src="images/img_icon_-43x16.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="indigo_100"
                  size="sm"
                  variant="outline"
                >
                  <div className="font-bold font-epilogue text-center text-sm">
                    {props?.nobutton2}
                  </div>
                </Button>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

C212DashboardHelpRowtypeyourquestioOne.defaultProps = {
  typeyourquestioOne: "Type your question or search keyword",
  gettingstartedtext: "Getting Started",
  jobalertstext: "Job Alerts",
  didntfindwhattext: <>Didn&#39;t find what you were looking for?</>,
  contactcustomerservicetext: "Contact our customer service ",
  contactusbutton: "Contact Us",
  sortby: "Sort by:",
  mostrelevant: "Most relevant",
  whatismyapplicationstitle: "What is My Applications?",
  whatismyapplicationsdescription:
    "My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer.",
  wasthisarticlehelpfultext: "Was this article helpful?",
  yesbutton: "Yes",
  nobutton: "No",
  accessapplicationshistorytitle: "How to access my applications history",
  accessapplicationshistorydescription:
    "To access applications history, go to your My Applications page on your dashboard profile. You must be signed in to your JobHuntly account to view this page.",
  wasthisarticlehelpfultext1: "Was this article helpful?",
  yesbutton1: "Yes",
  nobutton1: "No",
  notseeingjobstitle:
    "Not seeing jobs you applied in your my application list?",
  notseeingjobsdescription: (
    <>
      Please note that we are unable to track materials submitted for jobs you
      apply to via an employer&#39;s site. As a result, these applications are
      not recorded in the My Applications section of your JobHuntly account. We
      suggest keeping a personal record of all positions you have applied to
      externally.{" "}
    </>
  ),
  wasthisarticlehelpfultext2: "Was this article helpful?",
  yesbutton2: "Yes",
  nobutton2: "No",
};

export default C212DashboardHelpRowtypeyourquestioOne;
