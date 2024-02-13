import React from "react";

import { Button, Img, List, Text } from "components";

const C33DashboardCompanyCompanyProfileRowedit = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[189px] items-start justify-start p-[7px] w-[189px]"
          style={{ backgroundImage: "url('images/img_frame1280.svg')" }}
        >
          <Button
            className="border border-gray-300 border-solid flex h-10 items-center justify-center mb-[116px] mt-[19px] w-10"
            shape="square"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img
              className="h-5"
              src="images/img_edit_indigo_a700.svg"
              alt="edit"
            />
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                size="txtClashDisplayVariableSemiBold48"
              >
                {props?.nomad}
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-row gap-2.5 items-center justify-center px-4 py-3 w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon_indigo_a700_20x20.svg"
                    alt="icon_Five"
                  />
                  <Text
                    className="text-base text-center text-indigo-A700 w-auto"
                    size="txtEpilogueBold16"
                  >
                    {props?.captionSeven}
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[189px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-2.5"
                      src="images/img_search_indigo_a700.svg"
                      alt="search"
                    />
                  }
                  shape="square"
                  color="indigo_100"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-bold font-epilogue text-base text-center">
                    {props?.profileSettings}
                  </div>
                </Button>
              </div>
            </div>
            <Text
              className="text-base text-indigo-A700 w-auto"
              size="txtEpilogueSemiBold16IndigoA700"
            >
              {props?.weburl}
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Button
                className="border border-gray-300 border-solid flex h-11 items-center justify-center rounded-[50%] w-11"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_icon_blue_500.svg"
                  alt="icon"
                />
              </Button>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.founded}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.july312011}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Button
                className="border border-gray-300 border-solid flex h-11 items-center justify-center rounded-[50%] w-11"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_icon_blue_500_44x44.svg"
                  alt="icon"
                />
              </Button>
              <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.employees}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.p4000}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Button
                className="border border-gray-300 border-solid flex h-11 items-center justify-center rounded-[50%] w-11"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_linkedin_blue_500.svg"
                  alt="linkedin"
                />
              </Button>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.location}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.countriescounter}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Button
                className="border border-gray-300 border-solid flex h-11 items-center justify-center rounded-[50%] w-11"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_icon_44x44.svg"
                  alt="icon"
                />
              </Button>
              <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.industry}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.socialnonprofitOne}
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

C33DashboardCompanyCompanyProfileRowedit.defaultProps = {
  nomad: "Nomad",
  captionSeven: "Public View",
  profileSettings: "Profile Settings",
  weburl: "https://nomad.com",
  founded: "Founded",
  july312011: "July 31, 2011",
  employees: "Employees",
  p4000: "4000+",
  location: "Location",
  countriescounter: "20 countries",
  industry: "Industry",
  socialnonprofitOne: "Social & Non-Profit",
};

export default C33DashboardCompanyCompanyProfileRowedit;
