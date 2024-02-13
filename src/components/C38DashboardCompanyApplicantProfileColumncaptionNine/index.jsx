import React from "react";

import { Img, Input, Line, Text } from "components";

const C38DashboardCompanyApplicantProfileColumncaptionNine = (props) => {
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
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captionEleven}
              </Text>
            </div>
            <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.captionTwelve}
              </Text>
              <Line className="bg-indigo-A700 h-1 w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
          <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[688px] w-full">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.interviewlist}
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
                {props?.captionThirteen}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start max-w-2xl w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtEpilogueRegular14"
              >
                {props?.tomorrow10july}
              </Text>
              <Input
                name="interviewschedu"
                placeholder="Add Feedback"
                className="!placeholder:text-indigo-A700 !text-indigo-A700 font-bold font-epilogue p-0 text-base text-center w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                prefix={
                  <Img
                    className="h-10 mr-[35px] rounded-[20px] my-auto"
                    src="images/img_michaeldammez_40x40.png"
                    alt="michael-dam-mEZ3PoFGs_k-unsplash"
                  />
                }
                suffix={
                  <Img
                    className="h-5 ml-[-146px] my-2.5"
                    src="images/img_edit_indigo_a700_20x20.svg"
                    alt="edit"
                  />
                }
                shape="square"
                color="white_A700"
                size="xl"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtEpilogueRegular14"
              >
                {props?.p11july2021}
              </Text>
              <Input
                name="interviewschedu_One"
                placeholder="Add Feedback"
                className="!placeholder:text-indigo-A700 !text-indigo-A700 font-bold font-epilogue p-0 text-base text-center w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                prefix={
                  <Img
                    className="h-10 mr-[35px] my-auto"
                    src="images/img_avatar.png"
                    alt="Avatar"
                  />
                }
                suffix={
                  <Img
                    className="h-5 ml-[-146px] my-2.5"
                    src="images/img_edit_indigo_a700_20x20.svg"
                    alt="edit"
                  />
                }
                shape="square"
                color="white_A700"
                size="xl"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtEpilogueRegular14"
              >
                {props?.p12july2021}
              </Text>
              <Input
                name="interviewschedu_Two"
                placeholder="Add Feedback"
                className="!placeholder:text-indigo-A700 !text-indigo-A700 font-bold font-epilogue p-0 text-base text-center w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                prefix={
                  <Img
                    className="h-10 mr-[35px] my-auto"
                    src="images/img_avatar.png"
                    alt="Avatar"
                  />
                }
                suffix={
                  <Img
                    className="h-5 ml-[-146px] my-2.5"
                    src="images/img_edit_indigo_a700_20x20.svg"
                    alt="edit"
                  />
                }
                shape="square"
                color="white_A700"
                size="xl"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtEpilogueRegular14"
              >
                {props?.p13july2021}
              </Text>
              <Input
                name="interviewschedu_Three"
                placeholder="Add Feedback"
                className="!placeholder:text-indigo-A700 !text-indigo-A700 font-bold font-epilogue p-0 text-base text-center w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                prefix={
                  <Img
                    className="h-10 mr-[35px] my-auto"
                    src="images/img_avatar.png"
                    alt="Avatar"
                  />
                }
                suffix={
                  <Img
                    className="h-5 ml-[-146px] my-2.5"
                    src="images/img_edit_indigo_a700_20x20.svg"
                    alt="edit"
                  />
                }
                shape="square"
                color="white_A700"
                size="xl"
                variant="fill"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C38DashboardCompanyApplicantProfileColumncaptionNine.defaultProps = {
  captionNine: "Applicant Profile",
  captionTen: "Resume",
  captionEleven: "Hiring Progress",
  captionTwelve: "Interview Schedule",
  interviewlist: "Interview List",
  captionThirteen: "Add Schedule Interview",
  tomorrow10july: "Tomorrow - 10 July, 2021",
  p11july2021: "11 July, 2021",
  p12july2021: "12 July, 2021",
  p13july2021: "13 July, 2021",
};

export default C38DashboardCompanyApplicantProfileColumncaptionNine;
