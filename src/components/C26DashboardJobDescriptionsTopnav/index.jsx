import React from "react";

import { Button, Img, Text } from "components";

const C26DashboardJobDescriptionsTopnav = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-start w-auto">
          <Img
            className="h-10 w-10"
            src="images/img_arrowdown.svg"
            alt="arrowdown"
          />
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
            size="txtClashDisplayVariableSemiBold32"
          >
            {props?.jobdescriptiontext}
          </Text>
        </div>
        <div className="flex flex-row gap-8 items-center justify-center w-auto">
          <Button
            className="cursor-pointer font-bold font-epilogue text-base text-center w-[213px]"
            shape="square"
            color="indigo_100"
            size="xl"
            variant="outline"
          >
            {props?.backtohomepagebutton}
          </Button>
          <div className="flex flex-col h-10 items-center justify-start w-10">
            <Button
              className="flex h-10 items-center justify-center rounded-[50%] w-10"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_icon_blue_gray_900_40x40.svg"
                alt="icon_Three"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

C26DashboardJobDescriptionsTopnav.defaultProps = {
  jobdescriptiontext: "Job Description",
  backtohomepagebutton: "Back to homepage",
};

export default C26DashboardJobDescriptionsTopnav;
