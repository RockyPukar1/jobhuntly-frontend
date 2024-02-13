import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import SignupForm from "components/SignupForm";

const SignUpPage = () => {
  return (
    <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay sm:gap-10 md:gap-10 gap-[204px] items-center mx-auto md:pr-10 sm:pr-5 pr-[194px] w-full">
      <div className="bg-gray-50 flex flex-col items-center justify-start md:px-5 w-[51%] md:w-full">
        <div className="md:h-[513px] sm:h-[588px] h-[850px] relative w-full">
          <div className="flex flex-col m-auto w-full">
            <div className="bg-gray-50 flex flex-col items-start justify-start mx-auto p-[27px] sm:px-5 w-full">
              <div className="flex flex-row gap-2 items-start justify-start mb-[425px] md:ml-[0] ml-[97px] w-[28%] md:w-full">
                <Img
                  className="h-8 mb-0.5 w-8"
                  src="images/img_frame3.svg"
                  alt="frameThree"
                />
                <Text
                  className="mt-0.5 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.24px]"
                  size="txtRedHatDisplayBold24Gray900"
                >
                  JobHuntly
                </Text>
              </div>
            </div>
            <Img
              className="h-[669px] ml-auto mr-[100px] mt-[-333.52px] object-cover w-[61%] z-[1]"
              src="images/img_design7b051895.png"
              alt="design7b051895"
            />
          </div>
          <div className="absolute bottom-[3%] flex flex-col font-inter md:gap-10 gap-[238px] inset-x-[0] justify-start mx-auto w-[81%]">
            <div className="h-44 md:h-[152px] relative w-[46%]">
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
            <div className="md:h-[198px] h-[238px] md:ml-[0] ml-[209px] relative w-3/5">
              <div className="absolute backdrop-opacity-[0.5] bg-indigo-A700_5d blur-[15.00px] h-44 inset-x-[0] mx-auto rounded-[24px] top-[7%] w-[99%]"></div>
              <div className="absolute md:h-[198px] h-[238px] inset-y-[0] my-auto right-[0] w-[93%]">
                <div className="absolute bottom-[0] md:h-[198px] h-[225px] inset-x-[0] mx-auto w-full">
                  <div className="md:h-[198px] h-[225px] m-auto w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col font-epilogue inset-x-[0] items-end justify-end mx-auto p-2 w-full">
                      <Text
                        className="leading-[160.00%] mr-3 mt-[79px] text-base text-gray-900 w-[76%] sm:w-full"
                        size="txtEpilogueSemiBold16"
                      >
                        “Great platform for the job seeker that searching for
                        new career heights.”
                      </Text>
                    </div>
                    <Text
                      className="absolute left-[7%] md:text-5xl text-[64px] text-indigo-A700 top-[0]"
                      size="txtHelveticaBold64"
                    >
                      “
                    </Text>
                  </div>
                  <div className="absolute flex flex-col gap-2 items-start justify-start left-[7%] top-[20%]">
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
          </div>
        </div>
      </div>
      <SignupForm
        className="bg-white-A700 flex flex-col font-epilogue gap-6 items-start justify-start mb-[68px] md:mt-0 mt-[58px] md:px-5 w-auto sm:w-full" />
    </div>
  );
};

export default SignUpPage;
