import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, CheckBox, Img, ReactTable, Text } from "components";

const C310DashboardCompanyApplicantsTableViewColumnfullname = (props) => {
  const table5Data = React.useRef([
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
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper();
    return [
      table5ColumnHelper.accessor("row", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start p-4 sm:w-full">
            <CheckBox
              className="my-[11px]"
              inputClassName="mr-[5px] rounded"
              name="checkboxfalse_One"
              id="checkboxfalse_One"
              shape="round"
              color="gray_300"
              variant="outline"
            ></CheckBox>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[64px] p-4 sm:w-full">
            <CheckBox
              className=""
              inputClassName="mr-[5px] rounded"
              name="checkboxfalse"
              id="checkboxfalse"
              shape="round"
              color="gray_300"
              variant="outline"
            ></CheckBox>
          </div>
        ),
      }),
      table5ColumnHelper.accessor("rowfullname", {
        cell: (info) => (
          <div className="flex flex-row gap-4 items-center justify-center pr-[19px] py-[19px]">
            <Img
              className="h-10 md:h-auto object-cover w-10"
              src="images/img_avatar.png"
              alt="avatar_One"
            />
            <Text
              className="mr-[93px] text-base text-blue_gray-900"
              size="txtEpilogueMedium16Bluegray900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center min-w-[238px] pr-[18px] py-[18px]">
            <Text
              className="text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.fullname}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close"
            />
          </div>
        ),
      }),
      table5ColumnHelper.accessor("rowscore", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-start justify-center">
            <Img
              className="h-6 w-6"
              src="images/img_icon_17.svg"
              alt="icon_Six"
            />
            <Text
              className="mr-[116px] text-base text-blue_gray-900"
              size="txtEpilogueMedium16Bluegray900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center min-w-[172px] pr-[18px] py-[18px]">
            <Text
              className="text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.score}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_One"
            />
          </div>
        ),
      }),
      table5ColumnHelper.accessor("rowhiringstage", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-[22px] py-[22px]">
            <Button
              className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[85px] text-center text-sm"
              shape="round"
              color="yellow_700"
              size="md"
              variant="outline"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center min-w-[183px] pr-[19px] py-[19px]">
            <Text
              className="text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.hiringstage}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Two"
            />
          </div>
        ),
      }),
      table5ColumnHelper.accessor("rowapplieddate", {
        cell: (info) => (
          <Text
            className="py-[30px] text-base text-blue_gray-900"
            size="txtEpilogueMedium16Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2 items-center justify-start min-w-[205px] pr-[19px] py-[19px]">
            <Text
              className="text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.applieddate}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Three"
            />
          </div>
        ),
      }),
      table5ColumnHelper.accessor("rowaction", {
        cell: (info) => (
          <div className="flex flex-row gap-4 items-center justify-center pr-4 py-4">
            <Button
              className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
              shape="square"
              color="indigo_50_01"
              size="xl"
              variant="fill"
            >
              {props?.seeApplication}
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
            <Text
              className="text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.action}
            </Text>
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

  return (
    <>
      <div className={props.className}>
        <div className="overflow-auto w-full">
          <ReactTable
            columns={table5Columns}
            data={table5Data.current}
            rowClass={"odd:bg-gray-50 even:bg-white-A700"}
            headerClass="bg-white-A700 border border-gray-300"
          />
        </div>
        <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtInterMedium16"
            >
              {props?.viewTwo}
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-2 items-center justify-center px-4 py-3 w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_blue_gray_900.svg"
                alt="arrowdown_Two"
              />
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtInterMedium16Bluegray900"
              >
                {props?.captionTwelve}
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

C310DashboardCompanyApplicantsTableViewColumnfullname.defaultProps = {
  fullname: "Full Name",
  score: "Score",
  hiringstage: "Hiring Stage",
  applieddate: "Applied Date",
  action: "Action",
  jakegyll: "Jake Gyll",
  forty: "0.0",
  inReview: "In Review",
  p13july2021: "13 July, 2021",
  seeApplication: "See Application",
  jakegyllOne: "Guy Hawkins",
  fortyOne: "0.0",
  inReviewOne: "In Review",
  p13july2021one: "13 July, 2021",
  seeApplicationOne: "See Application",
  jakegyllTwo: "Cyndy Lillibridge",
  fortyTwo: "4.5",
  shortlisted: "Shortlisted",
  p13july2021two: "12 July, 2021",
  seeApplicationTwo: "See Application",
  jakegyllThree: "Rodolfo Goode",
  fortyThree: "3.75",
  declined: "Declined",
  p13july2021three: "11 July, 2021",
  seeApplicationThree: "See Application",
  jakegyllFour: "Leif Floyd",
  fortyFour: "4.8",
  hired: "Hired",
  p13july2021four: "11 July, 2021",
  seeApplicationFour: "See Application",
  jakegyllFive: "Jenny Wilson",
  fortyFive: "4.6",
  hiredOne: "Hired",
  p13july2021five: "9 July, 2021",
  seeApplicationFive: "See Application",
  jakegyllSix: "Jerome Bell",
  fortySix: "4.0",
  interview: "Interview",
  p13july2021six: "5 July, 2021",
  seeApplicationSix: "See Application",
  jakegyllSeven: "Eleanor Pena",
  fortySeven: "3.90",
  declinedOne: "Declined",
  p13july2021seven: "5 July, 2021",
  seeApplicationSeven: "See Application",
  jakegyllEight: "Darrell Steward",
  fortyEight: "4.20",
  shortlistedOne: "Shortlisted",
  p13july2021eight: "3 July, 2021",
  seeApplicationEight: "See Application",
  jakegyllNine: "Floyd Miles",
  fortyNine: "4.10",
  interviewOne: "Interview",
  p13july2021nine: "1 July, 2021",
  seeApplicationNine: "See Application",
  viewTwo: "View",
  captionTwelve: "10",
  applicantsperpaOne: "Applicants per page",
  one: "1",
  oneOne: "2",
};

export default C310DashboardCompanyApplicantsTableViewColumnfullname;
