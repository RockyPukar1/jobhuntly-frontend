import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";

const C39DashboardCompanyJobListingColumnjoblistinglist = (props) => {
  const table4Data = React.useRef([
    {
      roles: "Social Media Assistant",
      status: "Live",
      dateposted: "20 May 2020",
      duedate: "24 May 2020",
      jobtype: "Fulltime",
      applicants: "19",
      needs: "images/img_icon_16.svg",
    },
    {
      roles: "Senior Designer",
      status: "Live",
      dateposted: "16 May 2020",
      duedate: "24 May 2020",
      jobtype: "Fulltime",
      applicants: "1,234",
      needs: "images/img_icon_16.svg",
    },
    {
      roles: "Visual Designer",
      status: "Live",
      dateposted: "15 May 2020",
      duedate: "24 May 2020",
      jobtype: "Freelance",
      applicants: "2,435",
      needs: "images/img_icon_16.svg",
    },
    {
      roles: "Data Sience",
      status: "Closed",
      dateposted: "13 May 2020",
      duedate: "24 May 2020",
      jobtype: "Freelance",
      applicants: "6,234",
      needs: "images/img_icon_16.svg",
    },
    {
      roles: "Kotlin Developer",
      status: "Closed",
      dateposted: "12 May 2020",
      duedate: "24 May 2020",
      jobtype: "Fulltime",
      applicants: "12",
      needs: "images/img_icon_16.svg",
    },
    {
      roles: "React Developer",
      status: "Closed",
      dateposted: "11 May 2020",
      duedate: "24 May 2020",
      jobtype: "Fulltime",
      applicants: "14",
      needs: "images/img_icon_16.svg",
    },
    {
      roles: "Kotlin Developer",
      status: "Closed",
      dateposted: "12 May 2020",
      duedate: "24 May 2020",
      jobtype: "Fulltime",
      applicants: "12",
      needs: "images/img_icon_16.svg",
    },
  ]);
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("roles", {
        cell: (info) => (
          <Text
            className="pb-[34px] sm:pl-5 pl-[26px] pt-[30px] text-base text-blue_gray-900"
            size="txtEpilogueMedium16Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[282px] sm:pl-5 pl-[25px] py-[26px] text-base text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.rolestext}
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-6 py-6">
            <Button
              className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[79px] text-center text-sm"
              shape="round"
              color="teal_300"
              size="md"
              variant="outline"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[118px] pl-[3px] py-[26px] text-base text-center text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.statustext}
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("dateposted", {
        cell: (info) => (
          <Text
            className="pb-[29px] pt-8 text-base text-blue_gray-900"
            size="txtInterRegular16Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[156px] py-[26px] text-base text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.datepostedtext}
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("duedate", {
        cell: (info) => (
          <Text
            className="pb-[29px] pt-8 text-base text-blue_gray-900"
            size="txtInterRegular16Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[156px] py-[26px] text-base text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.duedatetext}
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("jobtype", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-6 py-6">
            <Button
              className="cursor-pointer font-epilogue font-semibold min-w-[97px] text-center text-sm"
              shape="round"
              color="indigo_A700"
              size="md"
              variant="outline"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[136px] pb-[25px] pt-7 text-base text-center text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.jobtypetext}
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("applicants", {
        cell: (info) => (
          <Text
            className="pl-[19px] py-[30px] text-base text-blue_gray-900 text-center"
            size="txtInterRegular16Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[107px] pb-[25px] pt-7 text-base text-center text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.applicantstext}
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("needs", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between p-[15px]">
            {props?.fourhundredeleventext}
            <Img
              className="h-6 mr-[11px] my-3.5 w-6"
              alt="icon_Six"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[144px] pl-3 py-[26px] text-base text-gray-900_87"
            size="txtInterMedium16Gray90087"
          >
            {props?.needstext}
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1040px] w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtEpilogueSemiBold20"
            >
              {props?.joblisttext}
            </Text>
            <Button
              className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[112px]"
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
                {props?.filterbutton}
              </div>
            </Button>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
        </div>
        <div className="overflow-auto w-full">
          <ReactTable
            columns={table4Columns}
            data={table4Data.current}
            rowClass={"odd:bg-white-A700 even:bg-gray-50"}
            headerClass="bg-white-A700"
          />
        </div>
        <div className="flex sm:flex-col flex-row gap-4 items-center justify-between px-4 w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtInterMedium16"
            >
              {props?.view}
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-2 items-center justify-center px-4 py-3 w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_blue_gray_900.svg"
                alt="arrowdown"
              />
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtInterMedium16Bluegray900"
              >
                {props?.captionEight}
              </Text>
            </div>
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtInterMedium16"
            >
              {props?.applicantsperpaOne}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-auto">
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
                {props?.one}
              </Button>
              <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.oneOne}
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
      </div>
    </>
  );
};

C39DashboardCompanyJobListingColumnjoblistinglist.defaultProps = {
  joblisttext: "Job List",
  filterbutton: "Filters",
  rolestext: "Roles",
  statustext: "Status",
  datepostedtext: "Date Posted",
  duedatetext: "Due Date",
  jobtypetext: "Job Type",
  applicantstext: "Applicants",
  needstext: "Needs",
  socialmediaassistanttext: "Social Media Assistant",
  livebutton: "Live",
  datetext: "20 May 2020",
  dateonetext: "24 May 2020",
  fulltimebutton: "Fulltime",
  twohundredthirtyfourtext: "19",
  fourhundredeleventext: (
    <Text
      className="text-base text-blue_gray-900"
      size="txtInterRegular16Bluegray900"
    >
      <span className="text-blue_gray-900 font-inter text-left font-normal">
        4{" "}
      </span>
      <span className="text-blue_gray-200 font-inter text-left font-normal">
        / 11
      </span>
    </Text>
  ),
  seniordesignertext: "Senior Designer",
  liveonebutton: "Live",
  datetwotext: "16 May 2020",
  datethreetext: "24 May 2020",
  fulltimeonebutton: "Fulltime",
  twohundredthirtyfouronetext: "1,234",
  fourhundredelevenonetext: (
    <Text
      className="text-base text-blue_gray-900"
      size="txtInterRegular16Bluegray900"
    >
      <span className="text-blue_gray-900 font-inter text-left font-normal">
        0{" "}
      </span>
      <span className="text-blue_gray-200 font-inter text-left font-normal">
        / 20
      </span>
    </Text>
  ),
  visualdesignertext: "Visual Designer",
  livetwobutton: "Live",
  datefourtext: "15 May 2020",
  datefivetext: "24 May 2020",
  freelancebutton: "Freelance",
  twohundredthirtyfourtwotext: "2,435",
  fourhundredeleventwotext: (
    <Text
      className="text-base text-blue_gray-900"
      size="txtInterRegular16Bluegray900"
    >
      <span className="text-blue_gray-900 font-inter text-left font-normal">
        1{" "}
      </span>
      <span className="text-blue_gray-200 font-inter text-left font-normal">
        / 5
      </span>
    </Text>
  ),
  datasciencetext: "Data Sience",
  closedbutton: "Closed",
  datesixtext: "13 May 2020",
  dateseventext: "24 May 2020",
  freelanceonebutton: "Freelance",
  twohundredthirtyfourthreetext: "6,234",
  fourhundredeleventhreetext: (
    <Text
      className="text-base text-blue_gray-900"
      size="txtInterRegular16Bluegray900"
    >
      <span className="text-blue_gray-900 font-inter text-left font-normal">
        10{" "}
      </span>
      <span className="text-blue_gray-200 font-inter text-left font-normal">
        / 10
      </span>
    </Text>
  ),
  kotlindevelopertext: "Kotlin Developer",
  closedonebutton: "Closed",
  dateeighttext: "12 May 2020",
  dateninetext: "24 May 2020",
  fulltimetwobutton: "Fulltime",
  twohundredthirtyfourfourtext: "12",
  fourhundredelevenfourtext: (
    <Text
      className="text-base text-blue_gray-900"
      size="txtInterRegular16Bluegray900"
    >
      <span className="text-blue_gray-900 font-inter text-left font-normal">
        20{" "}
      </span>
      <span className="text-blue_gray-200 font-inter text-left font-normal">
        / 20
      </span>
    </Text>
  ),
  reactdevelopertext: "React Developer",
  closedtwobutton: "Closed",
  datetentext: "11 May 2020",
  dateeleventext: "24 May 2020",
  fulltimethreebutton: "Fulltime",
  twohundredthirtyfourfivetext: "14",
  fourhundredelevenfivetext: (
    <Text
      className="text-base text-blue_gray-900"
      size="txtInterRegular16Bluegray900"
    >
      <span className="text-blue_gray-900 font-inter text-left font-normal">
        10{" "}
      </span>
      <span className="text-blue_gray-200 font-inter text-left font-normal">
        / 10
      </span>
    </Text>
  ),
  kotlindevelopertext1: "Kotlin Developer",
  closedthreebutton: "Closed",
  datetwelvetext: "12 May 2020",
  datethirteentext: "24 May 2020",
  fulltimefourbutton: "Fulltime",
  twohundredthirtyfoursixtext: "12",
  fourhundredelevensixtext: (
    <Text
      className="text-base text-blue_gray-900"
      size="txtInterRegular16Bluegray900"
    >
      <span className="text-blue_gray-900 font-inter text-left font-normal">
        20{" "}
      </span>
      <span className="text-blue_gray-200 font-inter text-left font-normal">
        / 20
      </span>
    </Text>
  ),
  view: "View",
  captionEight: "10",
  applicantsperpaOne: "Applicants per page",
  one: "1",
  oneOne: "2",
};

export default C39DashboardCompanyJobListingColumnjoblistinglist;
