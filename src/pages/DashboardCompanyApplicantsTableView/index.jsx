import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import C29DashboardSettingsAccountSettingsTabs from "components/C29DashboardSettingsAccountSettingsTabs";
import C310DashboardCompanyApplicantsTableViewColumnfullname from "components/C310DashboardCompanyApplicantsTableViewColumnfullname";
import C310DashboardCompanyApplicantsTableViewTopnav from "components/C310DashboardCompanyApplicantsTableViewTopnav";
import C31DashboardCompanyTopnav from "components/C31DashboardCompanyTopnav";
import C34DashboardCompanyAllApplicantsRowtotalapplicantsOne from "components/C34DashboardCompanyAllApplicantsRowtotalapplicantsOne";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardCompanyApplicantsTableViewPage = () => {
  const table2Data = React.useRef([
    {
      rowfullname: "Jake Gyll",
      rowscore: "0.0",
      rowhiringstage: "In Review",
      rowapplieddate: "13 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Guy Hawkins",
      rowscore: "0.0",
      rowhiringstage: "In Review",
      rowapplieddate: "13 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Cyndy Lillibridge",
      rowscore: "4.5",
      rowhiringstage: "Shortlisted",
      rowapplieddate: "12 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Rodolfo Goode",
      rowscore: "3.75",
      rowhiringstage: "Declined",
      rowapplieddate: "11 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Leif Floyd",
      rowscore: "4.8",
      rowhiringstage: "Hired",
      rowapplieddate: "11 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Jenny Wilson",
      rowscore: "4.6",
      rowhiringstage: "Hired",
      rowapplieddate: "9 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Jerome Bell",
      rowscore: "4.0",
      rowhiringstage: "Interview",
      rowapplieddate: "5 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Eleanor Pena",
      rowscore: "3.90",
      rowhiringstage: "Declined",
      rowapplieddate: "5 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Darrell Steward",
      rowscore: "4.20",
      rowhiringstage: "Shortlisted",
      rowapplieddate: "3 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
    {
      rowfullname: "Floyd Miles",
      rowscore: "4.10",
      rowhiringstage: "Interview",
      rowapplieddate: "1 July, 2021",
      rowaction: "images/img_icon_16.svg",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("row", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start p-4 sm:w-full">
            <CheckBox
              className="my-[11px]"
              inputClassName="border-2 border-gray-300 border-solid mr-[5px] rounded"
              name="checkboxfalse_One"
              id="checkboxfalse_One"
            ></CheckBox>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[64px] p-4 sm:w-full">
            <CheckBox
              className=""
              inputClassName="border-2 border-gray-300 border-solid mr-[5px] rounded"
              name="checkboxfalse"
              id="checkboxfalse"
            ></CheckBox>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowfullname", {
        cell: (info) => (
          <div className="flex flex-row gap-4 items-center justify-center pr-[19px] py-[19px]">
            <Img
              className="h-10 md:h-auto object-cover w-10"
              src="images/img_avatar.png"
              alt="avatar_One"
            />
            <Text className="font-medium mr-[93px] text-base text-blue_gray-900">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center min-w-[238px] pr-[18px] py-[18px]">
            <Text className="text-base text-blue_gray-400">Full Name</Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowscore", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-start justify-center">
            <Img
              className="h-6 w-6"
              src="images/img_icon_17.svg"
              alt="icon_Six"
            />
            <Text className="font-medium mr-[116px] text-base text-blue_gray-900">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center min-w-[172px] pr-[18px] py-[18px]">
            <Text className="text-base text-blue_gray-400">Score</Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_One"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowhiringstage", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-[22px] py-[22px]">
            <Button className="border border-solid border-yellow-700 cursor-pointer font-semibold min-w-[85px] py-[9px] rounded-[17px] text-center text-sm text-yellow-700">
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center min-w-[183px] pr-[19px] py-[19px]">
            <Text className="text-base text-blue_gray-400">Hiring Stage</Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Two"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowapplieddate", {
        cell: (info) => (
          <Text className="font-medium py-[30px] text-base text-blue_gray-900">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-start min-w-[205px] pr-[19px] py-[19px]">
            <Text className="text-base text-blue_gray-400">Applied Date</Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Three"
            />
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowaction", {
        cell: (info) => (
          <div className="flex flex-row gap-4 items-center justify-center pr-4 py-4">
            <Button className="bg-indigo-50_01 border border-indigo-A700 border-solid cursor-pointer font-bold min-w-[155px] py-[15px] text-center text-indigo-A700 text-sm">
              See Application
            </Button>
            <Img
              className="h-6 mr-[31px] w-6"
              alt="icon_Seven"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center min-w-[242px] pr-[18px] py-[18px]">
            <Text className="text-base text-blue_gray-400">Action</Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Four"
            />
          </div>
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
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
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
            <div className="flex flex-col font-epilogue items-center justify-start mt-[614px] pb-[33px] w-full">
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
          <div className="flex flex-col font-clashdisplayvariable items-center justify-start pb-10 w-auto md:w-full">
            <C34DashboardCompanyAllApplicantsRowtotalapplicantsOne className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-between max-w-[1168px] sm:px-5 px-8 py-6 w-full" />
            <C310DashboardCompanyApplicantsTableViewColumnfullname className="flex flex-col font-epilogue gap-4 items-start justify-start w-auto md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCompanyApplicantsTableViewPage;
