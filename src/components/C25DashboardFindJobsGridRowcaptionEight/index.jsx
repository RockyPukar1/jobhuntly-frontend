import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C25DashboardFindJobsGridRowcaptionEight = (props) => {
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
                  size="txtEpilogueRegular16Bluegray400"
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
                    alt="icon_Four"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start w-[98%] md:w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_television_teal_300.svg"
                      alt="television"
                    />
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fullTime}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassiOne}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime1}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad1}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country1}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business}
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
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften1}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_thumbsup_cyan_400.svg"
                      alt="thumbsup"
                    />
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime2}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi1}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad2}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country2}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                    {props?.design2}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften2}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_bvboaeet400x400.png"
                        alt="bvboaeet400x400"
                      />
                    </div>
                    <Button
                      className="!text-deep_orange-400 cursor-pointer font-epilogue font-semibold min-w-[93px] text-center text-sm"
                      shape="round"
                      color="deep_orange_400_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.internship}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi2}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad3}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country3}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                    {props?.design3}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften3}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_s93hu9p3400x400.png"
                        alt="s93hu9p3400x400"
                      />
                    </div>
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime3}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi3}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad4}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.parisfrance}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business1}
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
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften4}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_v6ghzad400x400.png"
                        alt="v6ghzad400x400"
                      />
                    </div>
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime4}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi4}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad5}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.parisfrance1}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                    {props?.design5}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften5}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_fisx9qyy400x400.png"
                        alt="fisx9qyy400x400"
                      />
                    </div>
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime5}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi5}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad6}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country4}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                    {props?.design6}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften6}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_quvcta52400x400.png"
                        alt="quvcta52400x400"
                      />
                    </div>
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime6}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi6}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad7}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country5}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business2}
                  </Button>
                  <Button
                    className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                    shape="round"
                    color="indigo_A700"
                    size="md"
                    variant="outline"
                  >
                    {props?.design7}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften7}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <div className="flex flex-col h-12 items-center justify-start w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_godaddylogo01.png"
                        alt="godaddylogoOne"
                      />
                    </div>
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[88px] text-center text-sm"
                      shape="round"
                      color="yellow_900_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.partTime}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi7}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad8}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country6}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                    {props?.design8}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften8}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_television_teal_300.svg"
                      alt="television"
                    />
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime7}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassione1}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad9}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country7}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                    {props?.design9}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften9}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime8}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi8}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad10}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.country8}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business3}
                  </Button>
                  <Button
                    className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                    shape="round"
                    color="indigo_A700"
                    size="md"
                    variant="outline"
                  >
                    {props?.design10}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften10}
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-[22px] items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row items-start justify-between w-[205px]">
                    <Img
                      className="h-12 w-12"
                      src="images/img_thumbsup_cyan_400.svg"
                      alt="thumbsup"
                    />
                    <Button
                      className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                      shape="round"
                      color="teal_300_19"
                      size="md"
                      variant="fill"
                    >
                      {props?.fulltime9}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtEpilogueSemiBold18Bluegray900"
                    >
                      {props?.socialmediaassi9}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.nomad11}
                      </Text>
                      <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtEpilogueRegular16Bluegray400"
                      >
                        {props?.parisfrance2}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                    shape="round"
                    color="yellow_700"
                    size="md"
                    variant="outline"
                  >
                    {props?.marketing7}
                  </Button>
                  <Button
                    className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                    shape="round"
                    color="indigo_A700"
                    size="md"
                    variant="outline"
                  >
                    {props?.design11}
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Img
                    className="h-1.5 w-full"
                    src="images/img_progressbar.svg"
                    alt="progressbar"
                  />
                  {props?.p5appliedoften11}
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
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
      </div>
    </>
  );
};

C25DashboardFindJobsGridRowcaptionEight.defaultProps = {
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
  fullTime: "Full-Time",
  socialmediaassiOne: "Social Media Assistant",
  nomad: "Nomad",
  country: "Paris, France",
  marketing: "Marketing",
  design: "Design",
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
  fulltime1: "Full-Time",
  socialmediaassi: "Brand Designer",
  nomad1: "Nomad",
  country1: "Paris, France",
  business: "Business",
  design1: "Design",
  p5appliedoften1: (
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
  fulltime2: "Full-Time",
  socialmediaassi1: "Interactive Developer",
  nomad2: "Terraform",
  country2: "Berlin, Germany",
  marketing1: "Marketing",
  design2: "Design",
  p5appliedoften2: (
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
  internship: "Internship",
  socialmediaassi2: "Email Marketing",
  nomad3: "Nomad",
  country3: "Madrid, Spain",
  marketing2: "Marketing",
  design3: "Design",
  p5appliedoften3: (
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
  fulltime3: "Full-Time",
  socialmediaassi3: "Product Designer",
  nomad4: "ClassPass",
  parisfrance: "Berlin, Germ..",
  business1: "Business",
  design4: "Design",
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
  fulltime4: "Full-Time",
  socialmediaassi4: "Interactive Developer",
  nomad5: "Canva",
  parisfrance1: "Birmingham, UK",
  marketing3: "Marketing",
  design5: "Design",
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
  fulltime5: "Full-Time",
  socialmediaassi5: "Customer Manager",
  nomad6: "Pitch",
  country4: "Roma, Italy",
  marketing4: "Marketing",
  design6: "Design",
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
  fulltime6: "Full-Time",
  socialmediaassi6: "Visual Designer",
  nomad7: "Blinkist",
  country5: "Lyon, France",
  business2: "Business",
  design7: "Design",
  p5appliedoften7: (
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
  partTime: "Part-Time",
  socialmediaassi7: "Java Developer",
  nomad8: "GoDaddy",
  country6: "Oslo, Sweden",
  marketing5: "Marketing",
  design8: "Design",
  p5appliedoften8: (
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
  fulltime7: "Full-Time",
  socialmediaassione1: "Social Media Assistant",
  nomad9: "Nomad",
  country7: "Paris, France",
  marketing6: "Marketing",
  design9: "Design",
  p5appliedoften9: (
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
  fulltime8: "Full-Time",
  socialmediaassi8: "Brand Designer",
  nomad10: "Nomad",
  country8: "Paris, France",
  business3: "Business",
  design10: "Design",
  p5appliedoften10: (
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
  fulltime9: "Full-Time",
  socialmediaassi9: "Interactive Developer",
  nomad11: "Terraform",
  parisfrance2: "Berlin, Ger...",
  marketing7: "Marketing",
  design11: "Design",
  p5appliedoften11: (
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

export default C25DashboardFindJobsGridRowcaptionEight;
