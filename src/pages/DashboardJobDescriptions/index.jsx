import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import C15JobDescriptionsColumnperksbenefits from "components/C15JobDescriptionsColumnperksbenefits";
import C15JobDescriptionsRow from "components/C15JobDescriptionsRow";
import C26DashboardJobDescriptionsHeader5desktop from "components/C26DashboardJobDescriptionsHeader5desktop";
import C26DashboardJobDescriptionsRowdescription from "components/C26DashboardJobDescriptionsRowdescription";
import C26DashboardJobDescriptionsTopnav from "components/C26DashboardJobDescriptionsTopnav";
import Sidebar1 from "components/Sidebar1";

const DashboardJobDescriptionsPage = () => {
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
          src="images/img_contrast_indigo_a700.svg"
          alt="contrast"
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
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay gap-px items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar1 className="!sticky !w-[272px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col font-clashdisplayvariable items-start justify-start pb-8 md:px-5 w-full">
          <C26DashboardJobDescriptionsTopnav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-8 sm:px-5 shadow-bs1 w-full" />
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <C26DashboardJobDescriptionsHeader5desktop className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 w-auto md:w-full" />
            <C26DashboardJobDescriptionsRowdescription
              className="bg-white-A700 flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1168px] p-8 sm:px-5 w-full"
              p5appliedoften={
                <Text className="font-semibold text-base text-blue_gray-900 text-center w-auto">
                  <span className="text-blue_gray-900 font-epilogue">
                    5 applied
                  </span>
                  <span className="text-blue_gray-900 font-epilogue"> </span>
                  <span className="text-blue_gray-400 font-epilogue font-normal">
                    of 10 capacity
                  </span>
                </Text>
              }
            />
            <Line className="bg-gray-300 h-px w-full" />
            <C15JobDescriptionsColumnperksbenefits className="bg-white-A700 flex flex-col gap-6 items-start justify-start max-w-[1168px] p-8 sm:px-5 w-full" />
            <Line className="bg-gray-300 h-px w-full" />
            <C15JobDescriptionsRow className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1168px] p-8 sm:px-5 rounded-lg w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardJobDescriptionsPage;
