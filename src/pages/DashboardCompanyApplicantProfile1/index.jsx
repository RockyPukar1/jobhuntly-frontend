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
import C35DashboardCompanyApplicantProfileTopnav from "components/C35DashboardCompanyApplicantProfileTopnav";
import C36DashboardCompanyApplicantProfileColumncaptionNine from "components/C36DashboardCompanyApplicantProfileColumncaptionNine";
import Sidebar3 from "components/Sidebar3";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardCompanyApplicantProfile1Page = () => {
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
          <C35DashboardCompanyApplicantProfileTopnav className="bg-white-A700 flex sm:flex-col flex-row font-clashdisplayvariable gap-6 items-center justify-between max-w-[1168px] sm:px-5 px-8 py-6 w-full" />
          <div className="flex md:flex-col flex-row font-epilogue gap-8 items-start justify-center sm:px-5 px-8 w-auto md:w-full">
            <C35DashboardCompanyApplicantProfileColumnjeromebell className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[21px] items-start justify-start p-6 sm:px-5 w-auto" />
            <C36DashboardCompanyApplicantProfileColumncaptionNine
              className="bg-white-A700 flex flex-col gap-6 h-[859px] md:h-auto items-center justify-start outline outline-[1px] outline-gray-300 pb-6 w-auto md:w-full"
              username={
                <Text className="font-bold leading-[28.00px] mt-3 text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900">
                  <span className="md:text-3xl sm:text-[28px] text-blue_gray-900 font-epilogue text-left text-[32px] font-semibold">
                    <>
                      Jerome Bell
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-900 font-epilogue text-left text-lg font-medium">
                    Product Designer
                  </span>
                </Text>
              }
              userexperience={
                <Text className="font-inter font-medium leading-[18.00px] text-[10px] text-blue_gray-700">
                  <span className="text-blue_gray-400 tracking-[2.00px] font-arial uppercase text-left text-[7px] font-normal">
                    <>
                      experience
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
                    Senior{" "}
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
                    UI/UX{" "}
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
                    <>
                      Product Designer
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      Enterprise name
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
                    <>
                      Aug 2018 - Present - 1 year, Paris
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      Directly collaborated with CEO and Product team to
                      prototype, design and deliver the UI and UX experience
                      with a lean design process: research, design, test, and
                      iterate.
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
                    <>
                      <br />
                      UI/UX Product Designer
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      Enterprise name
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
                    <>
                      Aug 2013 - Aug 2018 - 5 years, Paris
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      Lead the UI design with the accountability of the design
                      system, collaborated with product and development teams on
                      core projects to improve product interfaces and
                      experiences.
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
                    <>
                      <br />
                      UI Designer
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      Enterprise name
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
                    <>
                      Aug 2012 - jul 2013 - 1 year, Paris
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      Designed mobile UI applications for Orange R&D
                      departement, BNP Paribas, La Poste, Le Cned...
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
                    <>
                      Graphic Designer
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      Enterprise name
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
                    <>
                      Sept 2010 - jul 2012 - 2 years, Paris
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      Designed print and web applications for Pau Brasil,
                      Renault,
                      <br />
                      Le théatre du Mantois, La mairie de Mantes la Ville...
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 tracking-[2.00px] font-arial uppercase text-left text-[7px] font-normal">
                    <>
                      education
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
                    <>
                      Bachelor European in Graphic Design
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      School name
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
                    <>
                      2009 - 2010, Bagnolet
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
                    <>
                      BTS Communication Visuelle option Multimédia
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
                    <>
                      School name
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
                    2007 - 2009, Bagnolet
                  </span>
                </Text>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCompanyApplicantProfile1Page;
