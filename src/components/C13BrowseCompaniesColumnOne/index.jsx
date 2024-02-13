import React from "react";

import { Button, Img, List, Text } from "components";

const C13BrowseCompaniesColumnOne = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_landingpagelatest.svg')" }}
      >
        <div className="flex flex-col gap-12 items-start justify-start w-[97%] md:w-full">
          <div className="flex flex-col gap-[45px] items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtClashDisplayVariableSemiBold32"
            >
              {props?.companiesbycateOne}
            </Text>
            <div className="flex flex-col items-end justify-start overflow-auto w-full">
              <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1498px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-indigo-A700 border border-gray-300 border-solid flex flex-col gap-8 items-start justify-start p-8 sm:px-5 w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_television_white_a700.svg"
                      alt="television"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtClashDisplayVariableSemiBold24WhiteA700"
                    >
                      {props?.text}
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-8 items-start justify-start p-8 sm:px-5 w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_icon_indigo_a700_48x48.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtClashDisplayVariableSemiBold24"
                    >
                      {props?.text1}
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-8 items-start justify-start p-8 sm:px-5 w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_icon_3.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtClashDisplayVariableSemiBold24"
                    >
                      {props?.text2}
                    </Text>
                  </div>
                </List>
                <div className="flex relative w-1/5 md:w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-8 items-start justify-start my-auto p-8 sm:px-5 w-auto">
                    <Img
                      className="h-12 w-12"
                      src="images/img_icon_48x48.svg"
                      alt="icon"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtClashDisplayVariableSemiBold24"
                    >
                      {props?.text3}
                    </Text>
                  </div>
                  <Button
                    className="flex items-center justify-center ml-[-23.42px] my-auto shadow-bs w-[17%] z-[1]"
                    shape="square"
                    color="indigo_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[26px]"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft"
                    />
                  </Button>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-8 items-start justify-start p-8 sm:px-5 w-auto">
                  <Img
                    className="h-12 w-12"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text4}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-[17%] md:w-full">
              <Button
                className="flex h-14 items-center justify-center rounded-[50%] w-14"
                shape="circle"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                <Img className="h-6" src="images/img_music.svg" alt="music" />
              </Button>
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtClashDisplayVariableSemiBold24Gray900"
              >
                {props?.text5}
              </Text>
            </div>
            <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start min-h-[auto] w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[69px] py-6 w-full">
                <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                  <Img
                    className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                    src="images/img_aaoodj22400x400.png"
                    alt="aaoodj22400x400"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text6}
                  </Text>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.text7}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[69px] py-6 w-full">
                <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                  <Img
                    className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                    src="images/img_82dbhut400x400.png"
                    alt="82dbhut400x400"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text8}
                  </Text>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.text9}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[69px] py-6 w-full">
                <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                  <Img
                    className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                    src="images/img_kyk0sl2a400x400.png"
                    alt="kyk0sl2a400x400"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text10}
                  </Text>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.text11}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[69px] py-6 w-full">
                <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                  <Img
                    className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                    src="images/img_images1.png"
                    alt="imagesOne"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text12}
                  </Text>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.text13}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[69px] py-6 w-full">
                <Img
                  className="h-[88px] w-[88px]"
                  src="images/img_user_deep_orange_400.svg"
                  alt="user"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text14}
                  </Text>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.text15}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[69px] py-6 w-full">
                <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_squarelogoxvh9oc2it.png"
                    alt="squarelogoxvh9o"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text16}
                  </Text>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.text17}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[69px] py-6 w-full">
                <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                  <div className="flex flex-col h-20 items-center justify-start w-20">
                    <Img
                      className="h-20 md:h-auto rounded-[50%] w-20"
                      src="images/img_divvylogof0rwkqp73.png"
                      alt="divvylogof0rwkq"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text18}
                  </Text>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.text19}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[69px] py-6 w-full">
                <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                  <div className="flex flex-col h-[79px] items-center justify-start w-[79px]">
                    <Img
                      className="h-[79px] md:h-auto object-cover w-[79px]"
                      src="images/img_tg7mrqk2400x400_79x79.png"
                      alt="tg7mrqk2400x400"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.text20}
                  </Text>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[76px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.text21}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-end w-auto">
              <Text
                className="text-base text-center text-indigo-A700 w-auto"
                size="txtEpilogueSemiBold16IndigoA700"
              >
                {props?.text22}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C13BrowseCompaniesColumnOne.defaultProps = {
  companiesbycateOne: "Companies by Category",
  text: "Design",
  text1: "Fintech",
  text2: "Hosting",
  text3: "Business Service",
  text4: "Developer",
  text5: "24 Results",
  text6: "Pentagram",
  text7: "3 Jobs",
  text8: "Wolff Olins",
  text9: "3 Jobs",
  text10: "Clay",
  text11: "3 Jobs",
  text12: "MediaMonks",
  text13: "3 Jobs",
  text14: "Packer",
  text15: "3 Jobs",
  text16: "Square",
  text17: "3 Jobs",
  text18: "Divy",
  text19: "3 Jobs",
  text20: "WebFlow",
  text21: "3 Jobs",
  text22: "View more Design companies",
};

export default C13BrowseCompaniesColumnOne;
