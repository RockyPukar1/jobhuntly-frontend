import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C31DashboardCompanyTopnav from "components/C31DashboardCompanyTopnav";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardCompanyInterviewSchedulePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_home_blue_gray_400.svg"
          alt="home"
        />
      ),
      label: "Dashboard",
      href: "/dashboardapplicant",
      active: window.location.pathname === "/dashboardapplicant",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_television_blue_gray_400.svg"
          alt="television"
        />
      ),
      label: "Messages",
      suffix: (
        <Text className="bg-indigo-A700 flex font-epilogue font-semibold h-6 items-center justify-center mb-[3px] rounded-[50%] text-center text-sm text-white-A700 w-6">
          1
        </Text>
      ),
      href: "/dashboardcompanymessages",
      active: window.location.pathname === "/dashboardcompanymessages",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_icon_14.svg"
          alt="icon"
        />
      ),
      label: "Company Profile",
      href: "/companyprofile",
      active: window.location.pathname === "/companyprofile",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_icon_27.svg"
          alt="icon_One"
        />
      ),
      label: "All Applicants",
      href: "/dashboardcompanyallapplicants",
      active: window.location.pathname === "/dashboardcompanyallapplicants",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_icon_28.svg"
          alt="icon_Two"
        />
      ),
      label: "Job Listing",
      href: "/dashboardcompanyjoblisting",
      active: window.location.pathname === "/dashboardcompanyjoblisting",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_icon_32.svg"
          alt="icon_Three"
        />
      ),
      label: "My Schedule",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[272px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs3 top-[0]"
        >
          <div className="flex flex-row gap-2 items-center justify-start mt-8 mx-auto md:pr-10 pr-16 sm:pr-5 w-auto">
            <Img
              className="h-8 w-8"
              src="images/img_frame3.svg"
              alt="frameThree"
            />
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.24px] w-auto"
              size="txtRedHatDisplayBold24Gray900"
            >
              JobHuntly
            </Text>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "10px 10px 10px 15px",
                gap: "16px",
                color: "#7c8493",
                fontWeight: 500,
                fontSize: "16px",
                [`&:hover, &.ps-active`]: {
                  color: "#4640de",
                  backgroundColor: "#e9ebfdff !important",
                },
              },
            }}
            className="flex flex-col font-inter items-center justify-start mb-[25px] mt-[18px] pt-3.5 px-4 w-[89%]"
          >
            <div className="flex flex-col gap-[0.06px] items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <Line className="bg-indigo-100 h-px mt-8 w-full" />
            <div className="flex flex-col gap-[27px] items-center justify-start mt-[35px] w-full">
              <Text
                className="text-gray-900_87 text-sm tracking-[0.56px] w-auto"
                size="txtInterSemiBold14"
              >
                SETTINGS
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-[3px] w-6"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  active={
                    window.location.pathname ===
                    "/dashboardsettingsaccountsettings"
                  }
                  href="/dashboardsettingsaccountsettings"
                >
                  <Text className="flex-1 w-auto">Settings</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-[3px] w-6"
                      src="images/img_icon_15.svg"
                      alt="icon_Four"
                    />
                  }
                >
                  <Text className="flex-1 w-auto">Help Center</Text>
                </MenuItem>
              </div>
            </div>
            <div className="flex flex-col font-epilogue items-center justify-start mt-[304px] pb-[33px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                }
              >
                <Text className="font-semibold text-blue_gray-900 text-lg w-auto">
                  Maria Kelly
                </Text>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex flex-1 flex-col font-epilogue items-start justify-start md:px-5 w-full">
          <C31DashboardCompanyTopnav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1167px] sm:px-5 px-8 py-4 shadow-bs1 w-full" />
          <div className="bg-white-A700 flex md:flex-col flex-row gap-px items-center justify-between max-w-[1167px] sm:px-5 px-8 shadow-bs1 w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                My Schedule
              </Text>
              <Button
                className="cursor-pointer font-bold font-epilogue min-w-[96px] text-base text-center"
                shape="square"
                color="gray_300"
                size="xl"
                variant="outline"
              >
                Today
              </Button>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
              <Text
                className="text-base text-black-900 w-auto"
                size="txtEpilogueBold16Black900"
              >
                NOVEMBER 2021
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft_indigo_a700.svg"
                alt="arrowright_One"
              />
            </div>
            <div className="flex flex-row items-start justify-start pt-6 w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueSemiBold16Bluegray400"
                >
                  Day
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-[106px]">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  Week
                </Text>
                <Line className="bg-indigo-A700 h-1 w-full" />
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueSemiBold16Bluegray400"
                >
                  Month
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[15px] items-start justify-start pl-8 pr-6 sm:px-5 py-6 w-auto">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[294px]"
                  leftIcon={
                    <Img
                      className="h-5 mt-px mr-2.5"
                      src="images/img_icon_indigo_a700_40x40.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="indigo_100"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-bold text-base text-center">
                    Create Event
                  </div>
                </Button>
                <div className="flex flex-col h-[302px] md:h-auto items-start justify-start w-[294px]">
                  <div className="flex flex-row items-start justify-between p-3 w-full">
                    <Text
                      className="flex-1 text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueBold16Bluegray900"
                    >
                      NOVEMBER 2021
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowleft_indigo_a700.svg"
                        alt="arrowright_Three"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col h-full items-start justify-start w-full">
                    <div className="grid grid-cols-7 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col items-start justify-start p-[7px] w-full">
                        <Text
                          className="my-[3px] text-blue_gray-400 text-center text-sm"
                          size="txtEpilogueRegular14"
                        >
                          Sun
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start p-[5px] w-full">
                        <Text
                          className="my-[5px] text-blue_gray-400 text-center text-sm"
                          size="txtEpilogueRegular14"
                        >
                          Mon
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                        <Text
                          className="my-0.5 text-blue_gray-400 text-center text-sm"
                          size="txtEpilogueRegular14"
                        >
                          Tue
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start p-[5px] w-full">
                        <Text
                          className="my-[5px] text-blue_gray-400 text-center text-sm"
                          size="txtEpilogueRegular14"
                        >
                          Wed
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                        <Text
                          className="my-0.5 text-blue_gray-400 text-center text-sm"
                          size="txtEpilogueRegular14"
                        >
                          Thu
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start p-[9px] w-full">
                        <Text
                          className="mb-0.5 ml-0.5 md:ml-[0] text-blue_gray-400 text-center text-sm"
                          size="txtEpilogueRegular14"
                        >
                          Fri
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[9px] w-full">
                        <Text
                          className="text-blue_gray-400 text-center text-sm"
                          size="txtEpilogueRegular14"
                        >
                          Sat
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-center text-gray-300"
                          size="txtEpilogueMedium16Gray300"
                        >
                          26
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-center text-gray-300"
                          size="txtEpilogueMedium16Gray300"
                        >
                          27
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-1 text-base text-center text-gray-300"
                          size="txtEpilogueMedium16Gray300"
                        >
                          28
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-center text-gray-300"
                          size="txtEpilogueMedium16Gray300"
                        >
                          29
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-center text-gray-300"
                          size="txtEpilogueMedium16Gray300"
                        >
                          30
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-center text-gray-300"
                          size="txtEpilogueMedium16Gray300"
                        >
                          31
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-blue_gray-700 text-center"
                          size="txtEpilogueMedium16Bluegray700"
                        >
                          1
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          2
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                        <Text
                          className="mb-0.5 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                        <Text
                          className="mb-0.5 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          4
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                        <Text
                          className="mb-0.5 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          5
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                        <Text
                          className="mb-0.5 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          6
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                        <Text
                          className="mb-0.5 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          7
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                        <Text
                          className="mb-0.5 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          8
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          9
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="h-[17px] mb-[3px] text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          10
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          11
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="h-[17px] mb-[3px] text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          12
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="h-[17px] mb-[3px] text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          13
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-[3px] text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          14
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="h-[17px] mb-[3px] text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          15
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="h-[17px] mb-1 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          16
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-1 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          17
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="h-[17px] mb-1 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          18
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="h-[17px] mb-1 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          19
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-1 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          20
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-1 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          21
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-[7px] w-full">
                        <Text
                          className="mb-1 text-base text-blue_gray-900 text-center"
                          size="txtEpilogueMedium16Bluegray900"
                        >
                          22
                        </Text>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-px items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row h-full items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start p-2">
                          <Text
                            className="mb-0.5 text-base text-blue_gray-900 text-center"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            23
                          </Text>
                        </div>
                        <div className="md:h-8 h-9 pb-[3px] px-[3px] relative w-[15%]">
                          <div className="bg-indigo-A700 h-8 ml-auto rounded-[50%] w-8"></div>
                          <Text
                            className="absolute inset-x-[0] mx-auto text-base text-center text-white-A700 top-[22%] w-max"
                            size="txtEpilogueMedium16"
                          >
                            24
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2">
                          <Text
                            className="mb-0.5 text-base text-blue_gray-900 text-center"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            25
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2">
                          <Text
                            className="mb-0.5 text-base text-blue_gray-900 text-center"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            26
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2">
                          <Text
                            className="mb-0.5 text-base text-blue_gray-900 text-center"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            27
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2">
                          <Text
                            className="mb-0.5 text-base text-blue_gray-900 text-center"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            28
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2">
                          <Text
                            className="mb-0.5 text-base text-blue_gray-900 text-center"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            29
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row h-full items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start p-[7px]">
                          <Text
                            className="mb-[3px] text-base text-blue_gray-900 text-center"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            30
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[7px]">
                          <Text
                            className="mb-[3px] text-base text-blue_gray-900 text-center"
                            size="txtEpilogueMedium16Bluegray900"
                          >
                            31
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[7px]">
                          <Text
                            className="mb-[3px] text-base text-center text-gray-300"
                            size="txtEpilogueMedium16Gray300"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[7px]">
                          <Text
                            className="mb-[3px] text-base text-center text-gray-300"
                            size="txtEpilogueMedium16Gray300"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[7px]">
                          <Text
                            className="mb-[3px] text-base text-center text-gray-300"
                            size="txtEpilogueMedium16Gray300"
                          >
                            3
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[7px]">
                          <Text
                            className="mb-[3px] text-base text-center text-gray-300"
                            size="txtEpilogueMedium16Gray300"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[7px]">
                          <Text
                            className="mb-[3px] text-base text-center text-gray-300"
                            size="txtEpilogueMedium16Gray300"
                          >
                            5
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 h-[411px] md:h-auto items-start justify-start pl-8 pr-6 sm:px-5 py-6 w-[349px]">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtEpilogueSemiBold16Black900"
                  >
                    Categories
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-center py-3 w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_icon_indigo_a700_40x40.svg"
                      alt="icon_Six"
                    />
                    <Text
                      className="text-base text-center text-indigo-A700 w-auto"
                      size="txtEpilogueBold16"
                    >
                      Add Category
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Button
                      className="border border-indigo-A700 border-solid flex h-6 items-center justify-center rounded w-6"
                      color="indigo_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img src="images/img_checkmark.svg" alt="checkmark" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      Interview Schedule
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Button
                      className="border border-solid border-teal-300 flex h-6 items-center justify-center rounded w-6"
                      color="teal_300"
                      size="sm"
                      variant="fill"
                    >
                      <Img src="images/img_checkmark.svg" alt="checkmark_One" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      Internal Meeting
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      Team Schedule
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      My Task
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      Reminders
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center overflow-auto w-auto md:w-full">
              <div className="md:h-[88px] h-[89px] md:pr-10 sm:pr-5 pr-[55px] relative w-full">
                <div className="md:h-[88px] h-[89px] my-auto w-[94%] md:w-full">
                  <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                    <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-end py-1 shadow-bs1 w-full">
                      <div className="flex flex-col gap-2 items-center justify-start p-2 w-[99px]">
                        <Text
                          className="text-blue_gray-400 text-center text-sm w-auto"
                          size="txtInterSemiBold14Bluegray400"
                        >
                          SUN
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-lg w-auto"
                          size="txtEpilogueSemiBold18Bluegray900"
                        >
                          23
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-1 p-2 w-[136px]">
                        <Text
                          className="text-blue_gray-400 text-center text-sm w-auto"
                          size="txtInterSemiBold14Bluegray400"
                        >
                          MON
                        </Text>
                        <Input
                          name="frame5155"
                          placeholder="24"
                          className="font-epilogue font-semibold p-0 placeholder:text-white-A700 text-center text-lg w-full"
                          wrapClassName="h-11 w-11"
                          shape="circle"
                          color="indigo_A700"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start p-2 w-[138px]">
                        <Text
                          className="text-blue_gray-400 text-center text-sm w-auto"
                          size="txtInterSemiBold14Bluegray400"
                        >
                          TUE
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-lg w-auto"
                          size="txtEpilogueSemiBold18Bluegray900"
                        >
                          25
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start p-2 w-[135px]">
                        <Text
                          className="text-blue_gray-400 text-center text-sm w-auto"
                          size="txtInterSemiBold14Bluegray400"
                        >
                          WED
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-lg w-auto"
                          size="txtEpilogueSemiBold18Bluegray900"
                        >
                          26
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[275px] p-2 w-[92px]">
                        <Text
                          className="text-blue_gray-400 text-center text-sm w-auto"
                          size="txtInterSemiBold14Bluegray400"
                        >
                          SAT
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-lg w-auto"
                          size="txtEpilogueSemiBold18Bluegray900"
                        >
                          29
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-deep_orange-400_19 flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-[5px] right-[21%] w-[17%]">
                    <div className="flex flex-col gap-[13px] items-center justify-start mt-2">
                      <Text
                        className="text-blue_gray-400 text-center text-sm"
                        size="txtInterSemiBold14Bluegray400"
                      >
                        THU
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-lg"
                        size="txtEpilogueSemiBold18Bluegray900"
                      >
                        27
                      </Text>
                    </div>
                    <Text
                      className="bg-deep_orange-400 justify-center mt-0.5 sm:px-5 px-[35px] py-0.5 text-center text-white-A700 text-xs w-[122px]"
                      size="txtEpilogueRegular12"
                    >
                      Holiday
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-2 h-max inset-y-[0] items-center justify-start my-auto p-2 right-[10%] w-[141px]">
                  <Text
                    className="text-blue_gray-400 text-center text-sm w-auto"
                    size="txtInterSemiBold14Bluegray400"
                  >
                    FRI
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-center text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    28
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-[98%] md:w-full">
                <div className="flex flex-col items-end justify-start w-[8%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-right text-sm"
                    size="txtEpilogueSemiBold14Bluegray900"
                  >
                    GMT +07
                  </Text>
                  <div className="flex flex-col gap-[41px] items-start justify-start mt-12">
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      1 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      2 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      3 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      4 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      5 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      6 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      7 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      8 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      9 AM
                    </Text>
                  </div>
                  <div className="flex flex-col gap-10 items-start justify-start mt-[41px]">
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      10 AM
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      11 AM
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-right text-sm"
                      size="txtEpilogueRegular14Bluegray700"
                    >
                      12 AM
                    </Text>
                  </div>
                </div>
                <div className="md:h-[736px] h-[763px] relative w-[92%] md:w-full">
                  <div className="bg-red-50 h-[736px] ml-auto mr-[171px] my-auto w-[19%]"></div>
                  <div className="absolute md:h-[736px] h-[763px] inset-[0] justify-center m-auto pb-[27px] w-full">
                    <Img
                      className="h-[736px] m-auto object-cover"
                      src="images/img_grid_gray_300.png"
                      alt="grid"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[168px] h-max inset-y-[0] items-start justify-start left-[2%] my-auto w-[55%]">
                      <div className="bg-blue-500 flex flex-col items-start justify-start w-[33%] md:w-full">
                        <div className="flex flex-row items-center justify-start w-[95%] md:w-full">
                          <Line className="bg-blue-500 h-[168px] w-[3px]" />
                          <div className="flex flex-col gap-[47px] items-end justify-start ml-[5px] w-[94%]">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="leading-[130.00%] text-sm text-white-A700 w-full"
                                size="txtEpilogueMedium14"
                              >
                                Interview session with Kathryn Murphy
                              </Text>
                              <Text
                                className="text-sm text-white-A700_ab"
                                size="txtEpilogueRegular14WhiteA700ab"
                              >
                                02.00 - 05.00 AM
                              </Text>
                            </div>
                            <div className="flex relative w-[36%]">
                              <Img
                                className="h-6 my-auto object-cover w-6"
                                src="images/img_avatar.png"
                                alt="avatar_One"
                              />
                              <Img
                                className="h-6 ml-[-8px] my-auto object-cover w-6 z-[1]"
                                src="images/img_avatar.png"
                                alt="avatar_Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[137px] grid grid-cols-2 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-blue-500 flex flex-1 flex-row items-center justify-start pr-[9px] w-full">
                          <Line className="bg-blue-500 h-[57px] w-[3px]" />
                          <div className="flex flex-col gap-2 items-center justify-start ml-[5px]">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtEpilogueMedium14"
                            >
                              Interview sess...
                            </Text>
                            <Text
                              className="text-sm text-white-A700_ab"
                              size="txtEpilogueRegular14WhiteA700ab"
                            >
                              08.00 - 09.00 AM
                            </Text>
                          </div>
                        </div>
                        <div className="bg-teal-300 flex flex-1 flex-row items-center justify-center pr-2 w-full">
                          <Line className="bg-teal-300 h-[57px] w-[3px]" />
                          <div className="flex flex-col gap-1.5 items-start justify-start ml-[5px]">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtEpilogueMedium14"
                            >
                              Meeting with s...
                            </Text>
                            <Text
                              className="text-sm text-white-A700_ab"
                              size="txtEpilogueRegular14WhiteA700ab"
                            >
                              09.00 - 10.00 AM
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCompanyInterviewSchedulePage;
