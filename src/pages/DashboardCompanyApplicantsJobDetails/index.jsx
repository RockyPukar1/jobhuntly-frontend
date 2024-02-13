import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import C15JobDescriptionsColumnperksbenefits from "components/C15JobDescriptionsColumnperksbenefits";
import C26DashboardJobDescriptionsRowdescription from "components/C26DashboardJobDescriptionsRowdescription";
import C29DashboardSettingsAccountSettingsTabs from "components/C29DashboardSettingsAccountSettingsTabs";
import C310DashboardCompanyApplicantsTableViewTopnav from "components/C310DashboardCompanyApplicantsTableViewTopnav";
import C312DashboardCompanyApplicantsJobDetailsRoweditJobDetails from "components/C312DashboardCompanyApplicantsJobDetailsRoweditJobDetails";
import C31DashboardCompanyTopnav from "components/C31DashboardCompanyTopnav";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardCompanyApplicantsJobDetailsPage = () => {
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
          src="images/img_icon_30.svg"
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
            <div className="flex flex-col font-epilogue items-center justify-start mt-[453px] pb-3 w-full">
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
        <div className="flex flex-1 flex-col font-epilogue items-center justify-start md:px-5 w-full">
          <C31DashboardCompanyTopnav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1167px] sm:px-5 px-8 py-4 shadow-bs1 w-full" />
          <C310DashboardCompanyApplicantsTableViewTopnav
            className="bg-white-A700 flex sm:flex-col flex-row font-clashdisplayvariable gap-6 items-center justify-between max-w-[1168px] sm:px-5 px-8 py-6 w-full"
            hiredtext={
              <Text className="text-blue_gray-900 text-xl w-auto">
                <span className="text-blue_gray-900 font-epilogue text-left font-normal">
                  4 /{" "}
                </span>
                <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                  11 Hired
                </span>
              </Text>
            }
          />
          <C29DashboardSettingsAccountSettingsTabs
            className="bg-white-A700 flex flex-row font-epilogue gap-10 items-start justify-start max-w-[1104px] shadow-bs1 w-full"
            profiletext="Applicants"
            logintext="Job Details"
            notificationstext="Analytics"
          />
          <div className="flex flex-col font-clashdisplayvariable items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start pt-8 sm:px-5 px-8 w-full">
              <C312DashboardCompanyApplicantsJobDetailsRoweditJobDetails className="bg-white-A700 border border-gray-300_01 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between p-6 sm:px-5 w-full" />
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCompanyApplicantsJobDetailsPage;
