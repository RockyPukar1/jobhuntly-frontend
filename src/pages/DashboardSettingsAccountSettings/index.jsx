import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Datepicker, Img, Input, Line, List, Text } from "components";
import C21DashboardApplicantTopnav from "components/C21DashboardApplicantTopnav";
import C29DashboardSettingsAccountSettingsColumnlineTwo from "components/C29DashboardSettingsAccountSettingsColumnlineTwo";
import C29DashboardSettingsAccountSettingsTabs from "components/C29DashboardSettingsAccountSettingsTabs";

const DashboardSettingsAccountSettingsPage = () => {
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
          src="images/img_icon_13.svg"
          alt="icon"
        />
      ),
      label: "My Applications",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_rewind_blue_gray_400.svg"
          alt="rewind"
        />
      ),
      label: "Find Jobs",
      href: "/findjobs",
      active: window.location.pathname === "/findjobs",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_icon_14.svg"
          alt="icon_One"
        />
      ),
      label: "Browse Companies",
      href: "/browsecompanies",
      active: window.location.pathname === "/browsecompanies",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_search_blue_gray_400_24x24.svg"
          alt="search"
        />
      ),
      label: "My Public Profile",
    },
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
            className="flex flex-col font-inter items-center justify-end mb-[22px] mt-[18px] pt-3.5 px-4 w-[89%]"
          >
            <div className="flex flex-col gap-[-0.05px] items-center justify-start w-full">
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
                      src="images/img_search_blue_gray_400.svg"
                      alt="search_One"
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
                      alt="icon_Two"
                    />
                  }
                >
                  <Text className="flex-1 w-auto">Help Center</Text>
                </MenuItem>
              </div>
            </div>
            <div className="flex flex-col font-epilogue items-center justify-start mt-[443px] pb-[33px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                }
              >
                <Text className="font-semibold text-gray-900 text-lg">
                  Jake Gyll
                </Text>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex flex-1 flex-col font-clashdisplayvariable items-start justify-start md:px-5 w-full">
          <C21DashboardApplicantTopnav
            className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-8 sm:px-5 shadow-bs1 w-full"
            dashboardtext="Settings"
          />
          <div className="flex flex-col font-epilogue h-[1006px] md:h-auto items-start justify-start max-w-[1168px] w-full">
            <div className="flex flex-col items-start justify-start pt-8 sm:px-5 px-8 w-full">
              <C29DashboardSettingsAccountSettingsTabs className="bg-white-A700 flex flex-row gap-10 items-start justify-start max-w-[1136px] shadow-bs1 w-full" />
            </div>
            <C29DashboardSettingsAccountSettingsColumnlineTwo
              className="bg-white-A700 flex flex-col gap-6 items-end justify-start pb-8 pt-6 sm:px-5 px-8 w-full"
              clicktoreplacetext={
                <Text className="text-base text-blue_gray-900 w-auto">
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
              }
              label={
                <Text className="font-semibold text-base text-blue_gray-700 w-auto">
                  <span className="text-blue_gray-700 font-epilogue text-left">
                    Full Name{" "}
                  </span>
                  <span className="text-deep_orange-400 font-epilogue text-left">
                    *
                  </span>
                </Text>
              }
              labelOne={
                <Text className="font-semibold text-base text-blue_gray-700 w-auto">
                  <span className="text-blue_gray-700 font-epilogue text-left">
                    Phone Number{" "}
                  </span>
                  <span className="text-deep_orange-400 font-epilogue text-left">
                    *
                  </span>
                </Text>
              }
              labelTwo={
                <Text className="font-semibold text-base text-blue_gray-700 w-auto">
                  <span className="text-blue_gray-700 font-epilogue text-left">
                    Email{" "}
                  </span>
                  <span className="text-deep_orange-400 font-epilogue text-left">
                    *
                  </span>
                </Text>
              }
              labelThree={
                <Text className="font-semibold text-base text-blue_gray-700 w-auto">
                  <span className="text-blue_gray-700 font-epilogue text-left">
                    Date of Birth{" "}
                  </span>
                  <span className="text-deep_orange-400 font-epilogue text-left">
                    *
                  </span>
                </Text>
              }
              labelFour={
                <Text className="font-semibold text-base text-blue_gray-700 w-auto">
                  <span className="text-blue_gray-700 font-epilogue text-left">
                    Gender{" "}
                  </span>
                  <span className="text-deep_orange-400 font-epilogue text-left">
                    *
                  </span>
                </Text>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSettingsAccountSettingsPage;
