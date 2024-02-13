import React from "react";

import { Button, Img, Line, SelectBox, Text } from "components";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C24DashboardFindJobsListSearchbox = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1104px] p-6 sm:px-5 w-full">
            <div className="flex flex-1 sm:flex-col flex-row gap-4 h-full items-center justify-start px-4 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_rewind.svg"
                alt="rewind"
              />
              <div className="flex flex-1 flex-col gap-2.5 items-start justify-start pt-2.5 w-full">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.jobtitleorkeyword}
                </Text>
                <Line className="bg-gray-300 h-px w-full" />
              </div>
            </div>
            <Line className="bg-gray-900_63 h-14 md:h-px md:w-full w-px" />
            <div className="flex flex-1 sm:flex-col flex-row gap-4 h-full items-center justify-start pl-2 sm:pr-5 pr-6 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_linkedin.svg"
                alt="linkedin"
              />
              <SelectBox
                className="!text-gray-900_ab flex-1 sm:flex-1 font-epilogue text-base text-left w-[91%] sm:w-full"
                placeholderClassName="!text-gray-900_ab"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_blue_gray_900.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="country"
                options={countryOptionsList}
                isSearchable={false}
                placeholder="Florence, Italy"
                color="gray_300"
                size="sm"
                variant="underline"
              />
            </div>
            <Button
              className="cursor-pointer font-bold font-epilogue text-base text-center w-[113px]"
              shape="square"
              color="indigo_A700"
              size="xl"
              variant="fill"
            >
              {props?.searchbutton}
            </Button>
          </div>
          <Text
            className="text-base text-blue_gray-700_99 w-auto"
            size="txtEpilogueRegular16Bluegray70099"
          >
            {props?.popularuidesignOne}
          </Text>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
      </div>
    </>
  );
};

C24DashboardFindJobsListSearchbox.defaultProps = {
  jobtitleorkeyword: "Job title or keyword",
  searchbutton: "Search",
  popularuidesignOne: "Popular : UI Designer, UX Researcher, Android, Admin",
};

export default C24DashboardFindJobsListSearchbox;
