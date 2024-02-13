import React from "react";

import { Img, Text } from "components";

const C21DashboardApplicantCarddashboard1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[22px] items-start justify-start mt-[3px] w-full">
          <Text
            className="text-blue_gray-900 text-xl"
            size="txtEpilogueSemiBold20"
          >
            {props?.interviewedtext}
          </Text>
          <div className="flex flex-row items-start justify-between w-full">
            <Text
              className="mb-3.5 md:text-5xl text-7xl text-blue_gray-900"
              size="txtEpilogueSemiBold72"
            >
              {props?.eighteentext}
            </Text>
            <Img
              className="h-[68px] mt-5"
              src="images/img_icon_68x88.svg"
              alt="icon_Five"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C21DashboardApplicantCarddashboard1.defaultProps = {
  interviewedtext: "Interviewed",
  eighteentext: "18",
};

export default C21DashboardApplicantCarddashboard1;
