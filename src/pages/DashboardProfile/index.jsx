import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import C21DashboardApplicantTopnav from "components/C21DashboardApplicantTopnav";
import C28DashboardProfileColumnaboutme from "components/C28DashboardProfileColumnaboutme";
import C28DashboardProfileColumneducations from "components/C28DashboardProfileColumneducations";
import C28DashboardProfileColumnexperiences from "components/C28DashboardProfileColumnexperiences";
import C28DashboardProfileColumnportfolios from "components/C28DashboardProfileColumnportfolios";
import C28DashboardProfileColumnskills from "components/C28DashboardProfileColumnskills";
import C28DashboardProfileListadditionaldetaiOne from "components/C28DashboardProfileListadditionaldetaiOne";
import C28DashboardProfileStackbenmaguirefty from "components/C28DashboardProfileStackbenmaguirefty";

const DashboardProfilePage = () => {
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
          className="!sticky !w-[272px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
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
            className="flex flex-col font-inter items-center justify-start mb-[46px] mt-[18px] pt-3.5 px-4 w-[89%]"
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
                      src="images/img_search.svg"
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
            <div className="flex flex-col font-epilogue gap-[26px] items-center justify-start mt-[764px] pb-[9px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-6 mb-0.5 w-6"
                    src="images/img_television_deep_orange_400.svg"
                    alt="television_One"
                  />
                }
              >
                <Text className="mt-[3px] text-deep_orange-400">Logout</Text>
              </MenuItem>
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
            dashboardtext="My Profile"
          />
          <div className="flex md:flex-col flex-row font-epilogue gap-6 items-start justify-start p-8 sm:px-5 w-auto md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start max-w-[730px] w-full">
              <C28DashboardProfileStackbenmaguirefty
                className="bg-white-A700 border border-gray-300 border-solid flex flex-col pb-6 relative w-[728px] md:w-full"
                designationtext={
                  <Text className="font-epilogue text-gray-900 text-lg w-auto">
                    <span className="text-blue_gray-400 text-left font-normal">
                      Product Designer at
                    </span>
                    <span className="text-gray-900 text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-blue_gray-900 text-left font-medium">
                      Twitter
                    </span>
                  </Text>
                }
              />
              <C28DashboardProfileColumnaboutme className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-auto md:w-full" />
              <C28DashboardProfileColumnexperiences className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start py-6 w-full" />
              <C28DashboardProfileColumneducations className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start py-6 w-full" />
              <C28DashboardProfileColumnskills className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full" />
              <C28DashboardProfileColumnportfolios className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start max-w-[730px] p-6 sm:px-5 w-full" />
            </div>
            <C28DashboardProfileListadditionaldetaiOne className="flex flex-col gap-6 items-start w-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfilePage;
