import React from "react";

import { Img, Text } from "components";

const C23DashboardApplicationsHistoryAnnouncements = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[58px] md:mt-0 mt-2"
          src="images/img_thumbsup.svg"
          alt="thumbsup"
        />
        <div className="flex flex-col items-start justify-start ml-6 md:ml-[0] md:mt-0 my-[9px]">
          <Text className="text-indigo-A700 text-lg" size="txtInterSemiBold18">
            {props?.newfeaturetext}
          </Text>
          <Text
            className="leading-[160.00%] mt-1 text-base text-blue_gray-400 w-full"
            size="txtInterRegular16Bluegray400"
          >
            {props?.descriptiontext}
          </Text>
        </div>
        <Img
          className="h-6 md:ml-[0] ml-[217px] w-6"
          src="images/img_icon_blue_gray_900_24x24.svg"
          alt="icon_Four"
        />
      </div>
    </>
  );
};

C23DashboardApplicationsHistoryAnnouncements.defaultProps = {
  newfeaturetext: "New Feature",
  descriptiontext:
    "You can request a follow-up 7 days after applying for a job if the application status is in review. Only one follow-up is allowed per job.",
};

export default C23DashboardApplicationsHistoryAnnouncements;
