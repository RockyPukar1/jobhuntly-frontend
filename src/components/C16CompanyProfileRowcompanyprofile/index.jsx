import React from "react";

import { Button, Img, Line, Text } from "components";

const C16CompanyProfileRowcompanyprofile = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[752px] w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start max-w-[752px] w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtClashDisplayVariableSemiBold32"
              >
                {props?.companyprofiletext}
              </Text>
              <Text
                className="leading-[160.00%] max-w-[752px] md:max-w-full text-base text-blue_gray-700"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.descriptiontext}
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[752px] w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtClashDisplayVariableSemiBold32"
              >
                {props?.contact}
              </Text>
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[204px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-4"
                      src="images/img_icon_indigo_a700_24x24.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="indigo_A700"
                  size="md"
                  variant="outline"
                >
                  <div className="font-epilogue font-medium text-base text-left">
                    {props?.twitterbutton}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[249px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-4"
                      src="images/img_icon_24x24.svg"
                      alt="Icon"
                    />
                  }
                  shape="square"
                  color="indigo_A700"
                  size="md"
                  variant="outline"
                >
                  <div className="font-epilogue font-medium text-base text-left">
                    {props?.facebookbutton}
                  </div>
                </Button>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[292px]"
                leftIcon={
                  <Img
                    className="h-6 mr-4"
                    src="images/img_icon_8.svg"
                    alt="Icon"
                  />
                }
                shape="square"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                <div className="font-epilogue font-medium text-base text-left">
                  {props?.linkedinbutton}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-3 h-[606px] md:h-auto items-start justify-start w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[64%] md:w-full">
              <Img
                className="h-[606px] md:h-auto object-cover w-full"
                src="images/img_leonwvh5grsmyayunsplash_606x478.png"
                alt="leonwvh5grsmyay"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 h-full items-start justify-start w-full">
              <Img
                className="md:h-auto h-full object-cover w-full"
                src="images/img_leon6awftplgaceunsplash_194x262.png"
                alt="leon6awftplgace"
              />
              <Img
                className="md:h-auto h-full object-cover w-full"
                src="images/img_leonbzqu01vg54unsplash_194x262.png"
                alt="leonbzqu01vg54u"
              />
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover w-full"
                  src="images/img_leonndz08czu0cunsplash_194x262.png"
                  alt="leonndz08czu0cu"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtClashDisplayVariableSemiBold32"
                >
                  {props?.techstack}
                </Text>
              </div>
              <Text
                className="leading-[160.00%] max-w-[376px] md:max-w-full text-base text-blue_gray-700"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.language}
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <div className="gap-2.5 grid grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start p-3 w-full">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[74px]"
                    src="images/img_image2.png"
                    alt="imageTwo"
                  />
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueRegular16Bluegray900"
                  >
                    {props?.htmlcounter}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start p-3 w-full">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[74px]"
                    src="images/img_image2_74x74.png"
                    alt="imageTwo"
                  />
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueRegular16Bluegray900"
                  >
                    {props?.csscounter}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start p-3 w-full">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[74px]"
                    src="images/img_image2_1.png"
                    alt="imageTwo"
                  />
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueRegular16Bluegray900"
                  >
                    {props?.javascripttext}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start p-3 w-full">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[74px]"
                    src="images/img_image2_2.png"
                    alt="imageTwo"
                  />
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueRegular16Bluegray900"
                  >
                    {props?.rubytext}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start p-3 w-full">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[74px]"
                    src="images/img_image2_3.png"
                    alt="imageTwo"
                  />
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueRegular16Bluegray900"
                  >
                    {props?.mixpaneltext}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start p-3 w-full">
                  <Img
                    className="h-[74px] md:h-auto object-cover w-[74px]"
                    src="images/img_image2_4.png"
                    alt="imageTwo"
                  />
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueRegular16Bluegray900"
                  >
                    {props?.framertext}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center justify-end w-auto">
                <Text
                  className="text-base text-center text-indigo-A700 w-auto"
                  size="txtEpilogueSemiBold16IndigoA700"
                >
                  {props?.viewtechstack}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
            </div>
            <Line className="bg-gray-300 h-px w-full" />
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtClashDisplayVariableSemiBold32"
              >
                {props?.officelocation}
              </Text>
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.stripeofficestext}
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Img
                  className="h-[30px]"
                  src="images/img_close_gray_50_02.svg"
                  alt="close"
                />
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtEpilogueSemiBold16Black900"
                >
                  {props?.unitedstatestext}
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <div className="bg-gray-50_02 flex flex-col items-center justify-start w-[35%]">
                  <Img
                    className="h-[30px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtEpilogueSemiBold16Black900"
                >
                  {props?.englandtext}
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Img
                  className="h-[30px]"
                  src="images/img_contrast_gray_50_03.svg"
                  alt="contrast_One"
                />
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtEpilogueSemiBold16Black900"
                >
                  {props?.japantext}
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Img
                  className="h-[30px]"
                  src="images/img_close_indigo_700.svg"
                  alt="close_One"
                />
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtEpilogueSemiBold16Black900"
                >
                  {props?.australiatext}
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <div className="bg-red-700 flex flex-col items-start justify-start p-0.5 w-[41%]">
                  <Img
                    className="h-[17px] mb-[7px]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                </div>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtEpilogueSemiBold16Black900"
                >
                  {props?.chinatext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-end w-auto">
              <Text
                className="text-base text-center text-indigo-A700 w-auto"
                size="txtEpilogueSemiBold16IndigoA700"
              >
                {props?.viewcountries}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft_One"
              />
            </div>
            <Line className="bg-gray-300 h-px w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

C16CompanyProfileRowcompanyprofile.defaultProps = {
  companyprofiletext: "Company Profile",
  descriptiontext:
    "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.",
  contact: "Contact",
  twitterbutton: "twitter.com/stripe",
  facebookbutton: "facebook.com/StripeHQ",
  linkedinbutton: "linkedin.com/company/stripe",
  techstack: "Tech stack",
  language: "Learn about the technology and tools that Stripe uses. ",
  htmlcounter: "HTML 5",
  csscounter: "CSS 3",
  javascripttext: "JavaScript",
  rubytext: "Ruby",
  mixpaneltext: "Mixpanel",
  framertext: "Framer",
  viewtechstack: "View tech stack",
  officelocation: "Office Location",
  stripeofficestext: "Stripe offices spread across 20 countries",
  unitedstatestext: "United States",
  englandtext: "England",
  japantext: "Japan",
  australiatext: "Australia",
  chinatext: "China",
  viewcountries: "View countries",
};

export default C16CompanyProfileRowcompanyprofile;
