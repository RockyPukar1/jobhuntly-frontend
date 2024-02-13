import React from "react";

import { Img, Text } from "components";

const C310DashboardCompanyApplicantsTableViewTopnav = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-center justify-start w-auto">
          <Img
            className="h-10 w-10"
            src="images/img_arrowdown.svg"
            alt="arrowdown"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtClashDisplayVariableSemiBold24"
            >
              {props?.socialmediaassistanttext}
            </Text>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtEpilogueRegular20Bluegray900"
              >
                {props?.designtext}
              </Text>
              <div className="bg-blue_gray-900 h-1 rounded-[50%] w-1"></div>
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtEpilogueRegular20Bluegray900"
              >
                {props?.fulltimetext}
              </Text>
              <div className="bg-blue_gray-900 h-1 rounded-[50%] w-1"></div>
              {props?.hiredtext}
            </div>
          </div>
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

C310DashboardCompanyApplicantsTableViewTopnav.defaultProps = {
  socialmediaassistanttext: "Social Media Assistant",
  designtext: "Design",
  fulltimetext: "Full-Time",
  hiredtext: (
    <Text
      className="text-blue_gray-900 text-xl w-auto"
      size="txtEpilogueRegular20Bluegray900"
    >
      <span className="text-blue_gray-900 font-epilogue text-left font-normal">
        4 /{" "}
      </span>
      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
        11 Hired
      </span>
    </Text>
  ),
  moreactiontext: "More Action",
};

export default C310DashboardCompanyApplicantsTableViewTopnav;
