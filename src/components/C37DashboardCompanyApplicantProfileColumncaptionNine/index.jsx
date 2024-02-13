import React from "react";

import { Button, Img, Line, Text } from "components";

const C37DashboardCompanyApplicantProfileColumncaptionNine = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[718px] pt-4 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-10 items-start justify-start max-w-[718px] sm:pl-5 pl-6 shadow-bs1 w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captionNine}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captionTen}
              </Text>
            </div>
            <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.captionEleven}
              </Text>
              <Line className="bg-indigo-A700 h-1 w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captionTwelve}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-[782px] md:h-auto items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
            <div className="flex flex-row sm:gap-10 gap-[391px] items-center justify-between w-auto md:w-full">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.currentstage}
              </Text>
              <div className="border border-indigo-100 border-solid flex flex-row gap-2.5 items-center justify-center px-4 py-3 w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowdown_indigo_a700_20x20.svg"
                  alt="arrowdown_Two"
                />
                <Text
                  className="text-base text-center text-indigo-A700 w-auto"
                  size="txtEpilogueBold16"
                >
                  {props?.captionThirteen}
                </Text>
              </div>
            </div>
            <div className="flex relative w-full">
              <div className="flex my-auto w-[76%] sm:w-full">
                <div className="flex my-auto w-[67%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[50px] items-start justify-start my-auto p-3.5"
                    style={{ backgroundImage: "url('images/img_pipe1.svg')" }}
                  >
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[27px] text-base text-blue-500"
                      size="txtEpilogueSemiBold16Blue500"
                    >
                      {props?.inreview}
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-start ml-[-8px] my-auto p-3.5 z-[1]"
                    style={{ backgroundImage: "url('images/img_pipe1.svg')" }}
                  >
                    <Text
                      className="mb-1 text-base text-blue-500"
                      size="txtEpilogueSemiBold16Blue500"
                    >
                      {props?.shortlisted}
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-start ml-[-8px] my-auto p-3.5 z-[1]"
                  style={{ backgroundImage: "url('images/img_pipe3.svg')" }}
                >
                  <Text
                    className="mb-[3px] text-base text-white-A700"
                    size="txtEpilogueSemiBold16WhiteA700"
                  >
                    {props?.interviewOne}
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-start ml-[-8px] my-auto p-3.5 z-[1]"
                style={{ backgroundImage: "url('images/img_pipe4.svg')" }}
              >
                <Text
                  className="mb-[3px] text-base text-blue_gray-400"
                  size="txtEpilogueSemiBold16Bluegray400"
                >
                  {props?.hireddeclined}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.stageinfo}
              </Text>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-between w-[538px] sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.interviewdate}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.p1013july2021}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.interviewlocatiOne}
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[267px] md:max-w-full text-base text-blue_gray-900"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.description}
                    </Text>
                  </div>
                  <Button
                    className="!text-indigo-100 border border-indigo-100 border-solid cursor-pointer font-bold font-epilogue min-w-[200px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="xl"
                    variant="fill"
                  >
                    {props?.moveToNextStep}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-[218px]">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.interviewstatusOne}
                    </Text>
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[106px] text-center text-sm"
                      shape="round"
                      color="yellow_900_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.onProgress}
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.assignedto}
                    </Text>
                    <div className="flex pr-2 relative w-full">
                      <div className="flex my-auto w-[67%]">
                        <div className="flex flex-col h-10 items-center justify-start my-auto w-10">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_michaeldammez_40x40.png"
                            alt="michaeldammez"
                          />
                        </div>
                        <Img
                          className="h-10 ml-[-16px] my-auto object-cover w-10 z-[1]"
                          src="images/img_avatar.png"
                          alt="avatar_One"
                        />
                      </div>
                      <Img
                        className="h-10 ml-[-16px] my-auto object-cover w-10 z-[1]"
                        src="images/img_avatar.png"
                        alt="avatar_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between max-w-2xl w-full">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.notes}
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-center px-4 py-3 w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_indigo_a700_40x40.svg"
                  alt="icon_Seven"
                />
                <Text
                  className="text-base text-center text-indigo-A700 w-auto"
                  size="txtEpilogueBold16"
                >
                  {props?.captionFourteen}
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row gap-4 items-start justify-start max-w-2xl p-4 w-full">
              <Img
                className="h-10 md:h-auto object-cover w-10"
                src="images/img_avatar.png"
                alt="avatar_Three"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueSemiBold16Bluegray900"
                  >
                    {props?.interviewername}
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtEpilogueRegular14"
                    >
                      {props?.interviewdate1}
                    </Text>
                    <div className="bg-gray-400 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtEpilogueRegular14"
                    >
                      {props?.interviewtime}
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[573px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.interviewdescription}
                </Text>
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueSemiBold16IndigoA700"
                >
                  {props?.repliescounter}
                </Text>
              </div>
            </div>
            <div className="h-20 md:h-[72px] p-4 relative w-[672px] md:w-full">
              <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col h-full inset-[0] items-start justify-start m-auto max-w-2xl p-4 w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_avatar.png"
                  alt="avatar_Four"
                />
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-2 items-start justify-start right-[2%] w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueSemiBold16Bluegray900"
                  >
                    {props?.interviewername1}
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtEpilogueRegular14"
                    >
                      {props?.interviewdate2}
                    </Text>
                    <div className="bg-gray-400 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtEpilogueRegular14"
                    >
                      {props?.interviewtime1}
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.interviewdescription1}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C37DashboardCompanyApplicantProfileColumncaptionNine.defaultProps = {
  captionNine: "Applicant Profile",
  captionTen: "Resume",
  captionEleven: "Hiring Progress",
  captionTwelve: "Interview Schedule",
  currentstage: "Current Stage",
  captionThirteen: "Give Rating",
  inreview: "In-Review",
  shortlisted: "Shortlisted",
  interviewOne: "Interview",
  hireddeclined: "Hired / Declined",
  stageinfo: "Stage Info",
  interviewdate: "Interview Date",
  p1013july2021: "10 - 13 July 2021",
  interviewlocatiOne: "Interview Location",
  description: (
    <>
      Silver Crysta Room, Nomad Office
      <br /> 3517 W. Gray St. Utica, Pennsylvania 57867
    </>
  ),
  moveToNextStep: "Move To Next Step",
  interviewstatusOne: "Interview Status",
  onProgress: "On Progress",
  assignedto: "Assigned to",
  notes: "Notes",
  captionFourteen: "Add Notes",
  interviewername: "Maria Kelly",
  interviewdate1: "10 July, 2021",
  interviewtime: "11:30 AM",
  interviewdescription:
    "Please, do an interview stage immediately. The design division needs more new employee now",
  repliescounter: "2 Replies",
  interviewername1: "Maria Kelly",
  interviewdate2: "10 July, 2021",
  interviewtime1: "10:30 AM",
  interviewdescription1: "Please, do an interview stage immediately. ",
};

export default C37DashboardCompanyApplicantProfileColumncaptionNine;
