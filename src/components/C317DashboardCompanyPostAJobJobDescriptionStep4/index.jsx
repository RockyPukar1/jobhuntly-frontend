import React from "react";

import { Button, Img, Line, Text } from "components";

const C317DashboardCompanyPostAJobJobDescriptionStep4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start">
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtEpilogueSemiBold18Bluegray900"
            >
              {props?.basicinformatioOne}
            </Text>
            <Text
              className="text-base text-blue_gray-900_99"
              size="txtEpilogueRegular16Bluegray90099"
            >
              {props?.topperks}
            </Text>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[118px] items-start justify-between w-auto md:w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-[151px]"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.perksandbenefits}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.encouragemorepeople}
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[142px]"
                leftIcon={
                  <Img
                    className="h-4 mt-px mr-2.5"
                    src="images/img_icon_indigo_a700_40x40.svg"
                    alt="Icon"
                  />
                }
                shape="square"
                color="indigo_100"
                size="lg"
                variant="outline"
              >
                <div className="font-bold font-epilogue text-center text-sm">
                  {props?.addbenefit}
                </div>
              </Button>
              <div className="gap-4 sm:gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-center p-4 rounded w-full">
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_icon_4.svg"
                      alt="icon"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_blue_gray_900_24x24.svg"
                      alt="icon_One"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-center w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtClashDisplayVariableSemiBold20"
                    >
                      {props?.fullhealthcare}
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[242px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.webelieveinthriving}
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-center p-4 rounded w-full">
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_icon_5.svg"
                      alt="icon"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_blue_gray_900_24x24.svg"
                      alt="icon_One"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-center w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtClashDisplayVariableSemiBold20"
                    >
                      {props?.unlimitedvacation}
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[242px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.webelieveinflexibility}
                    </Text>
                  </div>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-center p-4 rounded w-full">
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_blue_gray_900_24x24.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-center w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtClashDisplayVariableSemiBold20"
                    >
                      {props?.skilldevelopment}
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[242px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.alwayslearning}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
        </div>
        <Button
          className="cursor-pointer font-bold font-epilogue min-w-[163px] text-center text-lg"
          shape="square"
          color="indigo_A700"
          size="2xl"
          variant="fill"
        >
          {props?.doareview}
        </Button>
      </div>
    </>
  );
};

C317DashboardCompanyPostAJobJobDescriptionStep4.defaultProps = {
  basicinformatioOne: "Basic Information",
  topperks: "List out your top perks and benefits.",
  perksandbenefits: "Perks and Benefits",
  encouragemorepeople:
    "Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees",
  addbenefit: "Add Benefit",
  fullhealthcare: "Full Healthcare",
  webelieveinthriving:
    "We believe in thriving communities and that starts with our team being happy and healthy.",
  unlimitedvacation: "Unlimited Vacation",
  webelieveinflexibility:
    "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
  skilldevelopment: "Skill Development",
  alwayslearning: (
    <>
      We believe in always learning and leveling up our skills. Whether it&#39;s
      a conference or online course.
    </>
  ),
  doareview: "Do a Review",
};

export default C317DashboardCompanyPostAJobJobDescriptionStep4;
