import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";

const C23DashboardApplicationsHistoryColumnapplicationshisOne = (props) => {
  const table3Data = React.useRef([
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
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("seven", {
        cell: (info) => (
          <Text
            className="pl-6 pr-[35px] sm:px-5 py-[33px] text-base text-blue_gray-900"
            size="txtInterRegular16Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[80px] pb-[26px] pl-6 pr-[35px] pt-[3px] sm:px-5 text-base text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.seven}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("companyname", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center md:pr-10 sm:pr-5 pr-[118px]">
            <Img
              className="h-10 w-10"
              src="images/img_television_teal_300.svg"
              alt="television_One"
            />
            <Text
              className="text-base text-blue_gray-900"
              size="txtInterRegular16Bluegray900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[221px] pb-[25px] pt-1 text-base text-center text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.companyname}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("roles", {
        cell: (info) => (
          <Text
            className="py-[33px] text-base text-blue_gray-900"
            size="txtInterRegular16Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[275px] pb-[26px] pt-[3px] text-base text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.roles}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("dateapplied", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-base text-blue_gray-900"
            size="txtInterRegular16Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[194px] pb-[25px] pt-1 text-base text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.dateapplied}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between sm:pr-5 pr-[27px] py-[27px]">
            <Button
              className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[85px] text-center text-sm"
              shape="round"
              color="yellow_700"
              size="md"
              variant="outline"
            >
              {props?.inReview}
            </Button>
            <Img
              className="h-6 mr-[37px] w-6"
              alt="icon_Five"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[334px] pb-[26px] pt-[3px] text-base text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.status}
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row md:gap-10 gap-[624px] items-center justify-between w-auto md:w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtEpilogueSemiBold20"
          >
            {props?.applicationshisOne}
          </Text>
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Button
              className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[118px]"
              leftIcon={
                <Img
                  className="h-6 mr-2"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
              }
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <div className="!text-blue_gray-900 font-inter font-medium text-base text-left">
                {props?.searchTwo}
              </div>
            </Button>
            <Button
              className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[103px]"
              leftIcon={
                <Img
                  className="h-6 mr-2"
                  src="images/img_icon_20.svg"
                  alt="Icon"
                />
              }
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <div className="!text-blue_gray-900 font-inter font-medium text-base text-left">
                {props?.filter}
              </div>
            </Button>
          </div>
        </div>
        <div className="overflow-auto shadow-bs1 w-full">
          <ReactTable
            columns={table3Columns}
            data={table3Data.current}
            rowClass={"odd:bg-white-A700 even:bg-gray-50"}
            headerClass="bg-white-A700"
          />
        </div>
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
          <Img
            className="h-6 w-6"
            src="images/img_arrowleft_blue_gray_900_24x24.svg"
            alt="arrowleft"
          />
          <div className="flex flex-row items-start justify-start w-auto">
            <Button
              className="cursor-pointer font-inter font-semibold h-[46px] rounded-lg text-base text-center w-[46px]"
              color="indigo_A700"
              size="lg"
              variant="fill"
            >
              {props?.oneFive}
            </Button>
            <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
              <Text
                className="text-base text-blue_gray-700 text-center w-auto"
                size="txtInterSemiBold16"
              >
                {props?.oneSix}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
              <Text
                className="text-base text-blue_gray-700 text-center w-auto"
                size="txtInterSemiBold16"
              >
                {props?.oneSeven}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
              <Text
                className="text-base text-blue_gray-700 text-center w-auto"
                size="txtInterSemiBold16"
              >
                {props?.oneEight}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
              <Text
                className="text-base text-blue_gray-700 text-center w-auto"
                size="txtInterSemiBold16"
              >
                {props?.oneNine}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
              <Text
                className="text-base text-blue_gray-700 text-center w-auto"
                size="txtInterSemiBold16"
              >
                {props?.oneTen}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
              <Text
                className="text-base text-blue_gray-700 text-center w-auto"
                size="txtInterSemiBold16"
              >
                {props?.oneEleven}
              </Text>
            </div>
          </div>
          <Img
            className="h-6 w-[25px]"
            src="images/img_arrowright_blue_gray_900.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

C23DashboardApplicationsHistoryColumnapplicationshisOne.defaultProps = {
  applicationshisOne: "Applications History",
  searchTwo: "Search",
  filter: "Filter",
  seven: "#",
  companyname: "Company Name",
  roles: "Roles",
  dateapplied: "Date Applied",
  status: "Status",
  one: "1",
  nomad: "Nomad",
  socialmediaassiOne: "Social Media Assistant",
  date: "24 July 2021",
  inReview: "In Review",
  oneOne: "2",
  nomadOne: "Udacity",
  socialmediaassiThree: "Social Media Assistant",
  dateOne: "20 July 2021",
  shortlisted: "Shortlisted",
  oneTwo: "3",
  nomadTwo: "Packer",
  socialmediaassiFive: "Social Media Assistant",
  dateTwo: "16 July 2021",
  offered: "Offered",
  oneThree: "4",
  nomadThree: "Divvy",
  socialmediaassiSeven: "Social Media Assistant",
  dateThree: "14 July 2021",
  interviewing: "Interviewing",
  oneFour: "5",
  nomadFour: "DigitalOcean",
  socialmediaassiNine: "Social Media Assistant",
  dateFour: "10 July 2021",
  unsuitable: "Unsuitable",
  oneFive: "1",
  oneSix: "2",
  oneSeven: "3",
  oneEight: "4",
  oneNine: "5",
  oneTen: "...",
  oneEleven: "33",
};

export default C23DashboardApplicationsHistoryColumnapplicationshisOne;
