import React from "react";

import { Button, Img, Input, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-10 mt-[66px] mx-auto w-[83%]">
          <ul className="flex flex-col items-center justify-center w-full common-column-list">
            <li>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between">
                <div className="flex flex-col gap-8 items-start justify-start w-[32%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-[43%] md:w-full">
                    <Img
                      className="h-8 mb-0.5 w-8"
                      src="images/img_frame3.svg"
                      alt="frameThree_One"
                    />
                    <Text
                      className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.24px]"
                      size="txtRedHatDisplayBold24"
                    >
                      JobHuntly
                    </Text>
                  </div>
                  <Text
                    className="leading-[160.00%] text-gray-300 text-xl w-full"
                    size="txtEpilogueRegular20Gray300"
                  >
                    Great platform for the job seeker that passionate about
                    startups. Find your dream job easier.
                  </Text>
                </div>
                <div className="flex flex-row gap-[93px] items-start justify-center w-1/4 md:w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-[36%]">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtEpilogueSemiBold18"
                    >
                      About
                    </Text>
                    <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Companies
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Pricing
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Terms
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Advice
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Privacy Policy
                        </Text>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[29px] items-start justify-start w-[33%]">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtEpilogueSemiBold18"
                    >
                      Resources
                    </Text>
                    <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Help Docs
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-[30px] text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Guide
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-[33px] text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Updates
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-[30px] text-base text-gray-300"
                          size="txtEpilogueRegular16"
                        >
                          Contact Us
                        </Text>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5 w-[31%] md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtEpilogueSemiBold18"
                  >
                    Get job notifications
                  </Text>
                  <Text
                    className="leading-[160.00%] mt-[23px] text-base text-gray-300 w-[85%] sm:w-full"
                    size="txtEpilogueRegular16"
                  >
                    The latest job news, articles, sent to your inbox weekly.
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-10 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Input
                        name="input"
                        placeholder="Email Address"
                        className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                        wrapClassName="border border-gray-300 border-solid w-[62%]"
                        shape="square"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      ></Input>
                      <Button
                        className="cursor-pointer font-bold font-epilogue min-w-[131px] text-base text-center"
                        shape="square"
                        color="indigo_A700"
                        size="xl"
                        variant="fill"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Img
                className="h-px mt-20"
                src="images/img_divider.svg"
                alt="divider_Two"
              />
            </li>
            <li>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-10">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-white-A700"
                    size="txtEpilogueMedium16"
                  >
                    2021 @ JobHuntly. All rights reserved.
                  </Text>
                </div>
                <div className="flex flex-row gap-6 items-center justify-between w-[22%] sm:w-full">
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="white_A700_63"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </Button>
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="white_A700_63"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_info.svg" alt="info" />
                  </Button>
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="white_A700_63"
                    size="sm"
                    variant="fill"
                  >
                    <Img src="images/img_globe.svg" alt="globe" />
                  </Button>
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="white_A700_63"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_link.svg" alt="link" />
                  </Button>
                  <Button
                    className="flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="white_A700_63"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_trash.svg" alt="trash" />
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
