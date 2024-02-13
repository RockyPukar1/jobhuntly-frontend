import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import C21DashboardApplicantRowgoodmorningjakeOne from "components/C21DashboardApplicantRowgoodmorningjakeOne";
import C21DashboardApplicantTopnav from "components/C21DashboardApplicantTopnav";
import C23DashboardApplicationsHistoryAnnouncements from "components/C23DashboardApplicationsHistoryAnnouncements";
import C23DashboardApplicationsHistoryColumnapplicationshisOne from "components/C23DashboardApplicationsHistoryColumnapplicationshisOne";
import C23DashboardApplicationsHistoryTabs from "components/C23DashboardApplicationsHistoryTabs";
import Sidebar2 from "components/Sidebar2";

const DashboardApplicationsHistoryPage = () => {
  const tableData = React.useRef([
    {
      seven: "1",
      companyname: "Nomad",
      roles: "Social Media Assistant",
      dateapplied: "24 July 2021",
      status: "images/img_icon_16.svg",
    },
    {
      seven: "2",
      companyname: "Udacity",
      roles: "Social Media Assistant",
      dateapplied: "20 July 2021",
      status: "images/img_icon_16.svg",
    },
    {
      seven: "3",
      companyname: "Packer",
      roles: "Social Media Assistant",
      dateapplied: "16 July 2021",
      status: "images/img_icon_16.svg",
    },
    {
      seven: "4",
      companyname: "Divvy",
      roles: "Social Media Assistant",
      dateapplied: "14 July 2021",
      status: "images/img_icon_16.svg",
    },
    {
      seven: "5",
      companyname: "DigitalOcean",
      roles: "Social Media Assistant",
      dateapplied: "10 July 2021",
      status: "images/img_icon_16.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("seven", {
        cell: (info) => (
          <Text className="pl-6 pr-[35px] sm:px-5 py-[33px] text-base text-blue_gray-900">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text className="font-medium min-w-[80px] pb-[26px] pl-6 pr-[35px] pt-[3px] sm:px-5 text-base text-gray-900_87">
            #
          </Text>
        ),
      }),
      tableColumnHelper.accessor("companyname", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center md:pr-10 sm:pr-5 pr-[118px]">
            <Img
              className="h-10 w-10"
              src="images/img_television_teal_300.svg"
              alt="television_One"
            />
            <Text className="text-base text-blue_gray-900">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text className="font-medium min-w-[221px] pb-[25px] pt-1 text-base text-center text-gray-900_87">
            Company Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("roles", {
        cell: (info) => (
          <Text className="py-[33px] text-base text-blue_gray-900">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text className="font-medium min-w-[275px] pb-[26px] pt-[3px] text-base text-gray-900_87">
            Roles
          </Text>
        ),
      }),
      tableColumnHelper.accessor("dateapplied", {
        cell: (info) => (
          <Text className="pb-8 pt-[35px] text-base text-blue_gray-900">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text className="font-medium min-w-[194px] pb-[25px] pt-1 text-base text-gray-900_87">
            Date Applied
          </Text>
        ),
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row font-epilogue items-center justify-between sm:pr-5 pr-[27px] py-[27px]">
            <Button className="border border-solid border-yellow-700 cursor-pointer font-semibold min-w-[85px] py-[9px] rounded-[17px] text-center text-sm text-yellow-700">
              In Review
            </Button>
            <Img
              className="h-6 mr-[37px] w-6"
              alt="icon_Five"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text className="font-medium min-w-[334px] pb-[26px] pt-[3px] text-base text-gray-900_87">
            Status
          </Text>
        ),
      }),
    ];
  }, []);

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
          src="images/img_icon_19.svg"
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
        <Sidebar2 className="!sticky !w-[272px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs3 top-[0]" />
        <div className="flex flex-1 flex-col font-clashdisplayvariable h-[1160px] md:h-auto items-center justify-start md:px-5 w-full">
          <C21DashboardApplicantTopnav
            className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-8 sm:px-5 shadow-bs1 w-full"
            dashboardtext="My Applications"
          />
          <C21DashboardApplicantRowgoodmorningjakeOne
            className="bg-white-A700 flex sm:flex-col flex-row font-epilogue md:gap-10 items-center justify-between max-w-[1168px] p-8 sm:px-5 w-full"
            greetingtext="Keep it up, Jake"
            jobapplicationstext="Here is job applications status from July 19 - July 25."
          />
          <C23DashboardApplicationsHistoryAnnouncements className="bg-gray-50_03 flex md:flex-col flex-row font-inter md:gap-5 items-start justify-end p-4 w-[95%] md:w-full" />
          <div className="flex flex-col font-epilogue gap-6 items-center justify-start pt-8 w-auto md:w-full">
            <C23DashboardApplicationsHistoryTabs
              className="bg-white-A700 flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1168px] sm:pl-5 pl-8 shadow-bs1 w-full"
              allfortyfive={
                <Text className="font-semibold text-base text-blue_gray-900 w-auto">
                  <span className="text-blue_gray-900 font-epilogue text-left">
                    All{" "}
                  </span>
                  <span className="text-blue_gray-400 font-epilogue text-left">
                    (
                  </span>
                  <span className="text-indigo-A700 font-epilogue text-left">
                    45
                  </span>
                  <span className="text-blue_gray-400 font-epilogue text-left">
                    )
                  </span>
                </Text>
              }
            />
            <C23DashboardApplicationsHistoryColumnapplicationshisOne className="bg-white-A700 flex flex-col gap-6 items-center justify-center py-6 w-auto md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApplicationsHistoryPage;
