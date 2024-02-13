import React from "react";

import { Img, Text } from "components";

const C35DashboardCompanyApplicantProfileTopnav = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-center justify-start w-auto">
          <Img
            className="h-10 w-10"
            src="images/img_arrowdown.svg"
            alt="arrowdown"
          />
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
            size="txtClashDisplayVariableSemiBold24"
          >
            {props?.applicantdetailstext}
          </Text>
        </div>
        <div className="border border-indigo-100 border-solid flex flex-row gap-2.5 items-center justify-center px-4 py-3 w-auto">
          <Img
            className="h-5 w-5"
            src="images/img_arrowdown_indigo_a700_20x20.svg"
            alt="arrowdown_One"
          />
          <Text
            className="text-base text-center text-indigo-A700 w-auto"
            size="txtEpilogueBold16"
          >
            {props?.moreactiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

C35DashboardCompanyApplicantProfileTopnav.defaultProps = {
  applicantdetailstext: "Applicant Details",
  moreactiontext: "More Action",
};

export default C35DashboardCompanyApplicantProfileTopnav;
