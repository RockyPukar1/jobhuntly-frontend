import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import C210DashboardSettingsLoginDetailsColumnlineTwo from "components/C210DashboardSettingsLoginDetailsColumnlineTwo";
import C21DashboardApplicantTopnav from "components/C21DashboardApplicantTopnav";
import C29DashboardSettingsAccountSettingsTabs from "components/C29DashboardSettingsAccountSettingsTabs";
import Sidebar11 from "components/Sidebar11";

const DashboardSettingsLoginDetailsPage = () => {
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
        <Sidebar11 className="!sticky !w-[272px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs3 top-[0]" />
        <div className="flex flex-1 flex-col font-clashdisplayvariable items-start justify-start md:px-5 w-full">
          <C21DashboardApplicantTopnav
            className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-8 sm:px-5 shadow-bs1 w-full"
            dashboardtext="Settings"
          />
          <div className="flex flex-col font-epilogue h-[902px] md:h-auto items-start justify-start max-w-[1168px] w-full">
            <div className="flex flex-col items-start justify-start pt-8 sm:px-5 px-8 w-full">
              <C29DashboardSettingsAccountSettingsTabs className="bg-white-A700 flex flex-row gap-10 items-start justify-start max-w-[1136px] shadow-bs1 w-full" />
            </div>
            <C210DashboardSettingsLoginDetailsColumnlineTwo className="bg-white-A700 flex flex-col gap-6 items-end justify-start pb-8 pt-6 sm:px-5 px-8 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSettingsLoginDetailsPage;
