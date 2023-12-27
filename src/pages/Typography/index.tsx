import React from "react";

import { Line, List, Text } from "components";

const TypographyPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-monumentextended sm:gap-10 md:gap-10 gap-20 items-start justify-start mx-auto p-[129px] md:px-10 sm:px-5 w-auto sm:w-full md:w-full">
        <div className="bg-gray-300 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1800px] mx-auto p-[72px] md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col font-clashdisplayvariable gap-8 items-start justify-start w-auto sm:w-full">
            <Text
              className="md:text-5xl text-7xl text-blue_gray-900 w-auto"
              size="txtClashDisplayVariableSemiBold72"
            >
              Typography
            </Text>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-700 text-xl w-auto"
                size="txtClashDisplayVariableSemiBold20Bluegray700"
              >
                Clash Display - Heading
              </Text>
              <Text
                className="text-blue_gray-700 text-lg w-auto"
                size="txtEpilogueBold18"
              >
                Epilogue - Body , Button , Display
              </Text>
            </div>
          </div>
          <Text
            className="md:text-5xl text-[136px] text-black-900 w-auto"
            size="txtInterBold136"
          >
            Aa
          </Text>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1800px] mx-auto w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-right w-auto"
            size="txtMonumentExtendedRegular40"
          >
            HEADING
          </Text>
          <List
            className="flex flex-col font-clashdisplayvariable gap-[38px] items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    H1 / Heading 1
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Monument Extended - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    72 px font size
                  </Text>
                </div>
                <Text
                  className="md:text-5xl text-7xl text-blue_gray-900 text-right w-auto"
                  size="txtClashDisplayVariableSemiBold72"
                >
                  The quick brown fox jumps over the ...
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    H2 / Heading 2
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Monument Extended - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    48 px font size
                  </Text>
                </div>
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-right w-auto"
                  size="txtClashDisplayVariableSemiBold48"
                >
                  the quick brown fox jumps over the lazy dog
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    H3 / Heading 3
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Monument Extended - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    32 px font size
                  </Text>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-right w-auto"
                  size="txtClashDisplayVariableSemiBold32"
                >
                  The quick brown fox jumps...
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    H4 / Heading 4
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Monument Extended - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    24 px font size
                  </Text>
                </div>
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 text-right sm:text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold24"
                >
                  The quick brown fox jumps...
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    H5 / Heading 5
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Monument Extended - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    20 px font size
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-900 text-right text-xl w-auto"
                  size="txtClashDisplayVariableSemiBold20"
                >
                  The quick brown fox jumps...
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1800px] mx-auto w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-right w-auto"
            size="txtMonumentExtendedRegular40"
          >
            BODY
          </Text>
          <List
            className="flex flex-col font-epilogue gap-[38px] items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / Xlarge
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    20 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-right text-xl"
                  size="txtEpilogueRegular20Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / large
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Bold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    18 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-lg text-right"
                  size="txtEpilogueBold18Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / large
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Semi Bold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    18 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-lg text-right"
                  size="txtEpilogueSemiBold18Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / large
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Medium
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    18 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-lg text-right"
                  size="txtEpilogueMedium18Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / large
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    18 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-lg text-right"
                  size="txtEpilogueRegular18Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / Normal
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Bold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    16 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-base text-blue_gray-900 text-right"
                  size="txtEpilogueBold16Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / Normal
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - SemiBold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    16 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-base text-blue_gray-900 text-right"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / Normal
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Medium
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    16 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-base text-blue_gray-900 text-right"
                  size="txtEpilogueMedium16Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / Normal
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    16 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-base text-blue_gray-900 text-right"
                  size="txtEpilogueRegular16Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / Small
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Semibold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    14 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-right text-sm"
                  size="txtEpilogueSemiBold14Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-10 h-36 md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold20"
                  >
                    Body / Small
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Regular
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    14 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-right text-sm"
                  size="txtEpilogueRegular14Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
          </List>
        </div>
        <List
          className="flex flex-col gap-[74px] items-center max-w-[1800px] mx-auto w-full"
          orientation="vertical"
        >
          <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-auto md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-right w-auto"
              size="txtMonumentExtendedRegular40"
            >
              BUTTON
            </Text>
            <div className="flex flex-col font-epilogue gap-10 h-[146px] md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    Button / Large
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Bold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    18 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-lg text-right"
                  size="txtEpilogueBold18Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-col font-epilogue gap-10 h-[146px] md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    Button / Normal
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Bold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    16 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-base text-blue_gray-900 text-right"
                  size="txtEpilogueBold16Bluegray900"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-col font-epilogue gap-10 h-[146px] md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    Button / Small
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Bold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    14 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-right text-sm"
                  size="txtEpilogueBold14"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form which don&#39;t look even slightly believable.
                  </>
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-auto md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-right w-auto"
              size="txtMonumentExtendedRegular40"
            >
              DISPLAY
            </Text>
            <div className="flex flex-col font-epilogue gap-10 h-[185px] md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    Display / 1
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - SemiBold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    72 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[100.00%] max-w-[1233px] md:max-w-full md:text-5xl text-7xl text-blue_gray-900 text-right"
                  size="txtEpilogueSemiBold72"
                >
                  There are many variations of passages of
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-col font-epilogue gap-10 h-[146px] md:h-auto items-start justify-start max-w-[1800px] pt-4 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    Display / 2
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - Semi Bold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    48 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[100.00%] max-w-[964px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-right"
                  size="txtEpilogueSemiBold48Bluegray900"
                >
                  There are many variations of passages of Lorem{" "}
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
            <div className="flex flex-col font-epilogue gap-10 h-[146px] md:h-auto items-start justify-start max-w-[1800px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    Display / 3
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-lg w-auto"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    Epilogue - SemiBold
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    20 px font size
                  </Text>
                </div>
                <Text
                  className="leading-[120.00%] max-w-[634px] md:max-w-full text-blue_gray-900 text-right text-xl"
                  size="txtEpilogueSemiBold20"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some{" "}
                </Text>
              </div>
              <Line className="bg-blue_gray-200 h-px w-full" />
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default TypographyPage;
