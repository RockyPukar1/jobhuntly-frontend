import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C11LandingPageStackpattern = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_landingpagelatest.svg')" }}
      >
        <Img
          className="absolute bottom-[0] h-[794px] object-cover right-[0]"
          src="images/img_pattern.png"
          alt="pattern"
        />
        <div className="absolute flex flex-col gap-12 h-max inset-[0] items-center justify-start m-auto w-auto">
          <div className="flex sm:flex-col flex-row gap-2.5 items-end justify-between max-w-[1192px] w-full">
            {props?.latestjobsopen}
            <div className="flex flex-row gap-4 items-center justify-end w-auto">
              <Text
                className="text-base text-center text-indigo-A700 w-auto"
                size="txtEpilogueSemiBold16IndigoA700"
              >
                {props?.showalljobsTwo}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft_Three"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-4 items-start justify-start w-[580px] sm:w-full">
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start px-10 sm:px-5 py-6 w-full">
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
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.nomad}
                    </Text>
                    <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
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
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start px-10 sm:px-5 py-6 w-full">
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
                    {props?.socialmediaassiTwo}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.nomadOne}
                    </Text>
                    <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
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
                      {props?.fullTimeOne}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingOne}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designOne}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start px-10 sm:px-5 py-6 w-[580px] sm:w-full">
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
                    {props?.socialmediaassiThree}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.nomadTwo}
                    </Text>
                    <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.countryOne}
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
                      {props?.fullTimeTwo}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingTwo}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designTwo}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start px-10 sm:px-5 py-6 w-[580px] sm:w-full">
                <Img
                  className="h-16 w-16"
                  src="images/img_user_deep_orange_400.svg"
                  alt="user"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.socialmediaassiFour}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.nomadThree}
                    </Text>
                    <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.countryTwo}
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
                      {props?.fullTimeThree}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingThree}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designThree}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[580px] sm:w-full">
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start px-10 sm:px-5 py-6 w-full">
                <div className="bg-white-A700 flex flex-col h-16 items-center justify-start p-0.5 w-16">
                  <Img
                    className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                    src="images/img_netlifylogo1.png"
                    alt="netlifylogoOne"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.socialmediaassione1}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.nomad1}
                    </Text>
                    <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
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
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start px-10 sm:px-5 py-6 w-full">
                <div className="flex flex-col h-16 items-center justify-start w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_7tuadqi400x400.png"
                    alt="7tuadqi400x400"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.socialmediaassitwo1}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.nomadone1}
                    </Text>
                    <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.parisfrance1}
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
                      {props?.fulltimeone1}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingone1}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designone1}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start px-10 sm:px-5 py-6 w-[580px] sm:w-full">
                <div className="flex flex-col h-16 items-center justify-start w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_1m3hz0d400x400.png"
                    alt="1m3hz0d400x400"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.socialmediaassithree1}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.nomadtwo1}
                    </Text>
                    <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.countryone1}
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
                      {props?.fulltimetwo1}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingtwo1}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designtwo1}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start px-10 sm:px-5 py-6 w-[580px] sm:w-full">
                <div className="flex flex-col h-16 items-center justify-start p-[3px] w-16">
                  <div className="flex flex-col h-[57px] items-center justify-start w-[57px]">
                    <Img
                      className="h-[57px] md:h-auto object-cover w-[57px]"
                      src="images/img_tg7mrqk2400x400.png"
                      alt="tg7mrqk2400x400"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtEpilogueSemiBold20"
                  >
                    {props?.socialmediaassifour1}
                  </Text>
                  <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.nomadthree1}
                    </Text>
                    <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.countrytwo1}
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
                      {props?.fulltimethree1}
                    </Button>
                    <Line className="bg-gray-300 h-[34px] w-px" />
                    <Button
                      className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                      shape="round"
                      color="yellow_700"
                      size="md"
                      variant="outline"
                    >
                      {props?.marketingthree1}
                    </Button>
                    <Button
                      className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                      shape="round"
                      color="indigo_A700"
                      size="md"
                      variant="outline"
                    >
                      {props?.designthree1}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

C11LandingPageStackpattern.defaultProps = {
  latestjobsopen: (
    <Text
      className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
      size="txtClashDisplayVariableSemiBold48"
    >
      <span className="text-blue_gray-900 font-clashdisplayvariable text-left font-semibold">
        Latest{" "}
      </span>
      <span className="text-blue-500 font-clashdisplayvariable text-left font-semibold">
        jobs open
      </span>
    </Text>
  ),
  showalljobsTwo: "Show all jobs",
  socialmediaassiOne: "Social Media Assistant",
  nomad: "Nomad",
  country: "Paris, France",
  fullTime: "Full-Time",
  marketing: "Marketing",
  design: "Design",
  socialmediaassiTwo: "Brand Designer",
  nomadOne: "Dropbox",
  parisfrance: "San Fransisco, USA",
  fullTimeOne: "Full-Time",
  marketingOne: "Marketing",
  designOne: "Design",
  socialmediaassiThree: "Interactive Developer",
  nomadTwo: "Terraform",
  countryOne: "Hamburg, Germany",
  fullTimeTwo: "Full-Time",
  marketingTwo: "Marketing",
  designTwo: "Design",
  socialmediaassiFour: "HR Manager",
  nomadThree: "Packer",
  countryTwo: "Lucern, Switzerland",
  fullTimeThree: "Full-Time",
  marketingThree: "Marketing",
  designThree: "Design",
  socialmediaassione1: "Social Media Assistant",
  nomad1: "Netlify",
  country1: "Paris, France",
  fulltime1: "Full-Time",
  marketing1: "Marketing",
  design1: "Design",
  socialmediaassitwo1: "Brand Designer",
  nomadone1: "Maze",
  parisfrance1: "San Fransisco, USA",
  fulltimeone1: "Full-Time",
  marketingone1: "Marketing",
  designone1: "Design",
  socialmediaassithree1: "Interactive Developer",
  nomadtwo1: "Udacity",
  countryone1: "Hamburg, Germany",
  fulltimetwo1: "Full-Time",
  marketingtwo1: "Marketing",
  designtwo1: "Design",
  socialmediaassifour1: "HR Manager",
  nomadthree1: "Webflow",
  countrytwo1: "Lucern, Switzerland",
  fulltimethree1: "Full-Time",
  marketingthree1: "Marketing",
  designthree1: "Design",
};

export default C11LandingPageStackpattern;
