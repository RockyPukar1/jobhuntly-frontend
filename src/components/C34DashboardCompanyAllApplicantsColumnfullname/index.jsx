import React from "react";

import { Button, Img, List, Text } from "components";

const C34DashboardCompanyAllApplicantsColumnfullname = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1104px] p-4 w-full">
          <div className="flex flex-row gap-6 items-center justify-start w-[254px]">
            <div className="flex flex-col items-center justify-start w-6">
              <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.fullname}
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_close_blue_gray_400.svg"
                alt="close"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-[136px]">
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.score}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_One"
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-[150px]">
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.hiringstage}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Two"
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-[166px]">
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.applieddate}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Three"
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-[170px]">
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.jobrole}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Four"
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.action}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_close_blue_gray_400.svg"
              alt="close_Five"
            />
          </div>
        </div>
        <List
          className="flex flex-col items-start outline outline-[1px] outline-gray-300 w-auto"
          orientation="vertical"
        >
          <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[91%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_avatar.png"
                        alt="avatar"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_17.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[79px] text-center text-sm"
                    shape="round"
                    color="yellow_700"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july2021}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeApplication}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[91%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-cyan-50 flex flex-col h-10 items-center justify-start w-10">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_julianwanwnol_40x40.png"
                          alt="julianwanwnol"
                        />
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll1}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_17.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty1}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[79px] text-center text-sm"
                    shape="round"
                    color="yellow_700"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview1}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20211}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer1}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication1}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[91%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_avatar.png"
                        alt="avatar"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll2}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_yellow_700.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty2}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="cursor-pointer font-epilogue font-semibold min-w-[100px] text-center text-sm"
                    shape="round"
                    color="indigo_A700"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview2}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20212}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer2}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication2}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[91%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_avatar.png"
                        alt="avatar"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll3}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_yellow_700.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty3}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="!text-deep_orange-400 cursor-pointer font-epilogue font-semibold min-w-[82px] text-center text-sm"
                    shape="round"
                    color="deep_orange_400"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview3}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20213}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer3}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication3}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[91%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="flex flex-col h-10 items-center justify-start w-10">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_imagepeople6_40x40.png"
                          alt="imagepeopleSix"
                        />
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll4}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_yellow_700.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty4}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[70px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview4}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20214}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer4}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication4}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[92%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="flex flex-col h-10 items-center justify-start w-10">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_imagepeople6_1.png"
                          alt="imagepeopleSix"
                        />
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll5}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_yellow_700.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty5}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[70px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview5}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20215}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer5}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication5}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[92%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="flex flex-col h-10 items-center justify-start w-10">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_imagepeople7_40x40.png"
                          alt="imagepeopleSeven"
                        />
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll6}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_yellow_700.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty6}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="!text-blue-500 cursor-pointer font-epilogue font-semibold min-w-[104px] text-center text-sm"
                    shape="round"
                    color="blue_500"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview6}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20216}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer6}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication6}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[92%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="flex flex-col h-10 items-center justify-start w-10">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_michaeldammez_40x40.png"
                          alt="michaeldammez"
                        />
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll7}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_yellow_700.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty7}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="!text-deep_orange-400 cursor-pointer font-epilogue font-semibold min-w-[82px] text-center text-sm"
                    shape="round"
                    color="deep_orange_400"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview7}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20217}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer7}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication7}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[92%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-blue-500 flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_kevinkeithiql_40x40.png"
                          alt="kevinkeithiql"
                        />
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll8}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_yellow_700.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty8}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="cursor-pointer font-epilogue font-semibold min-w-[100px] text-center text-sm"
                    shape="round"
                    color="indigo_A700"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview8}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20218}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer8}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication8}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1105px] my-0 p-4 w-full">
            <div className="flex relative w-[59%] md:w-full">
              <div className="flex my-auto w-[92%] sm:w-full">
                <div className="flex my-auto w-[74%] sm:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start my-auto w-[286px]">
                    <div className="flex flex-col items-center justify-start w-6">
                      <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="flex flex-col h-10 items-center justify-start w-10">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ruisilvestreh.png"
                          alt="ruisilvestreh"
                        />
                      </div>
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueMedium16Bluegray900"
                      >
                        {props?.jakegyll9}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center ml-[-33.8px] my-auto w-[172px] z-[1]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_yellow_700.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.forty9}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[-33.8px] my-auto w-[183px] z-[1]">
                  <Button
                    className="!text-blue-500 cursor-pointer font-epilogue font-semibold min-w-[104px] text-center text-sm"
                    shape="round"
                    color="blue_500"
                    size="md"
                    variant="outline"
                  >
                    {props?.inreview9}
                  </Button>
                </div>
              </div>
              <Text
                className="ml-[-33.8px] my-auto text-base text-blue_gray-900 w-full z-[1]"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.p13july20219}
              </Text>
            </div>
            <Text
              className="flex-1 text-base text-blue_gray-900 w-full"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.designer9}
            </Text>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Button
                className="!text-indigo-A700 border border-indigo-A700 border-solid cursor-pointer font-bold font-epilogue min-w-[155px] text-center text-sm"
                shape="square"
                color="indigo_50_01"
                size="xl"
                variant="fill"
              >
                {props?.seeapplication9}
              </Button>
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_One"
              />
            </div>
          </div>
        </List>
        <div className="bg-white-A700 flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtInterMedium16"
            >
              {props?.view}
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-2 items-center justify-center px-4 py-3 w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_blue_gray_900.svg"
                alt="arrowdown"
              />
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtInterMedium16Bluegray900"
              >
                {props?.captionEight}
              </Text>
            </div>
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtInterMedium16"
            >
              {props?.applicantsperpaOne}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft_blue_gray_900_24x24.svg"
              alt="arrowleft"
            />
            <div className="flex flex-row items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-inter font-semibold h-[46px] rounded-lg text-base text-center w-[46px]"
                color="indigo_A700"
                size="lg"
                variant="fill"
              >
                {props?.one}
              </Button>
              <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.oneOne}
                </Text>
              </div>
            </div>
            <Img
              className="h-6 w-[25px]"
              src="images/img_arrowright_blue_gray_900.svg"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C34DashboardCompanyAllApplicantsColumnfullname.defaultProps = {
  fullname: "Full Name",
  score: "Score",
  hiringstage: "Hiring Stage",
  applieddate: "Applied Date",
  jobrole: "Job Role",
  action: "Action",
  jakegyll: "Jake Gyll",
  forty: "0.0",
  inreview: "Inreview",
  p13july2021: "13 July, 2021",
  designer: "Designer",
  seeApplication: "See Application",
  jakegyll1: "Guy Hawkins",
  forty1: "0.0",
  inreview1: "Inreview",
  p13july20211: "13 July, 2021",
  designer1: "JavaScript Dev",
  seeapplication1: "See Application",
  jakegyll2: "Cyndy Lillibridge",
  forty2: "4.5",
  inreview2: "Shortlisted",
  p13july20212: "12 July, 2021",
  designer2: "Golang Dev",
  seeapplication2: "See Application",
  jakegyll3: "Rodolfo Goode",
  forty3: "3.75",
  inreview3: "Declined",
  p13july20213: "11 July, 2021",
  designer3: "NET Dev",
  seeapplication3: "See Application",
  jakegyll4: "Leif Floyd",
  forty4: "4.8",
  inreview4: "Hired",
  p13july20214: "11 July, 2021",
  designer4: "Graphic Design",
  seeapplication4: "See Application",
  jakegyll5: "Jenny Wilson",
  forty5: "4.6",
  inreview5: "Hired",
  p13july20215: "9 July, 2021",
  designer5: "Designer",
  seeapplication5: "See Application",
  jakegyll6: "Jerome Bell",
  forty6: "4.0",
  inreview6: "Interviewed",
  p13july20216: "5 July, 2021",
  designer6: "Designer",
  seeapplication6: "See Application",
  jakegyll7: "Eleanor Pena",
  forty7: "3.90",
  inreview7: "Declined",
  p13july20217: "5 July, 2021",
  designer7: "Designer",
  seeapplication7: "See Application",
  jakegyll8: "Darrell Steward",
  forty8: "4.20",
  inreview8: "Shortlisted",
  p13july20218: "3 July, 2021",
  designer8: "Designer",
  seeapplication8: "See Application",
  jakegyll9: "Floyd Miles",
  forty9: "4.10",
  inreview9: "Interviewed",
  p13july20219: "1 July, 2021",
  designer9: "Designer",
  seeapplication9: "See Application",
  view: "View",
  captionEight: "10",
  applicantsperpaOne: "Applicants per page",
  one: "1",
  oneOne: "2",
};

export default C34DashboardCompanyAllApplicantsColumnfullname;
