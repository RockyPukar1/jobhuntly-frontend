import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const C34DashboardCompanyAllApplicantsRowtotalapplicantsOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
          size="txtClashDisplayVariableSemiBold24"
        >
          {props?.totalapplicants}
        </Text>
        <div className="flex md:flex-col flex-row gap-4 items-center justify-center w-auto md:w-full">
          <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
            <Input
              name="input"
              placeholder="Search Applicants"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid flex w-[74%] sm:w-full"
              prefix={
                <Img
                  className="h-6 mr-4 my-auto"
                  src="images/img_rewind_blue_gray_200.svg"
                  alt="rewind"
                />
              }
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
            <Button
              className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[103px]"
              leftIcon={
                <Img
                  className="h-6 mr-2"
                  src="images/img_icon_20.svg"
                  alt="Icon"
                />
              }
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <div className="!text-blue_gray-900 font-inter font-medium text-base text-left">
                {props?.filterbutton}
              </div>
            </Button>
          </div>
          <Line className="bg-gray-900_63 h-8 md:h-px md:w-full w-px" />
          <div className="bg-indigo-50_01 flex flex-row items-start justify-start p-1 w-auto">
            <Button
              className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[129px] text-base text-center"
              shape="square"
              color="indigo_50_01"
              size="md"
              variant="fill"
            >
              {props?.pipelineviewbutton}
            </Button>
            <Button
              className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[109px] text-base text-center"
              shape="square"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.tableviewbutton}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

C34DashboardCompanyAllApplicantsRowtotalapplicantsOne.defaultProps = {
  totalapplicants: "Total Applicants : 19",
  filterbutton: "Filter",
  pipelineviewbutton: "Pipeline View",
  tableviewbutton: "Table View",
};

export default C34DashboardCompanyAllApplicantsRowtotalapplicantsOne;
