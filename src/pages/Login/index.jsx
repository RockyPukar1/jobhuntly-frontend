import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import C18LoginColumnline from "components/C18LoginColumnline";

const LoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay sm:gap-10 md:gap-10 gap-[204px] items-center mx-auto md:pr-10 sm:pr-5 pr-[194px] w-full">
        <div className="bg-gray-50 flex flex-col items-center justify-start md:px-5 w-[51%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[108px] justify-end pt-[27px] sm:px-5 px-[27px] w-full">
            <div className="flex sm:flex-col flex-row gap-2 items-start justify-start md:ml-[0] ml-[97px] mr-[323px] w-[28%] md:w-full">
              <Img
                className="h-8 mb-0.5 w-8"
                src="images/img_frame3.svg"
                alt="frameThree"
              />
              <Text
                className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.24px]"
                size="txtRedHatDisplayBold24Gray900"
              >
                JobHuntly
              </Text>
            </div>
            <div className="font-inter md:h-[669px] h-[680px] ml-10 md:ml-[0] mr-[30px] relative w-[88%] sm:w-full">
              <Img
                className="absolute h-[669px] inset-y-[0] my-auto object-cover right-[8%] w-[76%]"
                src="images/img_design7b051895.png"
                alt="design7b051895"
              />
              <div className="absolute bottom-[6%] md:h-[196px] h-[238px] right-[0] w-3/5">
                <div className="absolute backdrop-opacity-[0.5] bg-indigo-A700_5d blur-[15.00px] h-44 inset-x-[0] mx-auto rounded-[24px] top-[7%] w-[99%]"></div>
                <div className="absolute md:h-[196px] h-[238px] inset-y-[0] my-auto right-[0] w-[93%]">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-2 w-full">
                    <div className="flex flex-col items-start justify-start mt-[9px] w-[91%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text
                          className="text-gray-900_87 text-sm"
                          size="txtInterSemiBold14"
                        >
                          Adam Sandler
                        </Text>
                        <Text
                          className="text-gray-900_87 text-sm"
                          size="txtInterRegular14"
                        >
                          Lead Engineer at Canva
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start mt-[3px] w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-indigo-A700"
                          size="txtHelveticaBold64"
                        >
                          “
                        </Text>
                        <Text
                          className="sm:flex-1 leading-[160.00%] mt-[23px] text-base text-gray-900 w-[84%] sm:w-full"
                          size="txtEpilogueSemiBold16"
                        >
                          “Great platform for the job seeker that searching for
                          new career heights.”
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-20 items-center justify-start right-[9%] top-[0] w-20">
                    <div className="flex flex-col h-20 items-center justify-start w-20">
                      <div className="bg-gray-50 flex flex-col h-20 items-center justify-start p-2 rounded-[50%] w-20">
                        <div className="bg-indigo-A700 flex flex-col h-16 items-center justify-start rounded-[50%] w-16">
                          <div className="flex flex-col items-center justify-start w-[63px] md:w-full">
                            <Img
                              className="h-[58px] md:h-auto mt-0.5 rounded-[50%] w-[58px]"
                              src="images/img_image.png"
                              alt="image_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-44 md:h-[152px] left-[0] top-[0] w-[46%]">
                <div className="absolute backdrop-opacity-[0.5] bg-indigo-A700_5d blur-[15.00px] bottom-[0] h-[152px] right-[0] rounded-[24px] w-[71%]"></div>
                <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[0] p-5 top-[0] w-[71%]">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-[99%] md:w-full">
                    <Img
                      className="h-10"
                      src="images/img_settings_indigo_a700.svg"
                      alt="settings"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.20px]"
                        size="txtInterBold20"
                      >
                        100K+
                      </Text>
                      <Text
                        className="text-base text-gray-900_87"
                        size="txtInterRegular16"
                      >
                        People got hired
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <C18LoginColumnline className="flex flex-col font-epilogue gap-6 items-start justify-start w-auto sm:w-full" />
      </div>
    </>
  );
};

export default LoginPage;
