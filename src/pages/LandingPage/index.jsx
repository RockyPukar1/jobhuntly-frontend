import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C11LandingPageColumnexplorebycategoOne from "components/C11LandingPageColumnexplorebycategoOne";
import C11LandingPageColumnfeaturedjobs from "components/C11LandingPageColumnfeaturedjobs";
import C11LandingPageHeader1desktop from "components/C11LandingPageHeader1desktop";
import C11LandingPageLandingpagecta from "components/C11LandingPageLandingpagecta";
import C11LandingPageStackpattern from "components/C11LandingPageStackpattern";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-redhatdisplay items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <C11LandingPageHeader1desktop
          className="bg-gray-50 h-[794px] md:px-5 relative w-full"
          discovermoretext={
            <Text className="font-semibold leading-[110.00%] md:text-5xl text-7xl text-blue_gray-900 w-full">
              <span className="text-blue_gray-900 font-clashdisplayvariable text-left">
                Discover more than
              </span>
              <span className="text-blue_gray-900 font-clashdisplayvariable text-left">
                {" "}
              </span>
              <span className="text-blue-500 font-clashdisplayvariable text-left">
                5000+ Jobs
              </span>
            </Text>
          }
          populartext={
            <Text className="text-base text-gray-900_99 w-auto">
              <span className="text-gray-900 font-epilogue text-left font-normal">
                Popular :{" "}
              </span>
              <span className="text-gray-900 font-epilogue text-left font-medium">
                UI Designer, UX Researcher, Android, Admin
              </span>
            </Text>
          }
        />
        <div className="bg-white-A700 flex flex-col font-epilogue gap-8 items-start justify-start md:px-10 sm:px-5 px-[123px] py-12 w-full">
          <Text
            className="text-gray-900_87 text-lg w-auto"
            size="txtEpilogueRegular18"
          >
            Companies we helped grow
          </Text>
          <Img
            className="h-10 max-w-[1194px] mx-auto w-full"
            src="images/img_featuredcompany.svg"
            alt="featuredcompany"
          />
        </div>
        <C11LandingPageColumnexplorebycategoOne
          className="bg-white-A700 flex flex-col font-clashdisplayvariable gap-[41px] items-center justify-end pt-[72px] md:px-10 sm:px-5 px-[72px] w-full"
          explorebycategorytext={
            <Text className="font-semibold text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto">
              <span className="text-blue_gray-900 font-clashdisplayvariable text-left">
                Explore by{" "}
              </span>
              <span className="text-blue-500 font-clashdisplayvariable text-left">
                category
              </span>
            </Text>
          }
        />
        <C11LandingPageLandingpagecta className="bg-white-A700 flex flex-col font-epilogue items-center justify-start p-[72px] md:px-10 sm:px-5 w-full" />
        <C11LandingPageColumnfeaturedjobs
          className="bg-white-A700 flex flex-col font-clashdisplayvariable gap-12 items-start justify-start pb-[72px] md:px-10 sm:px-5 px-[124px] w-auto md:w-full"
          featuredjobs={
            <Text className="font-semibold text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto">
              <span className="text-blue_gray-900 font-clashdisplayvariable text-left">
                Featured{" "}
              </span>
              <span className="text-blue-500 font-clashdisplayvariable text-left">
                jobs
              </span>
            </Text>
          }
        />
        <C11LandingPageStackpattern
          className="bg-cover bg-no-repeat font-clashdisplayvariable md:h-[1428px] sm:h-[794px] h-[877px] pl-[72px] pt-[72px] md:px-5 relative w-full"
          style={{ backgroundImage: "url('images/img_landingpagelatest.svg')" }}
          latestjobsopen={
            <Text className="font-semibold text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto">
              <span className="text-blue_gray-900 font-clashdisplayvariable text-left">
                Latest{" "}
              </span>
              <span className="text-blue-500 font-clashdisplayvariable text-left">
                jobs open
              </span>
            </Text>
          }
        />
        <footer className="bg-gray-900 flex font-epilogue items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mb-10 mt-[66px] mx-auto w-[83%]">
            <ul className="flex flex-col items-center justify-center w-full common-column-list">
              <li>
                <a href="javascript:">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between">
                    <div className="flex flex-col gap-8 items-start justify-start w-[32%] md:w-full">
                      <div className="flex flex-row font-redhatdisplay gap-2 items-start justify-start w-[43%] md:w-full">
                        <Img
                          className="h-8 mb-0.5 w-8"
                          src="images/img_frame3.svg"
                          alt="frameThree_Two"
                        />
                        <Text
                          className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.24px]"
                          size="txtRedHatDisplayBold24"
                        >
                          JobHuntly
                        </Text>
                      </div>
                      <Text
                        className="leading-[160.00%] text-base text-gray-300 w-full"
                        size="txtEpilogueRegular16"
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
                            <a
                              href="javascript:"
                              className="text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">Companies</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">Pricing</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">Terms</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">Advice</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">
                                Privacy Policy
                              </Text>
                            </a>
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
                            <a
                              href="javascript:"
                              className="text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">Help Docs</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="mt-[30px] text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">Guide</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="mt-[33px] text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">Updates</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="mt-[30px] text-base text-gray-300"
                            >
                              <Text size="txtEpilogueRegular16">
                                Contact Us
                              </Text>
                            </a>
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
                        The latest job news, articles, sent to your inbox
                        weekly.
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-10 w-full">
                        <div className="flex flex-row gap-2 items-start justify-start w-auto">
                          <Input
                            name="input"
                            placeholder="Email Address"
                            className="p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                            wrapClassName="border border-gray-300 border-solid w-[62%]"
                            type="email"
                            shape="square"
                            color="white_A700"
                            size="lg"
                            variant="fill"
                          ></Input>
                          <Button
                            className="cursor-pointer font-bold min-w-[131px] text-base text-center"
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
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <Img
                    className="h-px mt-20"
                    src="images/img_divider.svg"
                    alt="divider_Two"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:">
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
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPagePage;
