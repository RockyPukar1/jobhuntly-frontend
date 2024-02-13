import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import C29DashboardSettingsAccountSettingsTabs from "components/C29DashboardSettingsAccountSettingsTabs";
import C310DashboardCompanyApplicantsTableViewTopnav from "components/C310DashboardCompanyApplicantsTableViewTopnav";
import C313DashboardCompanyAnalyticsCarddashboard from "components/C313DashboardCompanyAnalyticsCarddashboard";
import C313DashboardCompanyAnalyticsCarddashboard1 from "components/C313DashboardCompanyAnalyticsCarddashboard1";
import C313DashboardCompanyAnalyticsColumnvisitorsbycountOne from "components/C313DashboardCompanyAnalyticsColumnvisitorsbycountOne";
import C313DashboardCompanyAnalyticsTrafficchannel from "components/C313DashboardCompanyAnalyticsTrafficchannel";
import C31DashboardCompanyTopnav from "components/C31DashboardCompanyTopnav";

import "react-circular-progressbar/dist/styles.css";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardCompanyAnalyticsPage = () => {
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
            <div className="flex flex-col font-epilogue items-center justify-start mt-[307px] pb-[33px] w-full">
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
        <div className="flex flex-1 flex-col font-epilogue items-start justify-start md:px-5 w-full">
          <C31DashboardCompanyTopnav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1167px] sm:px-5 px-8 py-4 shadow-bs1 w-full" />
          <div className="flex flex-col font-clashdisplayvariable items-center justify-start w-full">
            <C310DashboardCompanyApplicantsTableViewTopnav
              className="bg-white-A700 flex sm:flex-col flex-row gap-6 items-center justify-between sm:px-5 px-8 py-6 w-full"
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
            <div className="flex md:flex-col flex-row font-epilogue gap-6 items-start justify-start sm:px-5 px-8 py-6 w-full">
              <div className="flex flex-1 flex-col gap-6 h-full items-start justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                  orientation="horizontal"
                >
                  <C313DashboardCompanyAnalyticsCarddashboard className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-4 w-full" />
                  <C313DashboardCompanyAnalyticsCarddashboard
                    className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-4 w-full"
                    totalviews="Total Applied"
                    p23564="132"
                    sixtyfour="0.4%"
                    iconOne="images/img_icon_deep_orange_400_20x20.svg"
                  />
                </List>
                <C313DashboardCompanyAnalyticsCarddashboard1 className="bg-white-A700 flex flex-col font-clashdisplayvariable gap-6 h-full items-start justify-start outline outline-[1px] outline-gray-300 pb-6 w-full" />
              </div>
              <div className="flex flex-col font-clashdisplayvariable gap-6 items-start justify-start w-auto">
                <C313DashboardCompanyAnalyticsTrafficchannel
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[22px] sm:px-5 w-full"
                  directfortyeight={
                    <Text className="text-base text-blue_gray-400 w-auto">
                      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                        Direct :{" "}
                      </span>
                      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
                        48%
                      </span>
                    </Text>
                  }
                  organictwentyfour={
                    <Text className="text-base text-blue_gray-400 w-auto">
                      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                        Organic :{" "}
                      </span>
                      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
                        24%
                      </span>
                    </Text>
                  }
                  socialtwentythree={
                    <Text className="text-base text-blue_gray-400 w-auto">
                      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                        Social :{" "}
                      </span>
                      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
                        23%
                      </span>
                    </Text>
                  }
                  otherfive={
                    <Text className="text-base text-blue_gray-400 w-auto">
                      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
                        Other :{" "}
                      </span>
                      <span className="text-blue_gray-900 font-epilogue text-left font-semibold">
                        5%
                      </span>
                    </Text>
                  }
                />
                <C313DashboardCompanyAnalyticsColumnvisitorsbycountOne className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-3.5 items-start justify-center p-[15px] w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCompanyAnalyticsPage;
