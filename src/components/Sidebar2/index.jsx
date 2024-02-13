import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar2 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
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
              fontFamily: "Inter",
              [`&:hover, &.ps-active`]: {
                color: "#4640de",
                backgroundColor: "#e9ebfdff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-end mb-[22px] mt-[18px] pt-3.5 px-4 w-[89%]"
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
          <div className="flex flex-col items-center justify-start mt-[483px] pb-[33px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
              }
            >
              <Text className="font-epilogue font-semibold text-gray-900 text-lg">
                Jake Gyll
              </Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
