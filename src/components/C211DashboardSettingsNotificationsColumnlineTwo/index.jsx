import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C211DashboardSettingsNotificationsColumnlineTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-lg w-40"
            size="txtEpilogueSemiBold18Bluegray900"
          >
            {props?.basicinformatioOne}
          </Text>
          <Text
            className="text-base text-blue_gray-700 w-auto"
            size="txtEpilogueRegular16Bluegray700"
          >
            {props?.thisisnotificatOne}
          </Text>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-start w-full">
          <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.notifications}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-700"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.customizeyourprOne}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <List
              className="flex flex-col gap-4 items-center w-full"
              orientation="vertical"
            >
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-6">
                  <Button
                    className="border border-indigo-A700 border-solid flex h-6 items-center justify-center rounded w-6"
                    color="indigo_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img src="images/img_checkmark.svg" alt="checkmark" />
                  </Button>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-[99px]"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.applications}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-700"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.thesearenotificOne}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-6">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-[38px]"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.jobs}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-700"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.thesearenotificone1}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-6">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-lg w-[169px]"
                    size="txtEpilogueMedium18Bluegray900"
                  >
                    {props?.recommendations}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-700"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.thesearenotificone2}
                  </Text>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-bold font-epilogue min-w-[155px] text-base text-center"
              shape="square"
              color="indigo_A700"
              size="xl"
              variant="fill"
            >
              {props?.updateemail}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

C211DashboardSettingsNotificationsColumnlineTwo.defaultProps = {
  basicinformatioOne: "Basic Information",
  thisisnotificatOne:
    "This is notifications preferences that you can update anytime.",
  notifications: "Notifications",
  customizeyourprOne: "Customize your preferred notification settings",
  applications: "Applications",
  thesearenotificOne:
    "These are notifications for jobs that you have applied to",
  jobs: "Jobs",
  thesearenotificone1:
    "These are notifications for job openings that suit your profile",
  recommendations: "Recommendations",
  thesearenotificone2:
    "These are notifications for personalized recommendations from our recruiters",
  updateemail: "Update Email",
};

export default C211DashboardSettingsNotificationsColumnlineTwo;
