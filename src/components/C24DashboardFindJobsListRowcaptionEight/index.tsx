import React from "react";

import { Button, Img, Line, List, Text } from "components";

type C24DashboardFindJobsListRowcaptionEightProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "typeofemploymenOne"
  | "captionEight"
  | "captionNine"
  | "captionTen"
  | "captionEleven"
  | "captionTwelve"
  | "categories"
  | "captionThirteen"
  | "captionFourteen"
  | "captionFifteen"
  | "captionSixteen"
  | "captionSeventeen"
  | "captionEighteen"
  | "captionNineteen"
  | "captionTwenty"
  | "joblevel"
  | "caption"
  | "captionOne"
  | "captionTwo"
  | "captionThree"
  | "captionFour"
  | "salaryrange"
  | "price"
  | "priceOne"
  | "priceTwo"
  | "priceThree"
  | "alljobs"
  | "showing73resultone"
  | "sortby"
  | "mostrelevant"
  | "socialmediaassiOne"
  | "nomad"
  | "country"
  | "fullTime"
  | "marketing"
  | "design"
  | "apply"
  | "p5appliedoften"
  | "socialmediaassi"
  | "nomad1"
  | "parisfrance"
  | "fulltime1"
  | "marketing1"
  | "design1"
  | "apply1"
  | "p5appliedoften1"
  | "socialmediaassi1"
  | "nomad2"
  | "country1"
  | "fulltime2"
  | "marketing2"
  | "design2"
  | "apply2"
  | "p5appliedoften2"
  | "socialmediaassi2"
  | "nomad3"
  | "country2"
  | "fulltime3"
  | "marketing3"
  | "design3"
  | "apply3"
  | "p5appliedoften3"
  | "socialmediaassi3"
  | "nomad4"
  | "country3"
  | "fulltime4"
  | "marketing4"
  | "design4"
  | "apply4"
  | "p5appliedoften4"
  | "socialmediaassi4"
  | "nomad5"
  | "country4"
  | "fulltime5"
  | "marketing5"
  | "design5"
  | "apply5"
  | "p5appliedoften5"
  | "socialmediaassi5"
  | "nomad6"
  | "country5"
  | "fulltime6"
  | "marketing6"
  | "design6"
  | "apply6"
  | "p5appliedoften6"
  | "one"
  | "oneOne"
  | "oneTwo"
  | "oneThree"
  | "oneFour"
  | "oneFive"
  | "oneSix"
> &
  Partial<{
    typeofemploymenOne: string;
    captionEight: string;
    captionNine: string;
    captionTen: string;
    captionEleven: string;
    captionTwelve: string;
    categories: string;
    captionThirteen: string;
    captionFourteen: string;
    captionFifteen: string;
    captionSixteen: string;
    captionSeventeen: string;
    captionEighteen: string;
    captionNineteen: string;
    captionTwenty: string;
    joblevel: string;
    caption: string;
    captionOne: string;
    captionTwo: string;
    captionThree: string;
    captionFour: string;
    salaryrange: string;
    price: string;
    priceOne: string;
    priceTwo: string;
    priceThree: string;
    alljobs: string;
    showing73resultone: string;
    sortby: string;
    mostrelevant: string;
    socialmediaassiOne: string;
    nomad: string;
    country: string;
    fullTime: string;
    marketing: string;
    design: string;
    apply: string;
    p5appliedoften: JSX.Element | string;
    socialmediaassi: string;
    nomad1: string;
    parisfrance: string;
    fulltime1: string;
    marketing1: string;
    design1: string;
    apply1: string;
    p5appliedoften1: JSX.Element | string;
    socialmediaassi1: string;
    nomad2: string;
    country1: string;
    fulltime2: string;
    marketing2: string;
    design2: string;
    apply2: string;
    p5appliedoften2: JSX.Element | string;
    socialmediaassi2: string;
    nomad3: string;
    country2: string;
    fulltime3: string;
    marketing3: string;
    design3: string;
    apply3: string;
    p5appliedoften3: JSX.Element | string;
    socialmediaassi3: string;
    nomad4: string;
    country3: string;
    fulltime4: string;
    marketing4: string;
    design4: string;
    apply4: string;
    p5appliedoften4: JSX.Element | string;
    socialmediaassi4: string;
    nomad5: string;
    country4: string;
    fulltime5: string;
    marketing5: string;
    design5: string;
    apply5: string;
    p5appliedoften5: JSX.Element | string;
    socialmediaassi5: string;
    nomad6: string;
    country5: string;
    fulltime6: string;
    marketing6: string;
    design6: string;
    apply6: string;
    p5appliedoften6: JSX.Element | string;
    one: string;
    oneOne: string;
    oneTwo: string;
    oneThree: string;
    oneFour: string;
    oneFive: string;
    oneSix: string;
  }>;

const C24DashboardFindJobsListRowcaptionEight: React.FC<
  C24DashboardFindJobsListRowcaptionEightProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start w-[234px]">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-row gap-2 items-center justify-between w-full">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
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
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionEight}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionNine}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionTen}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionEleven}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionTwelve}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-row gap-2 items-center justify-between w-full">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.categories}
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_arrowup.svg"
                alt="arrowup_One"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionThirteen}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionFourteen}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionFifteen}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Button
                    className="border border-indigo-A700 border-solid flex h-6 items-center justify-center rounded w-6"
                    color="indigo_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img src="images/img_checkmark.svg" alt="checkmark" />
                  </Button>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionSixteen}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionSeventeen}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionEighteen}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionNineteen}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Button
                    className="border border-indigo-A700 border-solid flex h-6 items-center justify-center rounded w-6"
                    color="indigo_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img src="images/img_checkmark.svg" alt="checkmark_One" />
                  </Button>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.captionTwenty}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col gap-10 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-center justify-between w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.joblevel}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[69%] md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.caption}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.captionOne}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.captionTwo}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Button
                      className="border border-indigo-A700 border-solid flex h-6 items-center justify-center rounded w-6"
                      color="indigo_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img src="images/img_checkmark.svg" alt="checkmark" />
                    </Button>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.captionThree}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.captionFour}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-center justify-between w-full">
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.salaryrange}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.price}
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.priceOne}
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="border-2 border-gray-300 border-solid h-6 rounded w-6"></div>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.priceTwo}
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Button
                  className="border border-indigo-A700 border-solid flex h-6 items-center justify-center rounded w-6"
                  color="indigo_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark" />
                </Button>
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.priceThree}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.alljobs}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueRegular16Bluegray900"
              >
                {props?.showing73resultone}
              </Text>
            </div>
            <div className="flex flex-row gap-[22px] items-center justify-center w-auto">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 text-right w-auto"
                  size="txtEpilogueRegular16"
                >
                  {props?.sortby}
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.mostrelevant}
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
                    alt="icon_Four"
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
            className="flex flex-col gap-4 items-start w-full"
            orientation="vertical"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 p-6 sm:px-5 w-full">
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
                    {props?.socialmediaassiOne}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.nomad}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.country}
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
                      {props?.fullTime}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketing}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.design}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="!text-white-A700 cursor-pointer font-bold font-epilogue text-base text-center w-full"
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
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 p-6 sm:px-5 w-full">
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
                    {props?.socialmediaassi}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.nomad1}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.parisfrance}
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
                      {props?.fulltime1}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketing1}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.design1}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="!text-white-A700 cursor-pointer font-bold font-epilogue text-base text-center w-full"
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
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 p-6 sm:px-5 w-full">
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
                    {props?.socialmediaassi1}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.nomad2}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.country1}
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
                      {props?.fulltime2}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketing2}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.design2}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[165px]">
                <Button
                  className="!text-white-A700 cursor-pointer font-bold font-epilogue text-base text-center w-full"
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
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 p-6 sm:px-5 w-full">
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
                    {props?.socialmediaassi2}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.nomad3}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.country2}
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
                      {props?.fulltime3}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketing3}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.design3}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="!text-white-A700 cursor-pointer font-bold font-epilogue text-base text-center w-full"
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
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 p-6 sm:px-5 w-full">
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
                    {props?.socialmediaassi3}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.nomad4}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.country3}
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
                      {props?.fulltime4}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketing4}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.design4}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="!text-white-A700 cursor-pointer font-bold font-epilogue text-base text-center w-full"
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
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 p-6 sm:px-5 w-full">
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
                    {props?.socialmediaassi4}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.nomad5}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.country4}
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
                      {props?.fulltime5}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketing5}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.design5}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="!text-white-A700 cursor-pointer font-bold font-epilogue text-base text-center w-full"
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
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 p-6 sm:px-5 w-full">
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
                    {props?.socialmediaassi5}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.nomad6}
                    </Text>
                    <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtEpilogueRegular16"
                    >
                      {props?.country5}
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
                      {props?.fulltime6}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketing6}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.design6}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-start justify-between w-[164px]">
                <Button
                  className="!text-white-A700 cursor-pointer font-bold font-epilogue text-base text-center w-full"
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
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft_blue_gray_900_24x24.svg"
              alt="arrowleft"
            />
            <div className="flex flex-row items-start justify-start w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-inter font-semibold h-[46px] rounded-lg text-base text-center w-[46px]"
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

C24DashboardFindJobsListRowcaptionEight.defaultProps = {
  typeofemploymenOne: "Type of Employment",
  captionEight: "Full-time (3)",
  captionNine: "Part-Time (5)",
  captionTen: "Remote (2)",
  captionEleven: "Internship (24)",
  captionTwelve: "Contract (3)",
  categories: "Categories",
  captionThirteen: "Design (24)",
  captionFourteen: "Sales (3)",
  captionFifteen: "Marketing (3)",
  captionSixteen: "Business (3)",
  captionSeventeen: "Human Resource (6)",
  captionEighteen: "Finance (4)",
  captionNineteen: "Engineering (4)",
  captionTwenty: "Technology (5)",
  joblevel: "Job Level",
  caption: "Entry Level (57)",
  captionOne: "Mid Level (3)",
  captionTwo: "Senior Level (5)",
  captionThree: "Director (12)",
  captionFour: "VP or Above (8)",
  salaryrange: "Salary Range",
  price: "$700 - $1000 (4)",
  priceOne: "$100 - $1500 (6)",
  priceTwo: "$1500 - $2000 (10)",
  priceThree: "$3000 or above (4)",
  alljobs: "All Jobs",
  showing73resultone: "Showing 73 results",
  sortby: "Sort by:",
  mostrelevant: "Most relevant",
  socialmediaassiOne: "Social Media Assistant",
  nomad: "Nomad",
  country: "Paris, France",
  fullTime: "Full-Time",
  marketing: "Marketing",
  design: "Design",
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
  socialmediaassi: "Brand Designer",
  nomad1: "Dropbox",
  parisfrance: "San Fransisco, USA",
  fulltime1: "Full-Time",
  marketing1: "Marketing",
  design1: "Design",
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
  socialmediaassi1: "Interactive Developer",
  nomad2: "Terraform",
  country1: "Hamburg, Germany",
  fulltime2: "Full-Time",
  marketing2: "Marketing",
  design2: "Design",
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
  socialmediaassi2: "Email Marketing",
  nomad3: "Revolut",
  country2: "Madrid, Spain",
  fulltime3: "Full-Time",
  marketing3: "Marketing",
  design3: "Design",
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
  socialmediaassi3: "Lead Engineer",
  nomad4: "Canva",
  country3: "Ankara, Turkey",
  fulltime4: "Full-Time",
  marketing4: "Marketing",
  design4: "Design",
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
  socialmediaassi4: "Product Designer",
  nomad5: "ClassPass",
  country4: "Berlin, Germany",
  fulltime5: "Full-Time",
  marketing5: "Marketing",
  design5: "Design",
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
  socialmediaassi5: "Customer Manager",
  nomad6: "Pitch",
  country5: "Berlin, Germany",
  fulltime6: "Full-Time",
  marketing6: "Marketing",
  design6: "Design",
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

export default C24DashboardFindJobsListRowcaptionEight;
