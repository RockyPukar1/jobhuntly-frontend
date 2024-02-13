import React from "react";

import { Button, Datepicker, Img, Input, Line, List, Text } from "components";

const C29DashboardSettingsAccountSettingsColumnlineTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text
            className="text-gray-900 text-lg w-40"
            size="txtEpilogueSemiBold18Gray900"
          >
            {props?.basicinformatioOne}
          </Text>
          <Text
            className="text-base text-blue_gray-700 w-auto"
            size="txtEpilogueRegular16Bluegray700"
          >
            {props?.thisisyourpersoOne}
          </Text>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[117px] items-start justify-start w-full">
          <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.profilephototext}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[259px] md:max-w-full text-base text-blue_gray-700"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.profilephotodescription}
            </Text>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[124px] md:h-auto object-cover w-[124px]"
              src="images/img_avatar.png"
              alt="avatar_One"
            />
            <div className="bg-gray-50 border-2 border-dashed border-indigo-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[42px] py-6 rounded-lg w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-8 w-8"
                  src="images/img_icon_indigo_a700_32x32.svg"
                  alt="icon_Four"
                />
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  {props?.clicktoreplacetext}
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtEpilogueRegular16Bluegray400"
                  >
                    {props?.imageformattext}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[246px] items-start justify-start w-full">
          <Text
            className="text-base text-blue_gray-900 w-auto"
            size="txtEpilogueSemiBold16Bluegray900"
          >
            {props?.personaldetailstext}
          </Text>
          <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-[540px] sm:w-full">
              {props?.label}
              <Input
                name="input"
                placeholder="Jake Gyll"
                className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-[258px]">
                {props?.labelOne}
                <Input
                  name="input_One"
                  placeholder="+44 1245 572 135"
                  className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  shape="square"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-[258px]">
                {props?.labelTwo}
                <Input
                  name="email"
                  placeholder="Jakegyll@gmail.com"
                  className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  shape="square"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-[258px]">
                {props?.labelThree}
                <Datepicker
                  className="dropdown"
                  placeholder="09/08/1997"
                ></Datepicker>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-[258px]">
                {props?.labelFour}
                <Input
                  name="gender"
                  placeholder="Male"
                  className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-epilogue p-0 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid flex w-full"
                  suffix={
                    <Img
                      className="mt-px mb-auto h-5 ml-[35px]"
                      src="images/img_arrowdown_blue_gray_900_20x20.svg"
                      alt="arrow_down"
                    />
                  }
                  shape="square"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[103px] items-start justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-[110px]"
              size="txtEpilogueSemiBold16Bluegray900"
            >
              {props?.accounttypetext}
            </Text>
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.accounttypedescription}
            </Text>
          </div>
          <List
            className="flex flex-col gap-6 items-start w-auto"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start my-0 w-[76%] md:w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_radiobutton.svg"
                  alt="radiobutton"
                />
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.jobseekertext}
                  </Text>
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtEpilogueRegular16Bluegray700"
                  >
                    {props?.lookingforajobtext}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start my-0 w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_radiobutton_gray_300.svg"
                  alt="radiobutton"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.employertext}
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtEpilogueRegular16Gray900"
                  >
                    {props?.hiringsourcingtext}
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <Button
          className="cursor-pointer font-bold font-epilogue min-w-[145px] text-base text-center"
          shape="square"
          color="indigo_A700"
          size="xl"
          variant="fill"
        >
          {props?.saveprofilebutton}
        </Button>
      </div>
    </>
  );
};

C29DashboardSettingsAccountSettingsColumnlineTwo.defaultProps = {
  basicinformatioOne: "Basic Information",
  thisisyourpersoOne:
    "This is your personal information that you can update anytime.",
  profilephototext: "Profile Photo",
  profilephotodescription:
    "This image will be shown publicly as your profile picture, it will help recruiters recognize you!",
  clicktoreplacetext: (
    <Text
      className="text-base text-blue_gray-900 w-auto"
      size="txtEpilogueRegular16Bluegray900"
    >
      <span className="text-indigo-A700 font-epilogue text-left font-medium">
        Click to replace
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-normal">
        {" "}
      </span>
      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
        or drag and drop
      </span>
    </Text>
  ),
  imageformattext: "SVG, PNG, JPG or GIF (max. 400 x 400px)",
  personaldetailstext: "Personal Details",
  label: (
    <Text
      className="text-base text-blue_gray-700 w-auto"
      size="txtEpilogueSemiBold16Bluegray700"
    >
      <span className="text-blue_gray-700 font-epilogue text-left font-semibold">
        Full Name{" "}
      </span>
      <span className="text-deep_orange-400 font-epilogue text-left font-semibold">
        *
      </span>
    </Text>
  ),
  labelOne: (
    <Text
      className="text-base text-blue_gray-700 w-auto"
      size="txtEpilogueSemiBold16Bluegray700"
    >
      <span className="text-blue_gray-700 font-epilogue text-left font-semibold">
        Phone Number{" "}
      </span>
      <span className="text-deep_orange-400 font-epilogue text-left font-semibold">
        *
      </span>
    </Text>
  ),
  labelTwo: (
    <Text
      className="text-base text-blue_gray-700 w-auto"
      size="txtEpilogueSemiBold16Bluegray700"
    >
      <span className="text-blue_gray-700 font-epilogue text-left font-semibold">
        Email{" "}
      </span>
      <span className="text-deep_orange-400 font-epilogue text-left font-semibold">
        *
      </span>
    </Text>
  ),
  labelThree: (
    <Text
      className="text-base text-blue_gray-700 w-auto"
      size="txtEpilogueSemiBold16Bluegray700"
    >
      <span className="text-blue_gray-700 font-epilogue text-left font-semibold">
        Date of Birth{" "}
      </span>
      <span className="text-deep_orange-400 font-epilogue text-left font-semibold">
        *
      </span>
    </Text>
  ),
  labelFour: (
    <Text
      className="text-base text-blue_gray-700 w-auto"
      size="txtEpilogueSemiBold16Bluegray700"
    >
      <span className="text-blue_gray-700 font-epilogue text-left font-semibold">
        Gender{" "}
      </span>
      <span className="text-deep_orange-400 font-epilogue text-left font-semibold">
        *
      </span>
    </Text>
  ),
  accounttypetext: "Account Type",
  accounttypedescription: "You can update your account type",
  jobseekertext: "Job Seeker",
  lookingforajobtext: "Looking for a job",
  employertext: "Employer",
  hiringsourcingtext: "Hiring, sourcing candidates, or posting a jobs",
  saveprofilebutton: "Save Profile",
};

export default C29DashboardSettingsAccountSettingsColumnlineTwo;
