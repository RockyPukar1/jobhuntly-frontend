import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";

const C35DashboardCompanyApplicantProfileColumnjeromebell = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[21px] items-start justify-start w-auto">
          <div className="flex flex-col h-24 items-center justify-start w-24">
            <Img
              className="h-24 md:h-auto rounded-[50%] w-24"
              src="images/img_imagepeople7_96x96.png"
              alt="imagepeopleSeven"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtClashDisplayVariableSemiBold24"
            >
              {props?.username}
            </Text>
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.userrole}
            </Text>
            <Input
              name="frame1263"
              placeholder="4.0"
              className="font-epilogue font-medium p-0 placeholder:text-blue_gray-900 text-base text-blue_gray-900 text-left w-full"
              wrapClassName="flex w-[39%]"
              prefix={
                <Img
                  className="h-6 mr-2 my-auto"
                  src="images/img_icon_yellow_700.svg"
                  alt="Icon"
                />
              }
              size="xs"
            ></Input>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col gap-2 items-start justify-start p-4 w-full">
          <div className="flex flex-row gap-0.5 items-start justify-between w-full">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtEpilogueRegular14Bluegray900"
            >
              {props?.jobtitle}
            </Text>
            <Text
              className="text-blue_gray-400 text-right text-sm w-auto"
              size="txtEpilogueRegular14"
            >
              {props?.jobduration}
            </Text>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.jobcategory}
            </Text>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Text
                className="text-blue_gray-700 text-sm w-auto"
                size="txtEpilogueRegular14Bluegray700"
              >
                {props?.subcategory1}
              </Text>
              <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
              <Text
                className="text-blue_gray-700 text-sm w-auto"
                size="txtEpilogueRegular14Bluegray700"
              >
                {props?.jobtype}
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col gap-2 items-start justify-start p-4 w-full">
          <div className="flex flex-row gap-0.5 items-start justify-between w-full">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtEpilogueRegular14Bluegray900"
            >
              {props?.stagetitle}
            </Text>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <div className="bg-blue-500 h-2.5 rounded-[50%] w-2.5"></div>
              <Text
                className="text-blue-500 text-right text-sm w-auto"
                size="txtEpilogueRegular14Blue500"
              >
                {props?.stagename}
              </Text>
            </div>
          </div>
          <PagerIndicator
            className="flex gap-0.5 h-[11px] md:h-auto items-start justify-start w-[272px] md:w-full"
            count={4}
            activeCss="inline-block cursor-pointer h-[11px] bg-gray-300 w-[66px]"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer h-[11px] bg-blue-500 w-[66px]"
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <div className="flex flex-row gap-2 items-start justify-start w-full">
          <Button
            className="cursor-pointer flex-1 font-bold font-epilogue text-base text-center w-full"
            shape="square"
            color="indigo_100"
            size="xl"
            variant="outline"
          >
            {props?.scheduleinterviewbutton}
          </Button>
          <Button
            className="flex h-[50px] items-center justify-center w-[50px]"
            shape="square"
            color="indigo_100"
            size="lg"
            variant="outline"
          >
            <Img
              className="h-[26px]"
              src="images/img_user_indigo_a700_50x50.svg"
              alt="user"
            />
          </Button>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start w-auto">
          <div className="flex flex-col items-center justify-start w-[304px]">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtEpilogueSemiBold20"
            >
              {props?.contacttext}
            </Text>
          </div>
          <List className="flex flex-col gap-4 w-[83%]" orientation="vertical">
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <Img className="h-6 w-6" src="images/img_lock.svg" alt="lock" />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.email}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueRegular16Bluegray900"
                >
                  {props?.emailtext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_icon_23.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.phone}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueRegular16Bluegray900"
                >
                  {props?.phonetext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_icon_24.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.instagram}
                </Text>
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueRegular16IndigoA700"
                >
                  {props?.instagramtext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_trash_blue_gray_400.svg"
                alt="trash"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.twitter}
                </Text>
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueRegular16IndigoA700"
                >
                  {props?.twittertext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_icon_25.svg"
                alt="icon"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.website}
                </Text>
                <Text
                  className="text-base text-indigo-A700 w-auto"
                  size="txtEpilogueRegular16IndigoA700"
                >
                  {props?.websitetext}
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

C35DashboardCompanyApplicantProfileColumnjeromebell.defaultProps = {
  username: "Jerome Bell",
  userrole: "Product Designer",
  jobtitle: "Applied Jobs",
  jobduration: "2 days ago",
  jobcategory: "Product Development",
  subcategory1: "Marketing",
  jobtype: "Full-Time",
  stagetitle: "Stage",
  stagename: "Interview",
  scheduleinterviewbutton: "Schedule Interview",
  contacttext: "Contact",
  email: "Email",
  emailtext: "jeromeBell45@email.com",
  phone: "Phone",
  phonetext: "+44 1245 572 135",
  instagram: "Instagram",
  instagramtext: "instagram.com/jeromebell",
  twitter: "Twitter",
  twittertext: "twitter.com/jeromebell",
  website: "Website",
  websitetext: "www.jeromebell.com",
};

export default C35DashboardCompanyApplicantProfileColumnjeromebell;
