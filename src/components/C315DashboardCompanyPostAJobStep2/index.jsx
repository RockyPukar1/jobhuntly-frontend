import React from "react";

import { Button, Img, Input, Line, SeekBar, Text } from "components";

const C315DashboardCompanyPostAJobStep2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-lg w-40"
            size="txtEpilogueSemiBold18Bluegray900"
          >
            {props?.basicinformatioOne}
          </Text>
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueRegular16Bluegray400"
          >
            {props?.thisinformationOne}
          </Text>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[118px] items-start justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[69px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.jobtitle}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.timezone}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[430px] sm:w-full">
            <Input
              name="input"
              placeholder="e.g. Software Engineer"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
            <Text
              className="text-blue_gray-400 text-sm w-auto"
              size="txtEpilogueRegular14"
            >
              {props?.thisishelpertex}
            </Text>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex sm:flex-col flex-row md:gap-10 gap-[118px] items-start justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[163px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.typeofemploymenOne}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.youcanselectmulOne}
            </Text>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.captionEight}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.captionNine}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.captionTen}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.captionEleven}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.captionTwelve}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[118px] items-start justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[50px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.salary}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.pleasespecifythOne}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-col gap-[22px] items-center justify-start w-auto sm:w-full">
            <div className="flex flex-row gap-20 items-center justify-center w-auto sm:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-2 items-center justify-center pl-2 pr-4 py-3 w-auto">
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Text
                    className="mb-[3px] text-base text-center text-gray-900_87"
                    size="txtEpilogueSemiBold16Gray90087"
                  >
                    {props?.salarystart}
                  </Text>
                </div>
                <Line className="bg-blue_gray-200 h-6 w-px" />
                <Text
                  className="text-base text-blue_gray-900 text-center w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.p5000}
                </Text>
              </div>
              <Text
                className="text-base text-blue_gray-400 text-center"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.to}
              </Text>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-2 items-center justify-center pl-2 pr-4 py-3 w-auto">
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Text
                    className="mb-[3px] text-base text-center text-gray-900_87"
                    size="txtEpilogueSemiBold16Gray90087"
                  >
                    {props?.salaryend}
                  </Text>
                </div>
                <Line className="bg-blue_gray-200 h-6 w-px" />
                <Text
                  className="text-base text-blue_gray-900 text-center w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.p5000one}
                </Text>
              </div>
            </div>
            <SeekBar
              inputValue={[0, 0]}
              trackColors={["#4640de63", "#4640de", "#4640de63"]}
              thumbClassName="h-6 bg-indigo-A700 w-6 flex justify-center items-center rounded-[50%] outline-none"
              className="flex h-6 rounded-[3px] w-full"
              trackClassName="h-1.5 flex rounded-[3px] w-full"
            />{" "}
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[89px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.categories}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.youcanselectmulThree}
            </Text>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.label}
            </Text>
            <Input
              name="dropdown"
              placeholder="Select Job Categories"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid flex w-[314px]"
              suffix={
                <Img
                  className="h-5 ml-[35px] my-auto"
                  src="images/img_arrowdown_blue_gray_900_20x20.svg"
                  alt="arrow_down"
                />
              }
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[117px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.requiredskills}
            </Text>
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.addrequiredskilOne}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[126px]"
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
                {props?.addskills}
              </div>
            </Button>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
              <div className="bg-gray-50 flex flex-row gap-2 items-center justify-center pl-3 pr-1 py-1 w-auto">
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueRegular16IndigoA700"
                >
                  {props?.captionThirteen}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_20x20.svg"
                  alt="icon_Six"
                />
              </div>
              <div className="bg-gray-50 flex flex-row gap-2 items-center justify-center pl-3 pr-1 py-1 w-auto">
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueRegular16IndigoA700"
                >
                  {props?.captionFourteen}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_20x20.svg"
                  alt="icon_Seven"
                />
              </div>
              <div className="bg-gray-50 flex flex-row gap-2 items-center justify-center pl-3 pr-1 py-1 w-auto">
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueRegular16IndigoA700"
                >
                  {props?.captionFifteen}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_20x20.svg"
                  alt="icon_Eight"
                />
              </div>
            </div>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <Button
          className="cursor-pointer font-bold font-epilogue min-w-[146px] text-center text-lg"
          shape="square"
          color="indigo_A700"
          size="2xl"
          variant="fill"
        >
          {props?.nextStep}
        </Button>
      </div>
    </>
  );
};

C315DashboardCompanyPostAJobStep2.defaultProps = {
  basicinformatioOne: "Basic Information",
  thisinformationOne: "This information will be displayed publicly",
  jobtitle: "Job Title",
  timezone: "Job titles must be describe one position",
  thisishelpertex: "At least 80 characters",
  typeofemploymenOne: "Type of Employment",
  youcanselectmulOne: "You can select multiple type of employment",
  captionEight: "Full-Time",
  captionNine: "Part-Time",
  captionTen: "Remote",
  captionEleven: "Internship",
  captionTwelve: "Contract",
  salary: "Salary",
  pleasespecifythOne:
    "Please specify the estimated salary range for the role. *You can leave this blank",
  salarystart: "$",
  p5000: "5,000",
  to: "to",
  salaryend: "$",
  p5000one: "22,000",
  categories: "Categories",
  youcanselectmulThree: "You can select multiple job categories",
  label: "Select Job Categories",
  requiredskills: "Required Skills",
  addrequiredskilOne: "Add required skills for the job",
  addskills: "Add Skills",
  captionThirteen: "Graphic Design",
  captionFourteen: "Communication",
  captionFifteen: "Illustrator",
  nextStep: "Next Step",
};

export default C315DashboardCompanyPostAJobStep2;
