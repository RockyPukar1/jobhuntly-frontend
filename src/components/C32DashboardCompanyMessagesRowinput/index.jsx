import React from "react";

import { Img, Input, Line, List, Text } from "components";

const C32DashboardCompanyMessagesRowinput = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start p-8 sm:px-5 shadow-bs3 w-auto sm:w-full">
          <Input
            name="input"
            placeholder="Search messages"
            className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
            wrapClassName="border border-gray-300 border-solid flex w-full"
            prefix={
              <Img
                className="h-6 mr-4 my-auto"
                src="images/img_rewind_blue_gray_200.svg"
                alt="rewind"
              />
            }
            shape="square"
            color="white_A700"
            size="lg"
            variant="fill"
          ></Input>
          <div className="flex flex-col items-start justify-start w-auto">
            <List
              className="flex flex-col gap-px items-center pt-[86px] w-full"
              orientation="vertical"
            >
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 shadow-bs1 w-auto">
                <div className="bg-indigo-50_01 flex flex-col h-12 items-center justify-start w-12">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_julianwanwnol_48x48.png"
                    alt="julianwanwnol"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.joebartmann}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[239px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.heythanksforyouOne}
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 w-auto">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueSemiBold16Bluegray900"
                      >
                        {props?.janmayer}
                      </Text>
                      <div className="bg-indigo-A700 h-1.5 rounded-[50%] w-1.5"></div>
                    </div>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time1}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[246px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.wewanttoinvite}
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 shadow-bs1 w-auto">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.joebartmann1}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time2}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[239px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.heythanksforyouone1}
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 shadow-bs1 w-auto">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.joebartmann2}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time3}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[239px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.heythanksforyouone2}
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 shadow-bs1 w-auto">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_avatar.png"
                  alt="avatar"
                />
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.joebartmann3}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time4}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[239px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.heythanksforyouone3}
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 shadow-bs1 w-auto">
                <div className="flex flex-col h-12 items-center justify-start w-12">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_imagepeople6.png"
                    alt="imagepeopleSix"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.joebartmann4}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time5}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[239px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.heythanksforyouone4}
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 shadow-bs1 w-auto">
                <div className="flex flex-col h-12 items-center justify-start w-12">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_imagepeople6_48x48.png"
                    alt="imagepeopleSix"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.joebartmann5}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time6}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[239px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.heythanksforyouone5}
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 shadow-bs1 w-auto">
                <div className="flex flex-col h-12 items-center justify-start w-12">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_imagepeople7.png"
                    alt="imagepeopleSeven"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.joebartmann6}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time7}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[239px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.heythanksforyouone6}
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-50_01 hover:cursor-pointer flex flex-row gap-4 items-center justify-start p-4 hover:shadow-bs1 shadow-bs1 w-auto">
                <div className="flex flex-col h-12 items-center justify-start w-12">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_michaeldammez.png"
                    alt="michaeldammez"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-between w-64">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueSemiBold16Bluegray900"
                    >
                      {props?.joebartmann7}
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 text-right w-auto"
                      size="txtEpilogueRegular16Bluegray400"
                    >
                      {props?.time8}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-700 w-[239px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.heythanksforyouone7}
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col h-[916px] md:h-auto items-center justify-start max-w-[752px] w-full">
          <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between pb-6 pt-8 sm:px-5 px-8 shadow-bs1 w-full">
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Img
                className="h-14 md:h-auto object-cover w-14"
                src="images/img_avatar.png"
                alt="avatar_One"
              />
              <div className="flex flex-col items-center justify-start w-[77%]">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-[104px]"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.janmayer1}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-[154px]"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.designercandidaOne}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_television_blue_gray_900.svg"
                alt="television_Two"
              />
              <Img
                className="h-6 w-6"
                src="images/img_icon_17.svg"
                alt="icon_Six"
              />
              <Img
                className="h-6 w-6"
                src="images/img_icon_16.svg"
                alt="icon_Seven"
              />
              <div className="flex flex-col items-center justify-center py-3 rounded w-auto">
                <Text
                  className="text-base text-center text-indigo-A700 w-auto"
                  size="txtEpilogueBold16"
                >
                  {props?.captionEight}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start p-8 sm:px-5 w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-auto">
              <Img
                className="h-[88px] md:h-auto object-cover w-[88px]"
                src="images/img_avatar.png"
                alt="avatar_Two"
              />
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24Gray900"
              >
                {props?.janmayerOne}
              </Text>
              <Text
                className="text-base text-blue_gray-700 text-center w-[153px]"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.designercandidaThree}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center pb-4 sm:px-5 px-8 w-full">
            <Line className="bg-gray-300 h-px w-[42%]" />
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-2 items-center justify-center px-4 py-3 shadow-bs w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_blue_gray_900.svg"
                alt="arrowdown"
              />
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtInterMedium16Bluegray900"
              >
                {props?.captionNine}
              </Text>
            </div>
            <Line className="bg-gray-300 h-px w-[42%]" />
          </div>
          <div className="flex flex-col items-end justify-start w-[92%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-end justify-center w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-900 text-right w-[29px]"
                  size="txtEpilogueSemiBold16Bluegray900"
                >
                  {props?.language}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-gray-50 flex flex-col items-start justify-start px-4 py-3 rounded-bl-lg rounded-br-lg rounded-tl-lg w-[382px] sm:w-full">
                    <Text
                      className="leading-[160.00%] max-w-[350px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueMedium16Bluegray700"
                    >
                      {props?.languageOne}
                    </Text>
                  </div>
                  <Input
                    name="frame1018"
                    placeholder="We want to invite you for a quick interview"
                    className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue font-medium p-0 text-base text-left w-full"
                    wrapClassName="mt-2 rounded-bl-lg rounded-br-lg rounded-tl-lg w-full"
                    color="gray_50"
                    size="lg"
                    variant="fill"
                  ></Input>
                  <Text
                    className="md:ml-[0] ml-[291px] mt-3 text-base text-blue_gray-400_99 text-right w-auto"
                    size="txtEpilogueRegular16Bluegray40099"
                  >
                    {props?.time9}
                  </Text>
                </div>
              </div>
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_avatar.png"
                alt="avatar_Three"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-[65px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start w-auto sm:w-full">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_avatar.png"
                  alt="avatar_Four"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-[83px]"
                    size="txtEpilogueSemiBold16Bluegray900"
                  >
                    {props?.janmayerTwo}
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start px-4 py-3 w-auto sm:w-full">
                    <Text
                      className="leading-[160.00%] max-w-[460px] md:max-w-full text-base text-blue_gray-700"
                      size="txtEpilogueMedium16Bluegray700"
                    >
                      {props?.himariasurei}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-400 text-right w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.timeOne}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end p-2 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_attach_blue_gray_900.svg"
                  alt="attach"
                />
                <Text
                  className="ml-4 md:ml-[0] text-base text-blue_gray-400"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.replymessage}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[391px] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_18.svg"
                    alt="icon_Eight"
                  />
                  <div className="bg-indigo-A700 flex flex-col items-center justify-center p-2.5 w-[73px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_icon_white_a700_20x20.svg"
                      alt="icon_Nine"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C32DashboardCompanyMessagesRowinput.defaultProps = {
  joebartmann: "Joe Bartmann",
  time: "3:40 PM",
  heythanksforyouOne: "Hey thanks for your interview...",
  janmayer: "Jan Mayer",
  time1: "12 mins ago",
  wewanttoinvite: "We want to invite you for a qui...",
  joebartmann1: "Ally Wales",
  time2: "3:40 PM",
  heythanksforyouone1: "Hey thanks for your interview...",
  joebartmann2: "James Gardner",
  time3: "3:40 PM",
  heythanksforyouone2: "Hey thanks for your interview...",
  joebartmann3: "Allison Geidt",
  time4: "3:40 PM",
  heythanksforyouone3: "Hey thanks for your interview...",
  joebartmann4: "Ruben Culhane",
  time5: "3:40 PM",
  heythanksforyouone4: "Hey thanks for your interview...",
  joebartmann5: "Lydia Diaz",
  time6: "3:40 PM",
  heythanksforyouone5: "Hey thanks for your interview...",
  joebartmann6: "James Dokidis",
  time7: "3:40 PM",
  heythanksforyouone6: "Hey thanks for your interview...",
  joebartmann7: "Angelina Swann",
  time8: "3:40 PM",
  heythanksforyouone7: "Hey thanks for your interview...",
  janmayer1: "Jan Mayer",
  designercandidaOne: "Designer Candidate",
  captionEight: "View Profile",
  janmayerOne: "Jan Mayer",
  designercandidaThree: "Designer candidate",
  captionNine: "Today",
  language: "You ",
  languageOne:
    "Hey Jan, I wanted to reach out because we saw your work contributions and were impressed by your work. ",
  time9: "12 mins ago",
  janmayerTwo: "Jan Mayer",
  himariasurei:
    "Hi Maria, sure I would love to. Thanks for taking the time to see my work!",
  timeOne: "12 mins ago",
  replymessage: "Reply message",
};

export default C32DashboardCompanyMessagesRowinput;
