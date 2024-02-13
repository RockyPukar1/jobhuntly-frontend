import React from "react";

import { Img, List, Text } from "components";

const C16CompanyProfileColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
              size="txtClashDisplayVariableSemiBold32"
            >
              {props?.teamtitle}
            </Text>
            <div className="flex flex-col items-center justify-end w-auto">
              <Text
                className="text-base text-center text-indigo-A700 w-auto"
                size="txtEpilogueSemiBold16IndigoA700"
              >
                {props?.seeallfortyseven}
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
            orientation="horizontal"
          >
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
              <div className="flex flex-row gap-3 items-center justify-center w-[34%] md:w-full">
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
              <div className="flex flex-row gap-3 items-center justify-center w-[34%] md:w-full">
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
              <div className="flex flex-row gap-3 items-center justify-center w-[34%] md:w-full">
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
              <div className="flex flex-row gap-3 items-center justify-center w-[34%] md:w-full">
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
              <div className="flex flex-row gap-3 items-center justify-center w-[34%] md:w-full">
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
          </List>
        </div>
      </div>
    </>
  );
};

C16CompanyProfileColumn.defaultProps = {
  teamtitle: "Team",
  seeallfortyseven: "See all (47)",
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
};

export default C16CompanyProfileColumn;
