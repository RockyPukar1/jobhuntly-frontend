import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";
import C31DashboardCompanyTopnav from "components/C31DashboardCompanyTopnav";
import C35DashboardCompanyApplicantProfileColumnjeromebell from "components/C35DashboardCompanyApplicantProfileColumnjeromebell";
import C38DashboardCompanyApplicantProfileColumncaptionNine from "components/C38DashboardCompanyApplicantProfileColumncaptionNine";
import Sidebar3 from "components/Sidebar3";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardCompanyApplicantProfile3Page = () => {
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
          src="images/img_icon_29.svg"
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

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay gap-px items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar3 className="!sticky !w-[272px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs3 top-[0]" />
        <div className="flex flex-1 flex-col font-epilogue items-start justify-start md:px-5 w-full">
          <C31DashboardCompanyTopnav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1167px] sm:px-5 px-8 py-4 shadow-bs1 w-full" />
          <div className="flex sm:flex-col flex-row font-clashdisplayvariable gap-6 items-center justify-between max-w-[1168px] sm:px-5 px-8 py-6 w-full">
            <div className="flex flex-row gap-6 items-center justify-start w-auto">
              <Img
                className="h-10 w-10"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                Applicant Details
              </Text>
            </div>
            <div className="border border-indigo-100 border-solid flex flex-row font-epilogue gap-2.5 items-center justify-center px-4 py-3 w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_arrowdown_indigo_a700_20x20.svg"
                alt="arrowdown_One"
              />
              <Text
                className="text-base text-center text-indigo-A700 w-auto"
                size="txtEpilogueBold16"
              >
                More Action
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-epilogue gap-8 items-start justify-center sm:px-5 px-8 w-auto md:w-full">
            <C35DashboardCompanyApplicantProfileColumnjeromebell className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[21px] items-start justify-start p-6 sm:px-5 w-auto" />
            <C38DashboardCompanyApplicantProfileColumncaptionNine className="bg-white-A700 flex flex-col gap-6 h-[859px] md:h-auto items-center justify-start outline outline-[1px] outline-gray-300 pb-6 w-auto md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCompanyApplicantProfile3Page;
