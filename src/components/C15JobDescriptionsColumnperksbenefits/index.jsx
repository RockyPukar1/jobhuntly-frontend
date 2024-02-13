import React from "react";

import { Img, List, Text } from "components";

const C15JobDescriptionsColumnperksbenefits = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
            size="txtClashDisplayVariableSemiBold32"
          >
            {props?.titletext}
          </Text>
          <Text
            className="text-base text-blue_gray-700 w-auto"
            size="txtEpilogueRegular16Bluegray700"
          >
            {props?.descriptiontext}
          </Text>
        </div>
        <List
          className="flex flex-col gap-6 items-start w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 md:flex-col flex-row gap-8 items-start justify-start my-0 w-full">
            <div className="flex flex-1 flex-col gap-6 items-start justify-center rounded w-full">
              <Img
                className="h-12 w-12"
                src="images/img_icon_4.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  {props?.benefittitle1}
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[274px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.benefitdescription1}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-center rounded w-full">
              <Img
                className="h-12 w-12"
                src="images/img_icon_5.svg"
                alt="icon_One"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-full"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  {props?.benefittitle2}
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[274px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.benefitdescription2}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-center rounded w-full">
              <Img
                className="h-12 w-12"
                src="images/img_upload.svg"
                alt="upload"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-full"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  {props?.benefittitle3}
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[274px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.benefitdescription3}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-center rounded w-full">
              <Img
                className="h-12 w-12"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  {props?.benefittitle4}
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[274px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.benefitdescription4}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row gap-8 items-start justify-start max-w-[886px] my-0 w-full">
            <div className="flex flex-1 flex-col gap-6 items-start justify-center rounded w-full">
              <Img
                className="h-12 w-12"
                src="images/img_settings.svg"
                alt="settings"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  {props?.benefittitle5}
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[274px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.benefitdescription5}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-center rounded w-full">
              <Img
                className="h-12 w-12"
                src="images/img_icon_6.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-full"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  {props?.benefittitle6}
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[274px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.benefitdescription6}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-center rounded w-full">
              <Img
                className="h-12 w-12"
                src="images/img_icon_7.svg"
                alt="icon_One"
              />
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  {props?.benefittitle7}
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[274px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.benefitdescription7}
                </Text>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

C15JobDescriptionsColumnperksbenefits.defaultProps = {
  titletext: "Perks & Benefits",
  descriptiontext: "This job comes with several perks and benefits",
  benefittitle1: "Full Healthcare",
  benefitdescription1:
    "We believe in thriving communities and that starts with our team being happy and healthy.",
  benefittitle2: "Unlimited Vacation",
  benefitdescription2:
    "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
  benefittitle3: "Skill Development",
  benefitdescription3: (
    <>
      We believe in always learning and leveling up our skills. Whether it&#39;s
      a conference or online course.
    </>
  ),
  benefittitle4: "Team Summits",
  benefitdescription4:
    "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
  benefittitle5: "Remote Working",
  benefitdescription5:
    "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
  benefittitle6: "Commuter Benefits",
  benefitdescription6:
    "We’re grateful for all the time and energy each team member puts into getting to work every day.",
  benefittitle7: "We give back.",
  benefitdescription7:
    "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ",
};

export default C15JobDescriptionsColumnperksbenefits;
