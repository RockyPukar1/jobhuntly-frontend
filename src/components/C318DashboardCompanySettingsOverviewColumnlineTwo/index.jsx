import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const dropdownThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const zipcodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C318DashboardCompanySettingsOverviewColumnlineTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-lg w-40"
            size="txtEpilogueSemiBold18Bluegray900"
          >
            {props?.basicinformationtext}
          </Text>
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueRegular16Bluegray400"
          >
            {props?.companyinformationtext}
          </Text>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[118px] items-start justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[118px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.companylogotext}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.companylogodescriptiontext}
            </Text>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[124px] w-[124px]"
              src="images/img_frame1280.svg"
              alt="companylogo_One"
            />
            <div className="bg-gray-50 border-2 border-dashed border-indigo-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[42px] py-6 rounded-lg w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-8 w-8"
                  src="images/img_icon_indigo_a700_32x32.svg"
                  alt="icon_Six"
                />
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  {props?.clicktoreplace}
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.svgpngjpgor}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[119px] items-start justify-start max-w-[1104px] w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[134px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.companydetails}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.introducecompanytext}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-[540px] sm:w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.label}
              </Text>
              <Input
                name="input"
                placeholder="Nomad"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelOne}
              </Text>
              <Input
                name="input_One"
                placeholder="Https://www.nomad.com"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelTwo}
              </Text>
              <Input
                name="country"
                placeholder="Australia"
                className="!placeholder:text-indigo-A700 !text-indigo-A700 font-epilogue p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                prefix={
                  <Img
                    className="mt-px mb-auto h-5 mr-[35px]"
                    src="images/img_icon_20x20.svg"
                    alt="Icon"
                  />
                }
                suffix={
                  <Img
                    className="mt-px mb-auto h-5 ml-2"
                    src="images/img_icon_20x20.svg"
                    alt="Icon"
                  />
                }
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueSemiBold16Bluegray700"
                >
                  {props?.labelThree}
                </Text>
                <Input
                  name="dropdown"
                  placeholder="1 - 50"
                  className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid flex w-full"
                  suffix={
                    <Img
                      className="mt-px mb-auto h-5 ml-[35px]"
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
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueSemiBold16Bluegray700"
                >
                  {props?.labelFour}
                </Text>
                <Input
                  name="dropdown_One"
                  placeholder="Technology"
                  className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid flex w-full"
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
            <div className="flex sm:flex-col flex-row gap-6 items-end justify-start w-full">
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueSemiBold16Bluegray700"
                >
                  {props?.labelFive}
                </Text>
                <Input
                  name="dropdown_Two"
                  placeholder="31"
                  className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid flex w-full"
                  suffix={
                    <Img
                      className="mt-px mb-auto h-5 ml-[35px]"
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
              <SelectBox
                className="!text-blue_gray-700 border border-gray-300 border-solid flex-1 sm:flex-1 font-epilogue text-base text-left w-[30%] sm:w-full"
                placeholderClassName="!text-blue_gray-700"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_900_20x20.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="dropdown_Three"
                options={dropdownThreeOptionsList}
                isSearchable={false}
                placeholder="July"
                shape="square"
                color="white_A700"
                size="sm"
                variant="fill"
              />
              <SelectBox
                className="!text-blue_gray-700 border border-gray-300 border-solid flex-1 sm:flex-1 font-epilogue text-base text-left w-[30%] sm:w-full"
                placeholderClassName="!text-blue_gray-700"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_900_20x20.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="zipcode"
                options={zipcodeOptionsList}
                isSearchable={false}
                placeholder="2021"
                shape="square"
                color="white_A700"
                size="sm"
                variant="fill"
              />
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueSemiBold16Bluegray700"
              >
                {props?.labelSix}
              </Text>
              <Input
                name="cssCounter"
                placeholder="CSS 3"
                className="!placeholder:text-indigo-A700 !text-indigo-A700 font-epilogue p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                prefix={
                  <Img
                    className="mt-px mb-auto h-5 mr-6"
                    src="images/img_icon_20x20.svg"
                    alt="Icon"
                  />
                }
                suffix={
                  <Img
                    className="mt-px mb-auto h-5 ml-[35px]"
                    src="images/img_icon_20x20.svg"
                    alt="Icon"
                  />
                }
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[118px] items-start justify-between w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-32"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.aboutcompany}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.briefdescriptioOne}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.labelSeven}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="bg-white-A700 flex flex-col h-[152px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray-300 p-4 w-full">
                <Text
                  className="leading-[160.00%] max-w-[695px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
              <div className="bg-white-A700 gap-3 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-start outline outline-[0.5px] outline-gray-300 pl-4 py-3 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_blue_gray_400_24x24.svg"
                  alt="icon_Seven"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_10.svg"
                  alt="icon_Eight"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_11.svg"
                  alt="icon_Nine"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_share.svg"
                  alt="share"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_12.svg"
                  alt="icon_Ten"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowup_blue_gray_400.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between pt-1 w-full">
                <Text
                  className="text-base text-blue_gray-200 w-auto"
                  size="txtEpilogueRegular16Bluegray200"
                >
                  {props?.maximum500charaone}
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.charactercounttext}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <Button
          className="cursor-pointer font-bold font-epilogue min-w-[209px] text-center text-lg"
          shape="square"
          color="indigo_A700"
          size="2xl"
          variant="fill"
        >
          {props?.savechangesbutton}
        </Button>
      </div>
    </>
  );
};

C318DashboardCompanySettingsOverviewColumnlineTwo.defaultProps = {
  basicinformationtext: "Basic Information",
  companyinformationtext:
    "This is company information that you can update anytime.",
  companylogotext: "Company Logo",
  companylogodescriptiontext:
    "This image will be shown publicly as company logo.",
  clicktoreplace: (
    <Text
      className="text-base text-blue_gray-900 w-auto"
      size="txtEpilogueRegular16Bluegray900"
    >
      <span className="text-indigo-A700 font-epilogue text-left font-medium">
        Click to replace
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-normal">
        {" "}
      </span>
      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
        or drag and drop
      </span>
    </Text>
  ),
  svgpngjpgor: "SVG, PNG, JPG or GIF (max. 400 x 400px)",
  companydetails: "Company Details",
  introducecompanytext:
    "Introduce your company core info quickly to users by fill up company details",
  label: "Company Name",
  labelOne: "Website",
  labelTwo: "Location",
  labelThree: "Employee",
  labelFour: "Industry",
  labelFive: "Date Founded",
  labelSix: "Tech Stack",
  aboutcompany: "About Company",
  briefdescriptioOne:
    "Brief description for your company. URLs are hyperlinked.",
  labelSeven: "Description",
  descriptiontext:
    "Nomad is part of the Information Technology Industry. We believe travellers want to experience real life and meet local people. Nomad has 30 total employees across all of its locations and generates $1.50 million in sales.",
  maximum500charaone: "Maximum 500 characters",
  charactercounttext: "0 / 500",
  savechangesbutton: "Save Changes",
};

export default C318DashboardCompanySettingsOverviewColumnlineTwo;
