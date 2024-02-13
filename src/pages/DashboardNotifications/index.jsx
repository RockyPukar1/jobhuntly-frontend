import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import C213DashboardNotificationsColumnnotifications from "components/C213DashboardNotificationsColumnnotifications";
import C21DashboardApplicantCarddashboard from "components/C21DashboardApplicantCarddashboard";
import C21DashboardApplicantCarddashboard1 from "components/C21DashboardApplicantCarddashboard1";
import C21DashboardApplicantCarddashboard2 from "components/C21DashboardApplicantCarddashboard2";
import C21DashboardApplicantCarddashboard3 from "components/C21DashboardApplicantCarddashboard3";
import C21DashboardApplicantColumnrecentapplicatiOne from "components/C21DashboardApplicantColumnrecentapplicatiOne";
import C21DashboardApplicantRowgoodmorningjakeOne from "components/C21DashboardApplicantRowgoodmorningjakeOne";
import C21DashboardApplicantTopnav from "components/C21DashboardApplicantTopnav";
import Sidebar2 from "components/Sidebar2";

const DashboardNotificationsPage = () => {
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
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar2 className="!sticky !w-[272px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs3 top-[0]" />
        <div className="flex-1 font-clashdisplayvariable h-[1159px] sm:h-[1197px] md:h-[2503px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <C21DashboardApplicantTopnav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-8 sm:px-5 shadow-bs1 w-full" />
              <C21DashboardApplicantRowgoodmorningjakeOne
                className="bg-white-A700 flex md:flex-col flex-row font-epilogue md:gap-10 items-center justify-between max-w-[1168px] p-8 sm:px-5 w-full"
                datetext="Jul 19 - Jul 25"
                calendaricon="images/img_icon_calendar.svg"
              />
              <div className="flex md:flex-col flex-row font-epilogue gap-6 items-start justify-start pb-8 sm:px-5 px-8 w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <C21DashboardApplicantCarddashboard className="bg-white-A700 border border-gray-300 border-solid md:h-[122px] h-[158px] pt-[22px] sm:px-5 px-[22px] relative w-full" />
                  <C21DashboardApplicantCarddashboard1 className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end pt-[22px] sm:px-5 px-[22px] w-full" />
                </div>
                <C21DashboardApplicantCarddashboard2 className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[43px] items-start justify-end p-6 sm:px-5 w-[32%] md:w-full" />
                <C21DashboardApplicantCarddashboard3
                  className="bg-white-A700 border border-gray-300 border-solid font-inter md:h-[269px] h-[340px] sm:h-[367px] pb-6 relative w-[41%] md:w-full"
                  datetext={
                    <Text className="font-semibold text-gray-900 text-xl w-auto">
                      <span className="text-gray-900 font-inter text-left">
                        Today,{" "}
                      </span>
                      <span className="text-gray-900 font-inter text-left font-normal">
                        26 November
                      </span>
                    </Text>
                  }
                />
              </div>
              <div className="flex flex-col font-epilogue items-start justify-start pb-8 sm:px-5 px-8 w-auto md:w-full">
                <C21DashboardApplicantColumnrecentapplicatiOne
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end py-6 w-full"
                  caption="In Review"
                />
              </div>
            </div>
          </div>
          <C213DashboardNotificationsColumnnotifications
            className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col font-epilogue gap-6 items-center justify-start py-6 right-[3%] shadow-bs4 top-[9%] w-auto"
            janmayerinvitedOne={
              <Text className="font-semibold text-base text-blue_gray-900 w-full">
                <span className="text-blue_gray-900 font-epilogue text-left">
                  Jan Mayer{" "}
                </span>
                <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                  invited you to interview with Nomad
                </span>
              </Text>
            }
            janaaliciafrom={
              <Text className="font-semibold leading-[160.00%] max-w-[402px] md:max-w-full text-base text-blue_gray-900">
                <span className="text-blue_gray-900 font-epilogue text-left">
                  Jana Alicia
                </span>
                <span className="text-gray-900_b2 font-epilogue text-left font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                  from Udacity updated your job applications status
                </span>
              </Text>
            }
            allywalesfrom={
              <Text className="leading-[160.00%] max-w-[334px] md:max-w-full text-base text-blue_gray-900">
                <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
                  Ally Wales
                </span>
                <span className="text-blue_gray-900 font-epilogue text-left font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-700 font-epilogue text-left font-normal">
                  from Digital Ocean sent you an interview invitation
                </span>
              </Text>
            }
          />
        </div>
      </div>
    </>
  );
};

export default DashboardNotificationsPage;
