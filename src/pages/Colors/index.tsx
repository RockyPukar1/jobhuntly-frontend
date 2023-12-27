import React from "react";

import { Img, List, Text } from "components";

const ColorsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-clashdisplayvariable sm:gap-10 md:gap-10 gap-20 items-start justify-start mx-auto p-[129px] md:px-10 sm:px-5 w-auto sm:w-full md:w-full">
        <div className="bg-gray-300 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1080px] mx-auto p-[72px] md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
            <Text
              className="md:text-5xl text-7xl text-blue_gray-900 w-auto"
              size="txtClashDisplayVariableSemiBold72"
            >
              Color Themes
            </Text>
            <div className="flex md:flex-col flex-row gap-[41px] items-start justify-start w-auto md:w-full">
              <Text
                className="text-blue_gray-700 text-xl w-auto"
                size="txtClashDisplayVariableSemiBold20Bluegray700"
              >
                Neutral
              </Text>
              <Text
                className="text-blue_gray-700 text-xl w-auto"
                size="txtClashDisplayVariableSemiBold20Bluegray700"
              >
                Brand
              </Text>
              <Text
                className="text-blue_gray-700 text-xl w-auto"
                size="txtClashDisplayVariableSemiBold20Bluegray700"
              >
                Background
              </Text>
              <Text
                className="text-blue_gray-700 text-xl w-auto"
                size="txtClashDisplayVariableSemiBold20Bluegray700"
              >
                Action
              </Text>
              <Text
                className="text-blue_gray-700 text-xl w-auto"
                size="txtClashDisplayVariableSemiBold20Bluegray700"
              >
                Accents
              </Text>
              <Text
                className="text-blue_gray-700 text-xl w-auto"
                size="txtClashDisplayVariableSemiBold20Bluegray700"
              >
                State
              </Text>
              <Text
                className="text-blue_gray-700 text-xl w-auto"
                size="txtClashDisplayVariableSemiBold20Bluegray700"
              >
                Gradient
              </Text>
            </div>
          </div>
          <Img
            className="sm:flex-1 h-[165px] md:h-auto object-cover w-[136px] sm:w-full"
            src="images/img_.png"
            alt="Eight"
          />
        </div>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1080px] mx-auto w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
            size="txtClashDisplayVariableSemiBold48"
          >
            BRAND
          </Text>
          <List
            className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-indigo-A700 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Primary
                </Text>
                <Text
                  className="flex-1 text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #4640DE
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-indigo-100 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Secondary
                </Text>
                <Text
                  className="flex-1 text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #CCCCF5
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue-50_02 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Tertiary
                </Text>
                <Text
                  className="flex-1 text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #E7F6FD
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1080px] mx-auto w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
            size="txtClashDisplayVariableSemiBold48"
          >
            ACCENTS
          </Text>
          <List
            className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-yellow-700 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Yellow
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #FFB836
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-teal-300 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Green
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #56CDAD
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-deep_orange-400 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Red
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #FF6550
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue-500 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Blue
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #26A4FF
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-deep_purple-A200 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  Purple
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #7B61FF
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1080px] mx-auto w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
            size="txtClashDisplayVariableSemiBold48"
          >
            NEUTRALS
          </Text>
          <List
            className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue_gray-900 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  100
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #25324B
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue_gray-700 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  80
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #515B6F
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue_gray-400 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  60
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #7C8493
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue_gray-200 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  40
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #A8ADB7
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-gray-300 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  20
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #E4E5E7
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-gray-50 h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  10
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #F9FAFC
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-white-A700 border border-gray-50 border-solid h-[220px] w-full"></div>
              <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-900 text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  0
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueMedium16Bluegray700"
                >
                  #F8F8FD
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
