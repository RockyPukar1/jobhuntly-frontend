import React from "react";

import { Button, Img, Text } from "components";

const C320DashboardCompanySettingsTeamRowbasicinformatioOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-base text-blue_gray-900 w-[142px]"
            size="txtEpilogueSemiBold16Bluegray900"
          >
            {props?.basicinformatioOne}
          </Text>
          <Text
            className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-400"
            size="txtEpilogueRegular16Bluegray400"
          >
            {props?.addteammembers}
          </Text>
        </div>
        <div className="flex flex-col gap-[23px] items-end justify-end w-auto md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
            <Text
              className="sm:mt-0 mt-1 text-gray-900 text-xl"
              size="txtClashDisplayVariableSemiBold20Gray900"
            >
              {props?.memberscounter}
            </Text>
            <div className="flex flex-row items-start justify-between w-[39%] sm:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[179px] rounded"
                leftIcon={
                  <Img
                    className="h-6 mr-2"
                    src="images/img_plus_white_a700.svg"
                    alt="plus"
                  />
                }
                color="indigo_A700"
                size="md"
                variant="fill"
              >
                <div className="font-epilogue font-semibold text-base text-center">
                  {props?.addMembers}
                </div>
              </Button>
              <div className="flex flex-row items-start justify-start w-auto">
                <Button
                  className="flex h-10 items-center justify-center rounded w-10"
                  color="indigo_A700_5f"
                  size="md"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_grid.svg" alt="grid" />
                </Button>
                <div className="flex flex-col h-10 items-center justify-start p-2 w-10">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_21.svg"
                    alt="icon_Six"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[23px] items-end justify-start w-full">
            <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-center text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.clestingardinie}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 text-center w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.ceocofounder}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-[28%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_700_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_9.svg"
                    alt="icon_One"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded w-full">
                <div className="bg-cyan-50 flex flex-col h-20 items-center justify-start w-20">
                  <Img
                    className="h-20 md:h-auto rounded-[50%] w-20"
                    src="images/img_julianwanwnol.png"
                    alt="julianwanwnol"
                  />
                </div>
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-center text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.language}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 text-center w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.ceocofounder1}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-[28%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_700_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_9.svg"
                    alt="icon_One"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-center text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.clestingardinie1}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 text-center w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.ceocofounder2}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-[28%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_700_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_9.svg"
                    alt="icon_One"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-center text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.clestingardinie2}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 text-center w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.ceocofounder3}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-[29%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_700_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_9.svg"
                    alt="icon_One"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-center text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.clestingardinie3}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 text-center w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.ceocofounder4}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-[29%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_700_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_9.svg"
                    alt="icon_One"
                  />
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded w-full">
                <div className="flex flex-col h-20 items-center justify-start w-20">
                  <Img
                    className="h-20 md:h-auto rounded-[50%] w-20"
                    src="images/img_imagepeople6_80x80.png"
                    alt="imagepeopleSix"
                  />
                </div>
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-center text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.clestingardinie4}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 text-center w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.ceocofounder5}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-[29%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_700_24x24.svg"
                    alt="icon"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_9.svg"
                    alt="icon_One"
                  />
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold font-epilogue min-w-[209px] text-center text-lg"
              shape="square"
              color="indigo_A700"
              size="2xl"
              variant="fill"
            >
              {props?.saveChanges}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

C320DashboardCompanySettingsTeamRowbasicinformatioOne.defaultProps = {
  basicinformatioOne: "Basic Information",
  addteammembers: "Add team members of your company",
  memberscounter: "50 Members",
  addMembers: "Add Members",
  clestingardinie: "Célestin Gardinier",
  ceocofounder: "CEO & Co-Founder",
  language: " Reynaud Colbert",
  ceocofounder1: "Co-Founder",
  clestingardinie1: "Arienne Lyon",
  ceocofounder2: "Managing Director",
  clestingardinie2: "Bernard Alexander",
  ceocofounder3: "Managing Director",
  clestingardinie3: "Christine Jhonson",
  ceocofounder4: "Managing Director",
  clestingardinie4: "Aaron Morgan",
  ceocofounder5: "Managing Director",
  saveChanges: "Save Changes",
};

export default C320DashboardCompanySettingsTeamRowbasicinformatioOne;
