import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";

const C12FindJobsLandingpagejob = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[234px]">
          <List
            className="flex flex-col gap-10 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-center justify-between w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueBold16Bluegray900"
                >
                  {props?.typeofemploymenOne}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption"
                    id="caption"
                    label="Full-time (3)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_One"
                    id="caption_One"
                    label="Part-Time (5)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Two"
                    id="caption_Two"
                    label="Remote (2)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Three"
                    id="caption_Three"
                    label="Internship (24)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Four"
                    id="caption_Four"
                    label="Contract (3)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-center justify-between w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueBold16Bluegray900"
                >
                  {props?.categoriestext}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption"
                    id="caption6"
                    label="Design (24)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_One"
                    id="caption_One2"
                    label="Sales (3)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Two"
                    id="caption_Two2"
                    label="Marketing (3)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="border border-indigo-A700 border-solid h-6 mr-[5px] w-6"
                    name="caption_Three"
                    id="caption_Three2"
                    label="Business (3)"
                    shape="round"
                    color="indigo_A700"
                    size="xs"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Four"
                    id="caption_Four2"
                    label="Human Resource (6)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Five"
                    id="caption_Five"
                    label="Finance (4)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Six"
                    id="caption_Six"
                    label="Engineering (4)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="border border-indigo-A700 border-solid h-6 mr-[5px] w-6"
                    name="caption_Seven"
                    id="caption_Seven"
                    label="Technology (5)"
                    shape="round"
                    color="indigo_A700"
                    size="xs"
                    variant="fill"
                  ></CheckBox>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-center justify-between w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueBold16Bluegray900"
                >
                  {props?.jobleveltext}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[69%] md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption"
                    id="caption14"
                    label="Entry Level (57)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_One"
                    id="caption_One3"
                    label="Mid Level (3)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Two"
                    id="caption_Two3"
                    label="Senior Level (5)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="border border-indigo-A700 border-solid h-6 mr-[5px] w-6"
                    name="caption_Three"
                    id="caption_Three3"
                    label="Director (12)"
                    shape="round"
                    color="indigo_A700"
                    size="xs"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="!text-blue_gray-700 font-epilogue text-base text-left"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="caption_Four"
                    id="caption_Four3"
                    label="VP or Above (8)"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></CheckBox>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-center justify-between w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueBold16Bluegray900"
                >
                  {props?.salaryrangetext}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <CheckBox
                className="!text-blue_gray-700 font-epilogue text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="caption"
                id="caption19"
                label="$700 - $1000 (4)"
                shape="round"
                color="gray_300"
                size="xs"
                variant="outline"
              ></CheckBox>
              <CheckBox
                className="!text-blue_gray-700 font-epilogue text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="caption_One"
                id="caption_One4"
                label="$100 - $1500 (6)"
                shape="round"
                color="gray_300"
                size="xs"
                variant="outline"
              ></CheckBox>
              <CheckBox
                className="!text-blue_gray-700 font-epilogue text-base text-left"
                inputClassName="h-6 mr-[5px] w-6"
                name="caption_Two"
                id="caption_Two4"
                label="$1500 - $2000 (10)"
                shape="round"
                color="gray_300"
                size="xs"
                variant="outline"
              ></CheckBox>
              <CheckBox
                className="!text-blue_gray-700 font-epilogue text-base text-left"
                inputClassName="border border-indigo-A700 border-solid h-6 mr-[5px] w-6"
                name="caption_Three"
                id="caption_Three4"
                label="$3000 or above (4)"
                shape="round"
                color="indigo_A700"
                size="xs"
                variant="fill"
              ></CheckBox>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center w-auto md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[919px] w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtClashDisplayVariableSemiBold32"
              >
                {props?.alljobstext}
              </Text>
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueRegular16Bluegray400"
              >
                {props?.showingresultstext}
              </Text>
            </div>
            <div className="flex flex-row gap-[22px] items-center justify-center w-auto">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 text-right w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.sortby}
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.mostrelevanttext}
                  </Text>
                  <div className="flex flex-col h-4 items-center justify-start w-4">
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown_indigo_a700.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
              <Line className="bg-gray-900_63 h-8 w-px" />
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start p-2 w-10">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_700.svg"
                    alt="icon"
                  />
                </div>
                <Button
                  className="flex h-10 items-center justify-center rounded w-10"
                  color="indigo_A700_5f"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_user_indigo_a700.svg"
                    alt="user"
                  />
                </Button>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col gap-4 items-start w-auto"
            orientation="vertical"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[919px] my-0 p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Img
                  className="h-16 w-16"
                  src="images/img_television.svg"
                  alt="television"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.socialmediaassistanttext}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.nomadtext}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.countrytext}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltimebutton}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingbutton}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designbutton}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
                  shape="square"
                  color="indigo_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.apply}
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften}
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[919px] my-0 p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Img
                  className="h-16 w-16"
                  src="images/img_close_blue_a700.svg"
                  alt="close"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.branddesignertext}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.dropboxtext}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.parisfrancetext}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltimebutton1}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingbutton1}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designbutton1}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
                  shape="square"
                  color="indigo_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.apply1}
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar_gray_300.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften1}
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[919px] my-0 p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <Img
                  className="h-16 w-16"
                  src="images/img_companylogo.svg"
                  alt="companylogo"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.interactivedevelopertext}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.terraformtext}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.hamburggermanytext}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltimebutton2}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingbutton2}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designbutton2}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[165px]">
                <Button
                  className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
                  shape="square"
                  color="indigo_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.apply2}
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar_gray_300_6x165.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften2}
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[919px] my-0 p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col h-16 items-center justify-start w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_bvboaeet400x400_64x64.png"
                    alt="bvboaeet400x400"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.leadengineertext}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.canvatext}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.ankaraturkeytext}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltimebutton3}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingbutton3}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designbutton3}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
                  shape="square"
                  color="indigo_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.apply3}
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar_gray_300_6x164.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften3}
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[919px] my-0 p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col h-16 items-center justify-start w-16">
                  <Img
                    className="h-16 md:h-auto object-cover w-16"
                    src="images/img_v6ghzad400x400.png"
                    alt="v6ghzad400x400"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.productdesignertext}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.classpasstext}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.berlingermanytext}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltimebutton4}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingbutton4}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designbutton4}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
                  shape="square"
                  color="indigo_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.apply4}
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften4}
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[919px] my-0 p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col h-16 items-center justify-start w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_s93hu9p3400x400_64x64.png"
                    alt="s93hu9p3400x400"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.customermanagertext}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.pitchtext}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.berlingermanytext1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltimebutton5}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingbutton5}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designbutton5}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
                  shape="square"
                  color="indigo_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.apply5}
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften5}
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[919px] my-0 p-6 sm:px-5 w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col h-16 items-center justify-start w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_fisx9qyy400x400_64x64.png"
                    alt="fisx9qyy400x400"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.emailmarketingtext}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.revoluttext}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.madridspaintext}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltimebutton6}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingbutton6}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designbutton6}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
                  shape="square"
                  color="indigo_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.apply6}
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften6}
                </div>
              </div>
            </div>
          </List>
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-center">
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
              <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.oneTwo}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.oneThree}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.oneFour}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.oneFive}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg w-[46px]">
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtInterSemiBold16"
                >
                  {props?.oneSix}
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

C12FindJobsLandingpagejob.defaultProps = {
  typeofemploymenOne: "Type of Employment",
  categoriestext: "Categories",
  jobleveltext: "Job Level",
  salaryrangetext: "Salary Range",
  alljobstext: "All Jobs",
  showingresultstext: "Showing 73 results",
  sortby: "Sort by:",
  mostrelevanttext: "Most relevant",
  socialmediaassistanttext: "Social Media Assistant",
  nomadtext: "Nomad",
  countrytext: "Paris, France",
  fulltimebutton: "Full-Time",
  marketingbutton: "Marketing",
  designbutton: "Design",
  apply: "Apply",
  p5appliedoften: (
    <Text
      className="text-black-900 text-center text-sm w-auto"
      size="txtEpilogueRegular14Black900"
    >
      <span className="text-blue_gray-900 font-epilogue font-semibold">
        5 applied
      </span>
      <span className="text-black-900 font-epilogue font-normal"> </span>
      <span className="text-blue_gray-400 font-epilogue font-normal">
        of 10 capacity
      </span>
    </Text>
  ),
  branddesignertext: "Brand Designer",
  dropboxtext: "Dropbox",
  parisfrancetext: "San Fransisco, USA",
  fulltimebutton1: "Full-Time",
  marketingbutton1: "Marketing",
  designbutton1: "Design",
  apply1: "Apply",
  p5appliedoften1: (
    <Text
      className="text-black-900 text-center text-sm w-auto"
      size="txtEpilogueRegular14Black900"
    >
      <span className="text-blue_gray-900 font-epilogue font-semibold">
        2 applied
      </span>
      <span className="text-black-900 font-epilogue font-normal"> </span>
      <span className="text-blue_gray-400 font-epilogue font-normal">
        of 10 capacity
      </span>
    </Text>
  ),
  interactivedevelopertext: "Interactive Developer",
  terraformtext: "Terraform",
  hamburggermanytext: "Hamburg, Germany",
  fulltimebutton2: "Full-Time",
  marketingbutton2: "Marketing",
  designbutton2: "Design",
  apply2: "Apply",
  p5appliedoften2: (
    <Text
      className="text-black-900 text-center text-sm w-auto"
      size="txtEpilogueRegular14Black900"
    >
      <span className="text-blue_gray-900 font-epilogue font-semibold">
        8 applied
      </span>
      <span className="text-black-900 font-epilogue font-normal"> </span>
      <span className="text-blue_gray-400 font-epilogue font-normal">
        of 12 capacity
      </span>
    </Text>
  ),
  leadengineertext: "Email Marketing",
  canvatext: "Revolut",
  ankaraturkeytext: "Madrid, Spain",
  fulltimebutton3: "Full-Time",
  marketingbutton3: "Marketing",
  designbutton3: "Design",
  apply3: "Apply",
  p5appliedoften3: (
    <Text
      className="text-black-900 text-center text-sm w-auto"
      size="txtEpilogueRegular14Black900"
    >
      <span className="text-blue_gray-900 font-epilogue font-semibold">
        0 applied
      </span>
      <span className="text-black-900 font-epilogue font-normal"> </span>
      <span className="text-blue_gray-400 font-epilogue font-normal">
        of 10 capacity
      </span>
    </Text>
  ),
  productdesignertext: "Lead Engineer",
  classpasstext: "Canva",
  berlingermanytext: "Ankara, Turkey",
  fulltimebutton4: "Full-Time",
  marketingbutton4: "Marketing",
  designbutton4: "Design",
  apply4: "Apply",
  p5appliedoften4: (
    <Text
      className="text-black-900 text-center text-sm w-auto"
      size="txtEpilogueRegular14Black900"
    >
      <span className="text-blue_gray-900 font-epilogue font-semibold">
        5 applied
      </span>
      <span className="text-black-900 font-epilogue font-normal"> </span>
      <span className="text-blue_gray-400 font-epilogue font-normal">
        of 10 capacity
      </span>
    </Text>
  ),
  customermanagertext: "Product Designer",
  pitchtext: "ClassPass",
  berlingermanytext1: "Berlin, Germany",
  fulltimebutton5: "Full-Time",
  marketingbutton5: "Marketing",
  designbutton5: "Design",
  apply5: "Apply",
  p5appliedoften5: (
    <Text
      className="text-black-900 text-center text-sm w-auto"
      size="txtEpilogueRegular14Black900"
    >
      <span className="text-blue_gray-900 font-epilogue font-semibold">
        5 applied
      </span>
      <span className="text-black-900 font-epilogue font-normal"> </span>
      <span className="text-blue_gray-400 font-epilogue font-normal">
        of 10 capacity
      </span>
    </Text>
  ),
  emailmarketingtext: "Customer Manager",
  revoluttext: "Pitch",
  madridspaintext: "Berlin, Germany",
  fulltimebutton6: "Full-Time",
  marketingbutton6: "Marketing",
  designbutton6: "Design",
  apply6: "Apply",
  p5appliedoften6: (
    <Text
      className="text-black-900 text-center text-sm w-auto"
      size="txtEpilogueRegular14Black900"
    >
      <span className="text-blue_gray-900 font-epilogue font-semibold">
        5 applied
      </span>
      <span className="text-black-900 font-epilogue font-normal"> </span>
      <span className="text-blue_gray-400 font-epilogue font-normal">
        of 10 capacity
      </span>
    </Text>
  ),
  one: "1",
  oneOne: "2",
  oneTwo: "3",
  oneThree: "4",
  oneFour: "5",
  oneFive: "...",
  oneSix: "33",
};

export default C12FindJobsLandingpagejob;
