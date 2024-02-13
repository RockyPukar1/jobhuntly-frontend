import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import C21DashboardApplicantTopnav from "components/C21DashboardApplicantTopnav";
import C24DashboardFindJobsListSearchbox from "components/C24DashboardFindJobsListSearchbox";
import C25DashboardFindJobsGridRowcaptionEight from "components/C25DashboardFindJobsGridRowcaptionEight";
import Sidebar1 from "components/Sidebar1";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardFindJobsGridPage = () => {
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
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay gap-px items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar1 className="!sticky !w-[272px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col font-clashdisplayvariable items-start justify-start md:px-5 w-full">
          <C21DashboardApplicantTopnav
            className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-8 sm:px-5 shadow-bs1 w-full"
            dashboardtext="Find Jobs"
          />
          <C24DashboardFindJobsListSearchbox className="bg-white-A700 flex flex-col font-epilogue gap-8 items-center justify-start max-w-[1168px] pt-8 w-full" />
          <C25DashboardFindJobsGridRowcaptionEight
            className="bg-white-A700 flex md:flex-col flex-row font-epilogue gap-10 items-start justify-center max-w-[1168px] p-8 sm:px-5 w-full"
            p5appliedoften={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften1={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften2={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften3={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften4={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften5={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften6={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften7={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften8={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften9={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften10={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
            p5appliedoften11={
              <Text className="text-black-900 text-center text-sm w-auto">
                <span className="text-blue_gray-900 font-epilogue font-semibold">
                  5 applied
                </span>
                <span className="text-black-900 font-epilogue font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue font-normal">
                  of 10 capacity
                </span>
              </Text>
            }
          />
        </div>
      </div>
    </>
  );
};

export default DashboardFindJobsGridPage;
