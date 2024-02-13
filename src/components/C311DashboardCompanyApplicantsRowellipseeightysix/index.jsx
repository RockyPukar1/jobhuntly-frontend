import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const C311DashboardCompanyApplicantsRowellipseeightysix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-start w-1/4 md:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-2 w-[266px]">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between sm:px-5 px-6 py-4 shadow-bs5 w-full">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <div className="bg-yellow-700 h-2.5 rounded-[50%] w-2.5"></div>
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueMedium16Bluegray900"
                >
                  {props?.inreview}
                </Text>
                <Button
                  className="!text-blue_gray-900 cursor-pointer font-epilogue font-medium h-[30px] text-base text-center w-[30px]"
                  shape="square"
                  color="indigo_50_01"
                  size="sm"
                  variant="fill"
                >
                  {props?.ten}
                </Button>
              </div>
              <Img
                className="h-6 w-6"
                src="images/img_icon_31.svg"
                alt="icon_Six"
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-[250px]">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="bg-blue-500 flex flex-col h-14 items-center justify-start rounded-[50%] w-14">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_kevinkeithiql_56x56.png"
                      alt="kevinkeithiql"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueBold16Bluegray900"
                    >
                      {props?.jakegyll}
                    </Text>
                    <Text
                      className="text-center text-indigo-A700 text-sm w-auto"
                      size="txtEpilogueSemiBold14IndigoA700"
                    >
                      {props?.viewprofile}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                    <Text
                      className="text-blue_gray-400 text-sm w-full"
                      size="txtEpilogueRegular14"
                    >
                      {props?.appliedon}
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-sm w-full"
                      size="txtEpilogueSemiBold14Bluegray900"
                    >
                      {props?.p13july2021}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[98px]">
                    <Text
                      className="text-blue_gray-400 text-sm w-full"
                      size="txtEpilogueRegular14"
                    >
                      {props?.score}
                    </Text>
                    <Input
                      name="frame1263"
                      placeholder="4.0"
                      className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                      wrapClassName="flex w-1/2"
                      prefix={
                        <Img
                          className="h-5 mr-2 my-auto"
                          src="images/img_icon_yellow_700.svg"
                          alt="Icon"
                        />
                      }
                      size="xs"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-[250px]">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="flex flex-col h-14 items-center justify-start w-14">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_michaeldammez_56x56.png"
                      alt="michaeldammez"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueBold16Bluegray900"
                    >
                      {props?.jakegyllOne}
                    </Text>
                    <Text
                      className="text-center text-indigo-A700 text-sm w-auto"
                      size="txtEpilogueSemiBold14IndigoA700"
                    >
                      {props?.viewprofileOne}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                    <Text
                      className="text-blue_gray-400 text-sm w-full"
                      size="txtEpilogueRegular14"
                    >
                      {props?.appliedonOne}
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-sm w-full"
                      size="txtEpilogueSemiBold14Bluegray900"
                    >
                      {props?.p13july2021one}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[98px]">
                    <Text
                      className="text-blue_gray-400 text-sm w-full"
                      size="txtEpilogueRegular14"
                    >
                      {props?.scoreOne}
                    </Text>
                    <Input
                      name="frame1263_One"
                      placeholder="0.0"
                      className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                      wrapClassName="flex w-1/2"
                      prefix={
                        <Img
                          className="h-5 mr-2 my-auto"
                          src="images/img_icon_17.svg"
                          alt="Icon"
                        />
                      }
                      size="xs"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-[250px]">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="flex flex-col h-14 items-center justify-start w-14">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_imagepeople7_56x56.png"
                      alt="imagepeopleSeven"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueBold16Bluegray900"
                    >
                      {props?.jakegyllTwo}
                    </Text>
                    <Text
                      className="text-center text-indigo-A700 text-sm w-auto"
                      size="txtEpilogueSemiBold14IndigoA700"
                    >
                      {props?.viewprofileTwo}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                    <Text
                      className="text-blue_gray-400 text-sm w-full"
                      size="txtEpilogueRegular14"
                    >
                      {props?.appliedonTwo}
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-sm w-full"
                      size="txtEpilogueSemiBold14Bluegray900"
                    >
                      {props?.p13july2021two}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[98px]">
                    <Text
                      className="text-blue_gray-400 text-sm w-full"
                      size="txtEpilogueRegular14"
                    >
                      {props?.scoreTwo}
                    </Text>
                    <Input
                      name="frame1263_Two"
                      placeholder="0.0"
                      className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                      wrapClassName="flex w-1/2"
                      prefix={
                        <Img
                          className="h-5 mr-2 my-auto"
                          src="images/img_icon_17.svg"
                          alt="Icon"
                        />
                      }
                      size="xs"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-[250px]">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="flex flex-col h-14 items-center justify-start w-14">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_imagepeople6_56x56.png"
                      alt="imagepeopleSix"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueBold16Bluegray900"
                    >
                      {props?.jakegyllThree}
                    </Text>
                    <Text
                      className="text-center text-indigo-A700 text-sm w-auto"
                      size="txtEpilogueSemiBold14IndigoA700"
                    >
                      {props?.viewprofileThree}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-[98px]">
                    <Text
                      className="text-blue_gray-400 text-sm w-full"
                      size="txtEpilogueRegular14"
                    >
                      {props?.appliedonThree}
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[98px]">
                    <Text
                      className="text-blue_gray-400 text-sm w-full"
                      size="txtEpilogueRegular14"
                    >
                      {props?.scoreThree}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-indigo-A700 h-[93px] mb-[579px] mt-[88px] w-[3px]" />
        </div>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-2 w-64">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between sm:px-5 px-6 py-4 shadow-bs6 w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              <div className="bg-deep_purple-A200 h-2.5 rounded-[50%] w-2.5"></div>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.shortlisted}
              </Text>
              <Button
                className="!text-blue_gray-900 cursor-pointer font-epilogue font-medium h-[30px] text-base text-center w-[30px]"
                shape="square"
                color="indigo_50_01"
                size="sm"
                variant="fill"
              >
                {props?.eight}
              </Button>
            </div>
            <Img
              className="h-6 w-6"
              src="images/img_icon_31.svg"
              alt="icon_Ten"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img
                  className="h-14 md:h-auto object-cover w-14"
                  src="images/img_avatar.png"
                  alt="avatar_One"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    {props?.jakegyllFour}
                  </Text>
                  <Text
                    className="text-center text-indigo-A700 text-sm w-auto"
                    size="txtEpilogueSemiBold14IndigoA700"
                  >
                    {props?.viewprofileFour}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.appliedonFour}
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtEpilogueSemiBold14Bluegray900"
                  >
                    {props?.p13july2021three}
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[94px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.scoreFour}
                  </Text>
                  <Input
                    name="frame1263_Three"
                    placeholder="0.0"
                    className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                    wrapClassName="flex w-[53%]"
                    prefix={
                      <Img
                        className="h-5 mr-2 my-auto"
                        src="images/img_icon_17.svg"
                        alt="Icon"
                      />
                    }
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img
                  className="h-14 md:h-auto object-cover w-14"
                  src="images/img_avatar.png"
                  alt="avatar_Two"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    {props?.jakegyllFive}
                  </Text>
                  <Text
                    className="text-center text-indigo-A700 text-sm w-auto"
                    size="txtEpilogueSemiBold14IndigoA700"
                  >
                    {props?.viewprofileFive}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.appliedonFive}
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtEpilogueSemiBold14Bluegray900"
                  >
                    {props?.p13july2021four}
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[94px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.scoreFive}
                  </Text>
                  <Input
                    name="frame1263_Four"
                    placeholder="0.0"
                    className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                    wrapClassName="flex w-[53%]"
                    prefix={
                      <Img
                        className="h-5 mr-2 my-auto"
                        src="images/img_icon_17.svg"
                        alt="Icon"
                      />
                    }
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-2 w-64">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between sm:px-5 px-6 py-4 shadow-bs7 w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              <div className="bg-blue-500 h-2.5 rounded-[50%] w-2.5"></div>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.interview}
              </Text>
              <Button
                className="!text-blue_gray-900 cursor-pointer font-epilogue font-medium h-[30px] text-base text-center w-[30px]"
                shape="square"
                color="indigo_50_01"
                size="sm"
                variant="fill"
              >
                {props?.eleven}
              </Button>
            </div>
            <Img
              className="h-6 w-6"
              src="images/img_icon_31.svg"
              alt="icon_Thirteen"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="bg-indigo-50_01 flex flex-col h-14 items-center justify-start w-14">
                  <Img
                    className="h-14 md:h-auto rounded-[50%] w-14"
                    src="images/img_julianwanwnol_56x56.png"
                    alt="julianwanwnol"
                  />
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    {props?.jakegyllSix}
                  </Text>
                  <Text
                    className="text-center text-indigo-A700 text-sm w-auto"
                    size="txtEpilogueSemiBold14IndigoA700"
                  >
                    {props?.viewprofileSix}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.appliedonSix}
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtEpilogueSemiBold14Bluegray900"
                  >
                    {props?.p13july2021five}
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[94px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.scoreSix}
                  </Text>
                  <Input
                    name="frame1263_Five"
                    placeholder="0.0"
                    className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                    wrapClassName="flex w-[53%]"
                    prefix={
                      <Img
                        className="h-5 mr-2 my-auto"
                        src="images/img_icon_17.svg"
                        alt="Icon"
                      />
                    }
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img
                  className="h-14 md:h-auto object-cover w-14"
                  src="images/img_avatar.png"
                  alt="avatar_Three"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    {props?.jakegyllSeven}
                  </Text>
                  <Text
                    className="text-center text-indigo-A700 text-sm w-auto"
                    size="txtEpilogueSemiBold14IndigoA700"
                  >
                    {props?.viewprofileSeven}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.appliedonSeven}
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtEpilogueSemiBold14Bluegray900"
                  >
                    {props?.p13july2021six}
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[94px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.scoreSeven}
                  </Text>
                  <Input
                    name="frame1263_Six"
                    placeholder="0.0"
                    className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                    wrapClassName="flex w-[53%]"
                    prefix={
                      <Img
                        className="h-5 mr-2 my-auto"
                        src="images/img_icon_17.svg"
                        alt="Icon"
                      />
                    }
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="flex flex-col h-14 items-center justify-start w-14">
                  <Img
                    className="h-14 md:h-auto rounded-[50%] w-14"
                    src="images/img_ruisilvestreh_56x56.png"
                    alt="ruisilvestreh"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueBold16Bluegray900"
                  >
                    {props?.jakegyllEight}
                  </Text>
                  <Text
                    className="text-center text-indigo-A700 text-sm w-auto"
                    size="txtEpilogueSemiBold14IndigoA700"
                  >
                    {props?.viewprofileEight}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.appliedonEight}
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtEpilogueSemiBold14Bluegray900"
                  >
                    {props?.p13july2021seven}
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-[94px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-full"
                    size="txtEpilogueRegular14"
                  >
                    {props?.scoreEight}
                  </Text>
                  <Input
                    name="frame1263_Seven"
                    placeholder="0.0"
                    className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                    wrapClassName="flex w-[53%]"
                    prefix={
                      <Img
                        className="h-5 mr-2 my-auto"
                        src="images/img_icon_17.svg"
                        alt="Icon"
                      />
                    }
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start overflow-auto p-2 w-64">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid hover:cursor-pointer flex flex-row items-center justify-between sm:ml-[0] hover:mx-0 sm:px-5 px-6 py-4 hover:shadow-bs8 shadow-bs8 w-60 hover:w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <div className="bg-teal-300 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.hired}
                  </Text>
                  <Button
                    className="!text-blue_gray-900 cursor-pointer font-epilogue font-medium h-[30px] text-base text-center w-[30px]"
                    shape="square"
                    color="indigo_50_01"
                    size="sm"
                    variant="fill"
                  >
                    {props?.three}
                  </Button>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_31.svg"
                  alt="icon"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid hover:cursor-pointer flex flex-row items-center justify-between sm:ml-[0] hover:mx-0 sm:px-5 px-6 py-4 hover:shadow-bs8 shadow-bs8 w-60 hover:w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <div className="bg-deep_orange-400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.declined}
                  </Text>
                  <Button
                    className="!text-blue_gray-900 cursor-pointer font-epilogue font-medium h-[30px] text-base text-center w-[30px]"
                    shape="square"
                    color="indigo_50_01"
                    size="sm"
                    variant="fill"
                  >
                    {props?.twelve}
                  </Button>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_31.svg"
                  alt="icon"
                />
              </div>
            </List>
            <div className="flex sm:flex-col flex-row gap-8 items-center justify-between w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-60">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col h-14 items-center justify-start w-14">
                      <Img
                        className="h-14 md:h-auto rounded-[50%] w-14"
                        src="images/img_ruisilvestreh_1.png"
                        alt="ruisilvestreh_One"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueBold16Bluegray900"
                      >
                        {props?.jakegyllNine}
                      </Text>
                      <Text
                        className="text-center text-indigo-A700 text-sm w-auto"
                        size="txtEpilogueSemiBold14IndigoA700"
                      >
                        {props?.viewprofileNine}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.appliedonNine}
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtEpilogueSemiBold14Bluegray900"
                      >
                        {props?.p13july2021eight}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[94px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.scoreNine}
                      </Text>
                      <Input
                        name="frame1263_Eight"
                        placeholder="0.0"
                        className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[53%]"
                        prefix={
                          <Img
                            className="h-5 mr-2 my-auto"
                            src="images/img_icon_17.svg"
                            alt="Icon"
                          />
                        }
                        size="xs"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col h-14 items-center justify-start w-14">
                      <Img
                        className="h-14 md:h-auto rounded-[50%] w-14"
                        src="images/img_ruisilvestreh_2.png"
                        alt="ruisilvestreh_Two"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueBold16Bluegray900"
                      >
                        {props?.jakegyllTen}
                      </Text>
                      <Text
                        className="text-center text-indigo-A700 text-sm w-auto"
                        size="txtEpilogueSemiBold14IndigoA700"
                      >
                        {props?.viewprofileTen}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.appliedonTen}
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtEpilogueSemiBold14Bluegray900"
                      >
                        {props?.p13july2021nine}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[94px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.scoreTen}
                      </Text>
                      <Input
                        name="frame1263_Nine"
                        placeholder="0.0"
                        className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[53%]"
                        prefix={
                          <Img
                            className="h-5 mr-2 my-auto"
                            src="images/img_icon_17.svg"
                            alt="Icon"
                          />
                        }
                        size="xs"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col h-14 items-center justify-start w-14">
                      <Img
                        className="h-14 md:h-auto rounded-[50%] w-14"
                        src="images/img_ruisilvestreh_3.png"
                        alt="ruisilvestreh_Three"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueBold16Bluegray900"
                      >
                        {props?.jakegyllEleven}
                      </Text>
                      <Text
                        className="text-center text-indigo-A700 text-sm w-auto"
                        size="txtEpilogueSemiBold14IndigoA700"
                      >
                        {props?.viewprofileEleven}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.appliedonEleven}
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtEpilogueSemiBold14Bluegray900"
                      >
                        {props?.p13july2021ten}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[94px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.scoreEleven}
                      </Text>
                      <Input
                        name="frame1263_Ten"
                        placeholder="0.0"
                        className="font-epilogue font-semibold p-0 placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[53%]"
                        prefix={
                          <Img
                            className="h-5 mr-2 my-auto"
                            src="images/img_icon_17.svg"
                            alt="Icon"
                          />
                        }
                        size="xs"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex md:flex-1 flex-col gap-2 items-start w-60 md:w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-start my-0 p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col h-14 items-center justify-start w-14">
                      <Img
                        className="h-14 md:h-auto rounded-[50%] w-14"
                        src="images/img_ruisilvestreh_1.png"
                        alt="ruisilvestreh"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueBold16Bluegray900"
                      >
                        {props?.jakegyll1}
                      </Text>
                      <Text
                        className="text-center text-indigo-A700 text-sm w-auto"
                        size="txtEpilogueSemiBold14IndigoA700"
                      >
                        {props?.viewprofile1}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.appliedon1}
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtEpilogueSemiBold14Bluegray900"
                      >
                        {props?.p13july20211}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[98px]">
                      <Text
                        className="leading-[160.00%] max-w-[98px] md:max-w-full text-blue_gray-400 text-sm"
                        size="txtEpilogueRegular14"
                      >
                        {props?.score1}
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-center w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon_17.svg"
                          alt="icon"
                        />
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtEpilogueSemiBold14Bluegray900"
                        >
                          {props?.zero}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-start my-0 p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col h-14 items-center justify-start w-14">
                      <Img
                        className="h-14 md:h-auto rounded-[50%] w-14"
                        src="images/img_ruisilvestreh_2.png"
                        alt="ruisilvestreh"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueBold16Bluegray900"
                      >
                        {props?.jakegyll2}
                      </Text>
                      <Text
                        className="text-center text-indigo-A700 text-sm w-auto"
                        size="txtEpilogueSemiBold14IndigoA700"
                      >
                        {props?.viewprofile2}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.appliedon2}
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtEpilogueSemiBold14Bluegray900"
                      >
                        {props?.p13july20212}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[98px]">
                      <Text
                        className="leading-[160.00%] max-w-[98px] md:max-w-full text-blue_gray-400 text-sm"
                        size="txtEpilogueRegular14"
                      >
                        {props?.score2}
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-center w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon_17.svg"
                          alt="icon"
                        />
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtEpilogueSemiBold14Bluegray900"
                        >
                          {props?.zero1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-start my-0 p-6 sm:px-5 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col h-14 items-center justify-start w-14">
                      <Img
                        className="h-14 md:h-auto rounded-[50%] w-14"
                        src="images/img_ruisilvestreh_3.png"
                        alt="ruisilvestreh"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueBold16Bluegray900"
                      >
                        {props?.jakegyll3}
                      </Text>
                      <Text
                        className="text-center text-indigo-A700 text-sm w-auto"
                        size="txtEpilogueSemiBold14IndigoA700"
                      >
                        {props?.viewprofile3}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[98px]">
                      <Text
                        className="text-blue_gray-400 text-sm w-full"
                        size="txtEpilogueRegular14"
                      >
                        {props?.appliedon3}
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-full"
                        size="txtEpilogueSemiBold14Bluegray900"
                      >
                        {props?.p13july20213}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[98px]">
                      <Text
                        className="leading-[160.00%] max-w-[98px] md:max-w-full text-blue_gray-400 text-sm"
                        size="txtEpilogueRegular14"
                      >
                        {props?.score3}
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-center w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_icon_17.svg"
                          alt="icon"
                        />
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtEpilogueSemiBold14Bluegray900"
                        >
                          {props?.zero2}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-2 w-[37px]">
          <div className="bg-white-A700 border border-gray-300 border-solid h-[646px] w-full"></div>
        </div>
      </div>
    </>
  );
};

C311DashboardCompanyApplicantsRowellipseeightysix.defaultProps = {
  inreview: "In Review",
  ten: "10",
  jakegyll: "Jake Gyll",
  viewprofile: "View Profile",
  appliedon: "Applied on",
  p13july2021: "13 July, 2021",
  score: "Score",
  jakegyllOne: "Jenny Wilson",
  viewprofileOne: "View Profile",
  appliedonOne: "Applied on",
  p13july2021one: "13 July, 2021",
  scoreOne: "Score",
  jakegyllTwo: "Jacob Jones",
  viewprofileTwo: "View Profile",
  appliedonTwo: "Applied on",
  p13july2021two: "13 July, 2021",
  scoreTwo: "Score",
  jakegyllThree: "Wade Warren",
  viewprofileThree: "View Profile",
  appliedonThree: "Applied on",
  scoreThree: "Score",
  shortlisted: "Shortlisted",
  eight: "8",
  jakegyllFour: "Jane Cooper",
  viewprofileFour: "View Profile",
  appliedonFour: "Applied on",
  p13july2021three: "13 July, 2021",
  scoreFour: "Score",
  jakegyllFive: "Courtney Henry",
  viewprofileFive: "View Profile",
  appliedonFive: "Applied on",
  p13july2021four: "13 July, 2021",
  scoreFive: "Score",
  interview: "Interview",
  eleven: "11",
  jakegyllSix: "Floyd Miles",
  viewprofileSix: "View Profile",
  appliedonSix: "Applied on",
  p13july2021five: "13 July, 2021",
  scoreSix: "Score",
  jakegyllSeven: "Devon Lane",
  viewprofileSeven: "View Profile",
  appliedonSeven: "Applied on",
  p13july2021six: "13 July, 2021",
  scoreSeven: "Score",
  jakegyllEight: "Marvin McKin...",
  viewprofileEight: "View Profile",
  appliedonEight: "Applied on",
  p13july2021seven: "13 July, 2021",
  scoreEight: "Score",
  hired: "Hired",
  three: "3",
  declined: "Declined",
  twelve: "12",
  jakegyllNine: "Annette Black",
  viewprofileNine: "View Profile",
  appliedonNine: "Applied on",
  p13july2021eight: "13 July, 2021",
  scoreNine: "Score",
  jakegyllTen: "Brooklyn Sim...",
  viewprofileTen: "View Profile",
  appliedonTen: "Applied on",
  p13july2021nine: "13 July, 2021",
  scoreTen: "Score",
  jakegyllEleven: "Ronald Richa...",
  viewprofileEleven: "View Profile",
  appliedonEleven: "Applied on",
  p13july2021ten: "13 July, 2021",
  scoreEleven: "Score",
  jakegyll1: "Annette Black",
  viewprofile1: "View Profile",
  appliedon1: "Applied on",
  p13july20211: "13 July, 2021",
  score1: "Score",
  zero: "0.0",
  jakegyll2: "Brooklyn Sim...",
  viewprofile2: "View Profile",
  appliedon2: "Applied on",
  p13july20212: "13 July, 2021",
  score2: "Score",
  zero1: "0.0",
  jakegyll3: "Ronald Richa...",
  viewprofile3: "View Profile",
  appliedon3: "Applied on",
  p13july20213: "13 July, 2021",
  score3: "Score",
  zero2: "0.0",
};

export default C311DashboardCompanyApplicantsRowellipseeightysix;
