import React from "react";

import { Button, Img, Line, Text } from "components";

const C26DashboardJobDescriptionsHeader5desktop = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-50 flex flex-col items-center justify-start p-10 sm:px-5 w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-5xl mt-5 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start p-1 w-1/5 sm:w-full">
                <Img
                  className="h-[82px] md:h-auto object-cover w-full"
                  src="images/img_stripelogodp4f5yykm.png"
                  alt="stripelogodp4fFive"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                  size="txtClashDisplayVariableSemiBold32"
                >
                  {props?.socialmediaassiOne}
                </Text>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Text
                    className="text-blue_gray-700 text-xl w-auto"
                    size="txtEpilogueRegular20Bluegray700"
                  >
                    {props?.nomad}
                  </Text>
                  <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-blue_gray-700 text-xl w-auto"
                    size="txtEpilogueRegular20Bluegray700"
                  >
                    {props?.country}
                  </Text>
                  <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-blue_gray-700 text-xl w-auto"
                    size="txtEpilogueRegular20Bluegray700"
                  >
                    {props?.fulltime}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[30px] items-center justify-center w-auto">
              <Img
                className="h-[33px] w-8"
                src="images/img_icon_blue_gray_400.svg"
                alt="icon_Four"
              />
              <Line className="bg-gray-300 h-[58px] w-px" />
              <Button
                className="cursor-pointer font-bold font-epilogue min-w-[164px] text-center text-lg"
                shape="square"
                color="indigo_A700"
                size="2xl"
                variant="fill"
              >
                {props?.apply}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C26DashboardJobDescriptionsHeader5desktop.defaultProps = {
  socialmediaassiOne: "Social Media Assistant",
  nomad: "Stripe",
  country: "Paris, France",
  fulltime: "Full-Time",
  apply: "Apply",
};

export default C26DashboardJobDescriptionsHeader5desktop;
