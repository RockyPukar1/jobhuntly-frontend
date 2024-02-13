import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C31DashboardCompanyTopnav from "components/C31DashboardCompanyTopnav";
import C33DashboardCompanyCompanyProfileBenefits from "components/C33DashboardCompanyCompanyProfileBenefits";
import C33DashboardCompanyCompanyProfileColumnframethree from "components/C33DashboardCompanyCompanyProfileColumnframethree";
import C33DashboardCompanyCompanyProfileJoblist from "components/C33DashboardCompanyCompanyProfileJoblist";
import C33DashboardCompanyCompanyProfileRowedit from "components/C33DashboardCompanyCompanyProfileRowedit";
import C33DashboardCompanyCompanyProfileTeam from "components/C33DashboardCompanyCompanyProfileTeam";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardCompanyCompanyProfilePage = () => {
  const c33DashboardCompanyCompanyProfileTeamPropList = [
    { roletext: "CEO & Co-Founder", nametext: "Célestin Gardinier" },
    {},
    { roletext: "Managing Director", nametext: "Arienne Lyon" },
  ];
  const c33DashboardCompanyCompanyProfileBenefitsPropList = [
    {
      webbelievetext:
        "We believe in thriving communities and that starts with our team being happy and healthy.",
      fullhealthcaretext: "Full Healthcare",
    },
    {
      fullhealthcaretext: "Unlimited Vacation",
      iconimage: "images/img_icon_5.svg",
      webbelievetext:
        "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
    },
    { iconimage: "images/img_upload.svg" },
    { iconimage: "images/img_bookmark.svg" },
    {
      fullhealthcaretext: "Remote Working",
      iconimage: "images/img_settings.svg",
      webbelievetext:
        "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
    },
    {
      fullhealthcaretext: "Commuter Benefits",
      iconimage: "images/img_icon_6.svg",
      webbelievetext:
        "We’re grateful for all the time and energy each team member puts into getting to work every day.",
    },
  ];
  const c33DashboardCompanyCompanyProfileJoblistPropList = [
    {
      nomadtext: "Nomad",
      fulltimebutton: "Full-Time",
      designbutton: "Design",
      countrytext: "Paris, France",
      socialmediaassistanttext: "Social Media Assistant",
      marketingbutton: "Marketing",
    },
    { televisionimage: "images/img_close_blue_a700.svg" },
    {
      socialmediaassistanttext: "Interactive Developer",
      countrytext: "Hamburg, Germany",
      marketingbutton: "Marketing",
      televisionimage: "images/img_companylogo.svg",
      fulltimebutton: "Full-Time",
      nomadtext: "Terraform",
      designbutton: "Design",
    },
    { televisionimage: "images/img_user_deep_orange_400.svg" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-redhatdisplay gap-px items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <C33DashboardCompanyCompanyProfileColumnframethree className="bg-gray-50 flex flex-col md:gap-10 gap-[126px] h-[1099px] md:h-auto items-start justify-between md:px-5 py-8 shadow-bs3 w-[272px]" />
        <div className="flex flex-col font-epilogue items-start justify-start md:px-5 w-auto md:w-full">
          <C31DashboardCompanyTopnav className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1167px] sm:px-5 px-8 py-4 shadow-bs1 w-full" />
          <C33DashboardCompanyCompanyProfileRowedit className="bg-white-A700 flex md:flex-col flex-row gap-6 items-center justify-start max-w-[1167px] sm:px-5 px-8 py-6 shadow-bs1 w-full" />
          <div className="flex md:flex-col flex-row font-clashdisplayvariable gap-8 items-start justify-start pb-10 pt-6 sm:px-5 px-8 w-auto md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start max-w-[696px] w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row font-clashdisplayvariable gap-4 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    Company Profile
                  </Text>
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="square"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    <Img
                      className="h-5"
                      src="images/img_edit_indigo_a700.svg"
                      alt="edit_One"
                    />
                  </Button>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[696px] md:max-w-full text-base text-blue_gray-700"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  Nomad is a software platform for starting and running internet
                  businesses. Millions of businesses rely on Stripe’s software
                  tools to accept payments, expand globally, and manage their
                  businesses online. Stripe has been at the forefront of
                  expanding internet commerce, powering new business models, and
                  supporting the latest platforms, from marketplaces to mobile
                  commerce sites. We believe that growing the GDP of the
                  internet is a problem rooted in code and design, not finance.
                  Stripe is built for developers, makers, and creators. We work
                  on solving the hard technical problems necessary to build
                  global economic infrastructure—from designing highly reliable
                  systems to developing advanced machine learning algorithms to
                  prevent fraud.
                </Text>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    Contact
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_icon_indigo_a700_40x40.svg"
                        alt="icon_Six"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_edit_indigo_a700.svg"
                        alt="edit_Two"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-epilogue gap-4 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[212px]"
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
                    <div className="font-medium text-base text-left">
                      twitter.com/Nomad
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[257px]"
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
                    <div className="font-medium text-base text-left">
                      facebook.com/NomadHQ
                    </div>
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row font-epilogue gap-4 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[299px]"
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
                    <div className="font-medium text-base text-left">
                      linkedin.com/company/nomad
                    </div>
                  </Button>
                  <Input
                    name="email_One"
                    placeholder="nomad@gmail.com"
                    className="font-medium p-0 placeholder:text-indigo-A700 text-base text-left w-full"
                    wrapClassName="flex w-2/5 sm:w-full"
                    type="email"
                    prefix={
                      <Img
                        className="h-6 mr-4 my-auto"
                        src="images/img_lock_indigo_a700.svg"
                        alt="lock"
                      />
                    }
                    shape="square"
                    color="indigo_A700"
                    size="sm"
                    variant="outline"
                  ></Input>
                </div>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    Working at Nomad
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_icon_indigo_a700_40x40.svg"
                        alt="icon_Ten"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_edit_indigo_a700.svg"
                        alt="edit_Three"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-3 h-[606px] md:h-auto items-start justify-start max-w-[696px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[69%] md:w-full">
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
                        src="images/img_leonndz08czu0cunsplash_194x206.png"
                        alt="leonndz08czu0cu"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="bg-white-A700 flex flex-col gap-[11px] items-start justify-start max-w-[696px] rounded-lg w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    Team
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_icon_indigo_a700_40x40.svg"
                        alt="icon_Eleven"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_edit_indigo_a700.svg"
                        alt="edit_Four"
                      />
                    </Button>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-epilogue gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                  orientation="horizontal"
                >
                  {c33DashboardCompanyCompanyProfileTeamPropList.map(
                    (props, index) => (
                      <React.Fragment
                        key={`C33DashboardCompanyCompanyProfileTeam${index}`}
                      >
                        <C33DashboardCompanyCompanyProfileTeam
                          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ),
                  )}
                </List>
                <div className="flex flex-row font-epilogue gap-4 items-center justify-end w-auto">
                  <Text
                    className="text-base text-center text-indigo-A700 w-auto"
                    size="txtEpilogueSemiBold16IndigoA700"
                  >
                    View all core teams
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    Benefit
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_icon_indigo_a700_40x40.svg"
                        alt="icon_Twelve"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_edit_indigo_a700.svg"
                        alt="edit_Five"
                      />
                    </Button>
                  </div>
                </div>
                <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {c33DashboardCompanyCompanyProfileBenefitsPropList.map(
                    (props, index) => (
                      <React.Fragment
                        key={`C33DashboardCompanyCompanyProfileBenefits${index}`}
                      >
                        <C33DashboardCompanyCompanyProfileBenefits
                          className="flex flex-1 flex-col gap-6 items-start justify-center rounded w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ),
                  )}
                </div>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row gap-2.5 items-end justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    Open Positions
                  </Text>
                  <div className="flex flex-row font-epilogue gap-4 items-center justify-end w-auto">
                    <Text
                      className="text-base text-center text-indigo-A700 w-auto"
                      size="txtEpilogueSemiBold16IndigoA700"
                    >
                      Show all jobs
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_One"
                    />
                  </div>
                </div>
                <List
                  className="flex flex-col font-epilogue gap-4 items-start w-full"
                  orientation="vertical"
                >
                  {c33DashboardCompanyCompanyProfileJoblistPropList.map(
                    (props, index) => (
                      <React.Fragment
                        key={`C33DashboardCompanyCompanyProfileJoblist${index}`}
                      >
                        <C33DashboardCompanyCompanyProfileJoblist
                          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-row gap-6 items-start justify-start my-0 px-10 sm:px-5 py-6 w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ),
                  )}
                </List>
              </div>
            </div>
            <List
              className="flex flex-col gap-10 items-start w-auto"
              orientation="vertical"
            >
              <div className="flex flex-col gap-4 items-start justify-start my-0 w-auto sm:w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    Tech Stack
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_icon_indigo_a700_40x40.svg"
                        alt="icon"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_edit_indigo_a700.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col font-epilogue gap-2 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2.5 items-center justify-start p-3 w-auto">
                      <Img
                        className="h-[74px] md:h-auto object-cover w-[74px]"
                        src="images/img_image2.png"
                        alt="imageTwo"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueRegular16Bluegray900"
                      >
                        HTML 5
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-start p-3 w-auto">
                      <Img
                        className="h-[74px] md:h-auto object-cover w-[74px]"
                        src="images/img_image2_74x74.png"
                        alt="imageTwo_One"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueRegular16Bluegray900"
                      >
                        CSS 3
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-start p-3 w-auto">
                      <Img
                        className="h-[74px] md:h-auto object-cover w-[74px]"
                        src="images/img_image2_1.png"
                        alt="imageTwo_Two"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueRegular16Bluegray900"
                      >
                        JavaScript
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2.5 items-center justify-start p-3 w-auto">
                      <Img
                        className="h-[74px] md:h-auto object-cover w-[74px]"
                        src="images/img_image2_2.png"
                        alt="imageTwo_Three"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueRegular16Bluegray900"
                      >
                        Ruby
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-start p-3 w-auto">
                      <Img
                        className="h-[74px] md:h-auto object-cover w-[74px]"
                        src="images/img_image2_3.png"
                        alt="imageTwo_Four"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueRegular16Bluegray900"
                      >
                        Mixpanel
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-start p-3 w-auto">
                      <Img
                        className="h-[74px] md:h-auto object-cover w-[74px]"
                        src="images/img_image2_4.png"
                        alt="imageTwo_Five"
                      />
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtEpilogueRegular16Bluegray900"
                      >
                        Framer
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-end w-auto">
                    <Text
                      className="text-base text-center text-indigo-A700 w-auto"
                      size="txtEpilogueSemiBold16IndigoA700"
                    >
                      View tech stack
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
              <div className="flex flex-col gap-6 items-start justify-start my-0 w-auto sm:w-full">
                <div className="flex flex-row gap-4 items-center justify-between w-[376px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    Office Locations
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_icon_indigo_a700_40x40.svg"
                        alt="icon"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="square"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        className="h-5"
                        src="images/img_edit_indigo_a700.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col font-epilogue gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <div className="flex flex-row gap-3 items-start justify-start w-[55%]">
                      <Img
                        className="h-[30px]"
                        src="images/img_close_gray_50_02.svg"
                        alt="close"
                      />
                      <Text
                        className="mt-1 text-base text-black-900 w-auto"
                        size="txtEpilogueSemiBold16Black900"
                      >
                        United States
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold min-w-[124px] text-center text-sm"
                      shape="round"
                      color="blue_500_19"
                      size="md"
                      variant="fill"
                    >
                      Head Quarters
                    </Button>
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
                      England
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[30px]"
                      src="images/img_contrast_gray_50_03.svg"
                      alt="contrast"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtEpilogueSemiBold16Black900"
                    >
                      Japan
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[30px]"
                      src="images/img_close_indigo_700_30x40.svg"
                      alt="close_One"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtEpilogueSemiBold16Black900"
                    >
                      Australia
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
                      China
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-epilogue gap-4 items-center justify-end w-auto">
                  <Text
                    className="text-base text-center text-indigo-A700 w-auto"
                    size="txtEpilogueSemiBold16IndigoA700"
                  >
                    View countries
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCompanyCompanyProfilePage;
