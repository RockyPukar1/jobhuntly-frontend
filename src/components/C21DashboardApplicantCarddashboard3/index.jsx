import React from "react";

import { Img, Line, Text } from "components";

const C21DashboardApplicantCarddashboard3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[7%] flex flex-col gap-[43px] inset-x-[0] items-center justify-end mx-auto w-auto">
          <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
            <Text
              className="text-base text-gray-900_87"
              size="txtInterMedium16Gray90087"
            >
              {props?.time}
            </Text>
            <Line className="bg-indigo-50_01 h-0.5 sm:mt-0 my-2 w-[78%]" />
          </div>
          <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between w-full">
            <Text
              className="text-base text-blue_gray-400"
              size="txtInterMedium16"
            >
              {props?.timeOne}
            </Text>
            <Line className="bg-gray-300 h-0.5 sm:mt-0 my-2 w-[78%]" />
          </div>
          <div className="h-20 relative w-full">
            <div className="absolute bottom-[33%] flex sm:flex-col flex-row gap-[19px] inset-x-[0] items-center justify-between mx-auto w-full">
              <Text
                className="text-base text-blue_gray-400"
                size="txtInterMedium16"
              >
                {props?.timeTwo}
              </Text>
              <Line className="bg-indigo-50_01 h-0.5 sm:mt-0 my-2 w-[78%]" />
            </div>
            <div className="absolute bg-indigo-50_01 flex flex-row gap-4 h-full inset-y-[0] items-center justify-center my-auto p-3.5 right-[0] rounded-lg w-[78%]">
              <div className="bg-blue-500 flex flex-col h-12 items-center justify-start w-12">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_julianwanwnol_48x48.png"
                  alt="julianwanwnol"
                />
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start mr-[61px]">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtInterSemiBold16Bluegray900"
                >
                  {props?.interviewername}
                </Text>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtInterMedium16"
                >
                  {props?.interviewerrole}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
            <Text
              className="text-base text-blue_gray-400"
              size="txtInterMedium16"
            >
              {props?.timeThree}
            </Text>
            <Line className="bg-gray-300 h-0.5 sm:mt-0 my-2 w-[78%]" />
          </div>
        </div>
        <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col inset-x-[0] items-start justify-end mx-auto py-[15px] shadow-bs2 top-[0] w-full">
          <Text
            className="ml-6 md:ml-[0] mt-3.5 text-center text-gray-900 text-xl"
            size="txtEpilogueSemiBold20Gray900"
          >
            {props?.sectiontitle}
          </Text>
          <Line className="bg-gray-300 h-px mt-5 w-full" />
          <div className="flex flex-row items-center justify-between ml-6 md:ml-[0] mt-[15px] w-[398px] sm:w-full">
            {props?.datetext}
            <Img
              className="h-6 w-16"
              src="images/img_user_gray_900.svg"
              alt="user"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C21DashboardApplicantCarddashboard3.defaultProps = {
  time: "9:30 AM",
  timeOne: "10:00 AM",
  timeTwo: "10:30 AM",
  interviewername: "Joe Bartmann",
  interviewerrole: "HR Manager at Divvy",
  timeThree: "11:00 AM",
  sectiontitle: "Upcomming Interviews",
  datetext: (
    <Text className="text-gray-900 text-xl w-auto" size="txtInterSemiBold20">
      <span className="text-gray-900 font-inter text-left font-semibold">
        Today,{" "}
      </span>
      <span className="text-gray-900 font-inter text-left font-normal">
        26 November
      </span>
    </Text>
  ),
};

export default C21DashboardApplicantCarddashboard3;
