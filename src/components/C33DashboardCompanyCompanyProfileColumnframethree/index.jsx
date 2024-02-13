import React from "react";

import { Img, Input, Line, Text } from "components";

const C33DashboardCompanyCompanyProfileColumnframethree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-start w-[272px] md:w-full">
          <div className="flex flex-row gap-2 items-center justify-start md:pr-10 pr-16 sm:pr-5 w-auto">
            <Img
              className="h-8 w-8"
              src="images/img_frame3.svg"
              alt="frameThree"
            />
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.24px] w-auto"
              size="txtRedHatDisplayBold24Gray900"
            >
              {props?.jobhuntly}
            </Text>
          </div>
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start sm:pl-5 pl-8 pr-4 py-3 w-64">
                <Img
                  className="h-6 w-6"
                  src="images/img_home_blue_gray_400.svg"
                  alt="home"
                />
                <Text
                  className="flex-1 text-base text-blue_gray-400 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.dashboardcaption}
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start sm:px-5 px-8 py-3 w-[272px] md:w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_television_blue_gray_400.svg"
                    alt="television"
                  />
                  <Text
                    className="text-base text-blue_gray-400 w-[78px]"
                    size="txtInterMedium16"
                  >
                    {props?.messagescaption}
                  </Text>
                </div>
                <Text
                  className="bg-indigo-A700 flex h-6 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-6"
                  size="txtEpilogueSemiBold14"
                >
                  {props?.badgetext}
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Line className="bg-indigo-A700 h-8 w-1" />
                <Input
                  name="menu"
                  placeholder="Company Profile"
                  className="!placeholder:text-indigo-A700 !text-indigo-A700 font-inter font-medium p-0 text-base text-left w-full"
                  wrapClassName="flex w-[94%]"
                  prefix={
                    <Img
                      className="h-6 mr-4 my-auto"
                      src="images/img_icon_22.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="indigo_50_01"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start sm:pl-5 pl-8 pr-4 py-3 w-[272px] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_27.svg"
                  alt="icon"
                />
                <Text
                  className="flex-1 text-base text-blue_gray-400 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.allapplicantscaption}
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start sm:pl-5 pl-8 pr-4 py-3 w-[272px] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_28.svg"
                  alt="icon_One"
                />
                <Text
                  className="flex-1 text-base text-blue_gray-400 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.joblistingcaption}
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start sm:pl-5 pl-8 pr-4 py-3 w-[272px] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_blue_gray_400_20x20.svg"
                  alt="icon_Two"
                />
                <Text
                  className="flex-1 text-base text-blue_gray-400 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.myschedulecaption}
                </Text>
              </div>
            </div>
            <Line className="bg-indigo-100 h-px w-full" />
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start sm:pl-5 pl-8 w-auto">
                <Text
                  className="text-gray-900_87 text-sm tracking-[0.56px] w-auto"
                  size="txtInterSemiBold14"
                >
                  {props?.settings}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-4 items-center justify-start sm:pl-5 pl-8 pr-4 py-3 w-64">
                  <Img
                    className="h-6 w-6"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  <Text
                    className="flex-1 text-base text-blue_gray-400 w-auto"
                    size="txtInterMedium16"
                  >
                    {props?.settingscaption}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start sm:pl-5 pl-8 pr-4 py-3 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_15.svg"
                    alt="icon_Three"
                  />
                  <Text
                    className="flex-1 text-base text-blue_gray-400 w-auto"
                    size="txtInterMedium16"
                  >
                    {props?.helpcentercaption}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pt-[21px] sm:px-5 px-[21px] w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_avatar.png"
              alt="avatar"
            />
            <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.username}
              </Text>
              <Text
                className="text-blue_gray-700_87 text-sm w-auto"
                size="txtEpilogueRegular14Bluegray70087"
              >
                {props?.email}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C33DashboardCompanyCompanyProfileColumnframethree.defaultProps = {
  jobhuntly: "JobHuntly",
  dashboardcaption: "Dashboard",
  messagescaption: "Messages",
  badgetext: "1",
};

export default C33DashboardCompanyCompanyProfileColumnframethree;
