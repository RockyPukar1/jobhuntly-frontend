import React from "react";

import { Button, Img, Text } from "components";

const C313DashboardCompanyAnalyticsCarddashboard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[18px] items-center justify-between w-full">
          <Text
            className="text-blue_gray-400 text-xl w-auto"
            size="txtEpilogueSemiBold20Bluegray400"
          >
            {props?.totalviews}
          </Text>
          <Button
            className="flex h-9 items-center justify-center rounded-[50%] w-9"
            shape="circle"
            color="blue_500"
            size="md"
            variant="fill"
          >
            <Img
              className="h-5"
              src="images/img_icon_white_a700_32x32.svg"
              alt="icon"
            />
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start w-auto">
          <div className="flex flex-row gap-2 items-end justify-start w-auto">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
              size="txtEpilogueSemiBold48Bluegray900"
            >
              {props?.p23564}
            </Text>
            <div className="flex flex-row items-center justify-start w-auto">
              <Text
                className="text-center text-lg text-teal-300 w-auto"
                size="txtEpilogueMedium18Teal300"
              >
                {props?.sixtyfour}
              </Text>
              <Img className="h-5 w-5" alt="icon_One" src={props?.iconOne} />
            </div>
          </div>
          <Text
            className="text-base text-blue_gray-400 text-center w-auto"
            size="txtEpilogueRegular16Bluegray400"
          >
            {props?.vslastday}
          </Text>
        </div>
      </div>
    </>
  );
};

C313DashboardCompanyAnalyticsCarddashboard.defaultProps = {
  totalviews: "Total Views",
  p23564: "23,564",
  sixtyfour: "6.4%",
  iconOne: "images/img_icon_teal_300_20x20.svg",
  vslastday: "vs last day",
};

export default C313DashboardCompanyAnalyticsCarddashboard;
