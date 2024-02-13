import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C29DashboardSettingsAccountSettingsTabs from "components/C29DashboardSettingsAccountSettingsTabs";
import C31DashboardCompanyJoblist from "components/C31DashboardCompanyJoblist";
import C31DashboardCompanyPilltab from "components/C31DashboardCompanyPilltab";
import C31DashboardCompanyTopnav from "components/C31DashboardCompanyTopnav";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardCompanyPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: <Img className="h-6 w-6" src="images/img_home.svg" alt="home" />,
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
          src="images/img_icon_blue_gray_400_20x20.svg"
          alt="icon_Three"
        />
      ),
      label: "My Schedule",
    },
  ];
  const c31DashboardCompanyJoblistPropList = [
    {},
    {},
    {},
    { userimage: "images/img_s93hu9p3400x400.png" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
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
            <div className="flex flex-col font-epilogue items-center justify-start mt-[620px] pb-[33px] w-full">
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
        <div className="flex flex-1 flex-col font-epilogue items-center justify-start pb-6 md:px-5 w-full">
          <C31DashboardCompanyTopnav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1167px] sm:px-5 px-8 py-4 shadow-bs1 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1168px] p-8 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                Good morning, Maria
              </Text>
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueMedium16Bluegray400"
              >
                Here is your job listings statistic report from July 19 - July
                25.
              </Text>
            </div>
            <Input
              name="dropdown"
              placeholder="Jul 19 - Jul 25"
              className="!placeholder:text-blue_gray-900 !text-blue_gray-900 p-0 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid flex md:flex-1 w-[180px] md:w-full"
              suffix={
                <Img
                  className="mt-px mb-auto h-5 ml-[26px]"
                  src="images/img_icon_calendar.svg"
                  alt="Icon"
                />
              }
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <List
              className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-indigo-A700 flex flex-row gap-[13px] items-center justify-start p-6 sm:px-5 w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                  size="txtEpilogueSemiBold48"
                >
                  76
                </Text>
                <Text
                  className="leading-[160.00%] max-w-[200px] md:max-w-full text-lg text-white-A700"
                  size="txtEpilogueMedium18"
                >
                  New candidates to review
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright_white_a700.svg"
                  alt="arrowright"
                />
              </div>
              <div className="bg-teal-300 flex flex-row gap-[13px] h-[106px] md:h-auto items-center justify-between p-6 sm:px-5 w-[351px]">
                <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                    size="txtEpilogueSemiBold48"
                  >
                    3
                  </Text>
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtEpilogueMedium18"
                  >
                    Schedule for today
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright_white_a700.svg"
                  alt="arrowright"
                />
              </div>
              <div className="bg-blue-500 flex flex-row gap-[13px] h-[106px] md:h-auto items-center justify-between p-6 sm:px-5 w-[351px]">
                <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                    size="txtEpilogueSemiBold48"
                  >
                    24
                  </Text>
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtEpilogueMedium18"
                  >
                    Messages received
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright_white_a700.svg"
                  alt="arrowright"
                />
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[45px] items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start pt-6 w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[260px] items-center justify-between w-auto md:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtClashDisplayVariableSemiBold20"
                      >
                        Job statistics
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtEpilogueRegular14"
                      >
                        Showing Jobstatistic Jul 19-25
                      </Text>
                    </div>
                    <C31DashboardCompanyPilltab className="bg-indigo-50_01 flex flex-row items-start justify-start p-1 w-auto" />
                  </div>
                  <C29DashboardSettingsAccountSettingsTabs
                    className="bg-white-A700 flex flex-row gap-10 items-start justify-start max-w-[727px] sm:pl-5 pl-6 shadow-bs1 w-full"
                    profiletext="Overview"
                    logintext="Jobs View"
                    notificationstext="Jobs Applied"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between mb-[23px] w-[94%] md:w-full">
                  <div className="sm:h-[1929px] md:h-[291px] h-[311px] relative w-[63%] md:w-full">
                    <div className="absolute md:h-[70px] h-[79px] left-1/4 top-[0] w-1/5">
                      <Img
                        className="absolute bottom-[0] h-4 inset-x-[0] mx-auto rounded-sm"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <div className="absolute bg-blue_gray-900 flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto p-2 top-[0] w-[82px]">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-teal-300 h-4 rounded-[3px] w-4"></div>
                          <Text
                            className="text-base text-center text-white-A700 w-auto"
                            size="txtEpilogueMedium16"
                          >
                            122
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-blue-500 h-4 rounded-[3px] w-4"></div>
                          <Text
                            className="text-base text-center text-white-A700 w-auto"
                            size="txtEpilogueMedium16"
                          >
                            34
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col gap-2 inset-x-[0] items-start justify-start mx-auto w-auto">
                      <List
                        className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-7 justify-start w-[428px] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Img
                            className="h-[232px] w-full"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-base text-blue_gray-400 text-center w-full"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            Mon
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Img
                            className="h-40 w-full"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-base text-blue_gray-400 text-center w-full"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            Tue
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Img
                            className="h-40 w-full"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-base text-blue_gray-400 text-center w-full"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            Wed
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Img
                            className="h-56 w-full"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-base text-blue_gray-400 text-center w-full"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            Thu
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Img
                            className="h-[198px] w-full"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-base text-blue_gray-400 text-center"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            Fri
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Img
                            className="h-[87px] w-full"
                            src="images/img_settings_deep_purple_a200.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-base text-blue_gray-400 text-center w-full"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            Sat
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Img
                            className="h-[109px] w-full"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-base text-blue_gray-400 text-center w-full"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            Sun
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-row gap-[29px] items-start justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-yellow-700 h-4 rounded-[3px] w-4"></div>
                          <Text
                            className="text-base text-blue_gray-400 text-center w-auto"
                            size="txtEpilogueMedium16Bluegray400"
                          >
                            Job View
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-deep_purple-A200 h-4 rounded-[3px] w-4"></div>
                          <Text
                            className="text-base text-blue_gray-400 text-center w-auto"
                            size="txtEpilogueMedium16Bluegray400"
                          >
                            Job Applied
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-4 items-start w-auto"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-3.5 h-[145px] md:h-auto items-start justify-start my-0 p-4 w-[228px]">
                      <div className="flex flex-row gap-[18px] items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-900 text-lg w-auto"
                          size="txtEpilogueSemiBold18Bluegray900"
                        >
                          Job Views
                        </Text>
                        <Button
                          className="flex h-8 items-center justify-center w-8"
                          shape="circle"
                          color="yellow_700"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_icon_white_a700_32x32.svg"
                            alt="icon"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center w-auto"
                          size="txtEpilogueSemiBold36"
                        >
                          2,342
                        </Text>
                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-center text-lg w-auto"
                            size="txtEpilogueMedium18Bluegray400"
                          >
                            This Week{" "}
                          </Text>
                          <div className="flex flex-row items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_purple-A200 text-lg w-auto"
                              size="txtEpilogueMedium18DeeppurpleA200"
                            >
                              6.4%
                            </Text>
                            <Img
                              className="h-5 w-5"
                              src="images/img_icon_deep_purple_a200.svg"
                              alt="icon_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-3.5 h-[145px] md:h-auto items-start justify-start my-0 p-4 w-[228px]">
                      <div className="flex flex-row gap-[18px] items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-900 text-lg w-auto"
                          size="txtEpilogueSemiBold18Bluegray900"
                        >
                          Job Applied
                        </Text>
                        <Button
                          className="flex h-8 items-center justify-center w-8"
                          shape="circle"
                          color="deep_purple_A200"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_icon_32x32.svg"
                            alt="icon"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center w-auto"
                          size="txtEpilogueSemiBold36"
                        >
                          654
                        </Text>
                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-center text-lg w-auto"
                            size="txtEpilogueMedium18Bluegray400"
                          >
                            This Week{" "}
                          </Text>
                          <div className="flex flex-row items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_orange-400 text-lg w-auto"
                              size="txtEpilogueMedium18Deeporange400"
                            >
                              0.5%
                            </Text>
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowdown_deep_orange_400.svg"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col font-clashdisplayvariable gap-6 items-start justify-start w-auto">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start pb-[23px] w-[352px]">
                  <div className="flex flex-col items-start justify-start pb-4 pt-6 sm:px-5 px-6 w-[352px]">
                    <Text
                      className="text-blue_gray-900 text-center text-xl w-auto"
                      size="txtClashDisplayVariableSemiBold20"
                    >
                      Job Open
                    </Text>
                  </div>
                  <div className="flex flex-row font-epilogue gap-2 items-start justify-start pb-[13px] px-[13px] w-full">
                    <Text
                      className="ml-2.5 md:text-5xl text-7xl text-blue_gray-900"
                      size="txtEpilogueSemiBold72"
                    >
                      12
                    </Text>
                    <Text
                      className="mt-[47px] text-blue_gray-400 text-xl"
                      size="txtEpilogueRegular20"
                    >
                      Jobs Opened
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start pb-[23px] w-[352px]">
                  <div className="flex flex-col items-start justify-start pb-4 pt-6 sm:px-5 px-6 w-[352px]">
                    <Text
                      className="text-blue_gray-900 text-center text-xl w-auto"
                      size="txtClashDisplayVariableSemiBold20"
                    >
                      Applicants Summary
                    </Text>
                  </div>
                  <div className="flex flex-row font-epilogue gap-2 items-end justify-start sm:pl-5 pl-6 py-2 w-full">
                    <Text
                      className="md:text-5xl text-7xl text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold72"
                    >
                      67
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-xl w-[105px]"
                      size="txtEpilogueRegular20"
                    >
                      Applicants
                    </Text>
                  </div>
                  <Img
                    className="h-4 w-full"
                    src="images/img_chart_deep_purple_a200.svg"
                    alt="chart"
                  />
                  <div className="flex flex-row font-epilogue gap-8 items-start justify-start sm:px-5 px-6 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start pt-6 w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-deep_purple-A200 h-5 rounded w-5"></div>
                        <Text
                          className="text-base text-blue_gray-400 w-auto"
                          size="txtEpilogueRegular16Bluegray400"
                        >
                          <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                            Full Time :{" "}
                          </span>
                          <span className="text-blue_gray-900 font-epilogue text-left font-medium">
                            45
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-teal-300 h-5 rounded w-5"></div>
                        <Text
                          className="text-base text-blue_gray-400 w-auto"
                          size="txtEpilogueRegular16Bluegray400"
                        >
                          <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                            Part-Time :{" "}
                          </span>
                          <span className="text-blue_gray-900 font-epilogue text-left font-medium">
                            24
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-blue-500 h-5 rounded w-5"></div>
                        <Text
                          className="text-base text-blue_gray-400 w-auto"
                          size="txtEpilogueRegular16Bluegray400"
                        >
                          <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                            Remote :{" "}
                          </span>
                          <span className="text-blue_gray-900 font-epilogue text-left font-medium">
                            22
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start pt-6 w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-yellow-700 h-5 rounded w-5"></div>
                        <Text
                          className="text-base text-blue_gray-400 w-auto"
                          size="txtEpilogueRegular16Bluegray400"
                        >
                          <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                            Internship :{" "}
                          </span>
                          <span className="text-blue_gray-900 font-epilogue text-left font-medium">
                            32
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-deep_orange-400 h-5 rounded w-5"></div>
                        <Text
                          className="text-base text-blue_gray-400 w-auto"
                          size="txtEpilogueRegular16Bluegray400"
                        >
                          <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                            Contract :{" "}
                          </span>
                          <span className="text-blue_gray-900 font-epilogue text-left font-medium">
                            30
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-clashdisplayvariable items-start justify-start max-w-[1106px] outline outline-[1px] outline-gray-300 w-full">
              <div className="bg-white-A700 flex flex-row md:gap-10 items-start justify-between p-6 sm:px-5 shadow-bs1 w-full">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Job Updates
                </Text>
                <div className="flex flex-row font-epilogue gap-2 items-center justify-end w-auto">
                  <a
                    href="javascript:"
                    className="text-base text-indigo-A700 w-auto"
                  >
                    <Text size="txtEpilogueSemiBold16IndigoA700">View All</Text>
                  </a>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-epilogue gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start p-6 sm:px-5 w-full"
                orientation="horizontal"
              >
                {c31DashboardCompanyJoblistPropList.map((props, index) => (
                  <React.Fragment key={`C31DashboardCompanyJoblist${index}`}>
                    <C31DashboardCompanyJoblist
                      className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCompanyPage;
