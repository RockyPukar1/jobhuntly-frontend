import React from "react";

import { Button, Img, List, Text } from "components";

const C28DashboardProfileListadditionaldetaiOne = (props) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-auto md:w-full">
          <div className="flex flex-row gap-4 items-center justify-between w-[304px]">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtEpilogueSemiBold20"
            >
              {props?.additionaldetailstext}
            </Text>
            <Button
              className="flex h-10 items-center justify-center w-10"
              shape="square"
              color="gray_300"
              size="md"
              variant="outline"
            >
              <Img
                className="h-5"
                src="images/img_edit_indigo_a700.svg"
                alt="edit"
              />
            </Button>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Img className="h-6 w-6" src="images/img_lock.svg" alt="lock" />
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.emailtext}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueRegular16Bluegray900"
              >
                {props?.emailvalue}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Img className="h-6 w-6" src="images/img_icon_23.svg" alt="icon" />
            <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.phonetext}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueRegular16Bluegray900"
              >
                {props?.phonevalue}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_settings_blue_gray_400.svg"
              alt="settings"
            />
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.languagestext}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueRegular16Bluegray900"
              >
                {props?.languagesvalue}
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 w-auto md:w-full">
          <div className="flex flex-row gap-4 items-center justify-between w-[304px]">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtEpilogueSemiBold20"
            >
              {props?.sociallinkstext}
            </Text>
            <Button
              className="flex h-10 items-center justify-center w-10"
              shape="square"
              color="gray_300"
              size="md"
              variant="outline"
            >
              <Img
                className="h-5"
                src="images/img_edit_indigo_a700.svg"
                alt="edit"
              />
            </Button>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Img className="h-6 w-6" src="images/img_icon_24.svg" alt="icon" />
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.instagramtext}
              </Text>
              <Text
                className="text-base text-indigo-A700 w-auto"
                size="txtEpilogueRegular16IndigoA700"
              >
                {props?.instagramurl}
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
                {props?.twittertext}
              </Text>
              <Text
                className="text-base text-indigo-A700 w-auto"
                size="txtEpilogueRegular16IndigoA700"
              >
                {props?.twitterurl}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_icon_25.svg"
              alt="icon_One"
            />
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.websitetext}
              </Text>
              <Text
                className="text-base text-indigo-A700 w-auto"
                size="txtEpilogueRegular16IndigoA700"
              >
                {props?.websiteurl}
              </Text>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};

C28DashboardProfileListadditionaldetaiOne.defaultProps = {
  additionaldetailstext: "Additional Details",
  emailtext: "Email",
  emailvalue: "jakegyll@email.com",
  phonetext: "Phone",
  phonevalue: "+44 1245 572 135",
  languagestext: "Languages",
  languagesvalue: "English, French",
  sociallinkstext: "Social Links",
  instagramtext: "Instagram",
  instagramurl: "instagram.com/jakegyll",
  twittertext: "Twitter",
  twitterurl: "twitter.com/jakegyll",
  websitetext: "Website",
  websiteurl: "www.jakegyll.com",
};

export default C28DashboardProfileListadditionaldetaiOne;
