import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";

const C19JobApplicationsColumnicon = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 md:ml-[0] ml-[572px] w-6"
          src="images/img_icon_blue_gray_900_24x24.svg"
          alt="icon"
        />
        <div className="flex flex-col gap-8 items-start justify-start mb-2 mx-auto w-auto sm:w-full">
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full">
            <Img
              className="h-20 w-20"
              src="images/img_television.svg"
              alt="television"
            />
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtClashDisplayVariableSemiBold24"
              >
                {props?.socialmediaassistanttext}
              </Text>
              <div className="flex flex-row gap-4 h-[27px] md:h-auto items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-700 text-lg w-auto"
                  size="txtEpilogueRegular18Bluegray700"
                >
                  {props?.nomadtext}
                </Text>
                <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-blue_gray-700 text-lg w-auto"
                  size="txtEpilogueRegular18Bluegray700"
                >
                  {props?.countrytext}
                </Text>
                <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
                <Text
                  className="text-blue_gray-700 text-lg w-auto"
                  size="txtEpilogueRegular18Bluegray700"
                >
                  {props?.fulltimetext}
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtClashDisplayVariableSemiBold24"
            >
              {props?.submittext}
            </Text>
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.requiredtext}
            </Text>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.label}
            </Text>
            <Input
              name="input"
              placeholder="Enter your fullname"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.labelOne}
            </Text>
            <Input
              name="input_One"
              placeholder="Enter your email address"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.labelTwo}
            </Text>
            <Input
              name="input_Two"
              placeholder="Enter your phone number"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.labelThree}
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start px-4 py-3 w-full">
              <Text
                className="text-base text-blue_gray-200 w-auto"
                size="txtEpilogueRegular16Bluegray200"
              >
                {props?.thisisplacehold}
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <Text
            className="text-blue_gray-900 text-lg w-auto"
            size="txtEpilogueBold18"
          >
            {props?.links}
          </Text>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.labelFour}
            </Text>
            <Input
              name="input_Three"
              placeholder="Link to your LinkedIn URL"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.labelFive}
            </Text>
            <Input
              name="input_Four"
              placeholder="Link to your portfolio URL"
              className="font-epilogue p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueSemiBold16Bluegray700"
            >
              {props?.labelSix}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <TextArea
                className="bg-white-A700 border-0 font-epilogue gap-2.5 h-[152px] outline outline-[0.5px] outline-gray-300 p-4 text-base placeholder:text-blue_gray-200 text-blue_gray-200 text-left w-full"
                name="form"
                placeholder="Add a cover letter or anything else you want to share"
              ></TextArea>
              <div className="bg-white-A700 flex flex-row gap-3 items-center justify-start outline outline-[0.5px] outline-gray-300 pl-4 py-3 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_blue_gray_400_24x24.svg"
                  alt="icon_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_10.svg"
                  alt="icon_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_11.svg"
                  alt="icon_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_share.svg"
                  alt="share"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_12.svg"
                  alt="icon_Four"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowup_blue_gray_400.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between pt-1 w-full">
                <Text
                  className="text-base text-blue_gray-200 w-auto"
                  size="txtEpilogueRegular16Bluegray200"
                >
                  {props?.maximum500charaone}
                </Text>
                <Text
                  className="text-base text-blue_gray-700 text-right w-auto"
                  size="txtEpilogueRegular16Bluegray700"
                >
                  {props?.p0500}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[197px] items-center justify-between w-auto sm:w-full">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtEpilogueSemiBold16"
            >
              {props?.attachyourresumOne}
            </Text>
            <div className="bg-gray-50 border border-dashed border-indigo-A700 flex flex-row gap-4 items-center justify-center p-4 rounded w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_attach.svg"
                alt="attach"
              />
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueMedium16Bluegray700"
              >
                {props?.attachresumetext}
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <Button
            className="cursor-pointer font-bold font-epilogue text-base text-center w-full"
            shape="square"
            color="indigo_A700"
            size="xl"
            variant="fill"
          >
            {props?.submitbutton}
          </Button>
          {props?.bysendingthereqOne}
        </div>
      </div>
    </>
  );
};

C19JobApplicationsColumnicon.defaultProps = {
  socialmediaassistanttext: "Social Media Assistant",
  nomadtext: "Nomad",
  countrytext: "Paris, France",
  fulltimetext: "Full-Time",
  submittext: "Submit your application",
  requiredtext: "The following is required and will only be shared with Nomad",
  label: "Full name",
  labelOne: "Email address",
  labelTwo: "Phone number",
  labelThree: "Current of previous job title",
  thisisplacehold: "What’s your current or previous job title?",
  links: "LINKS",
  labelFour: "LinkedIn URL",
  labelFive: "Portfolio URL",
  labelSix: "Additional information",
  maximum500charaone: "Maximum 500 characters",
  p0500: "0 / 500",
  attachyourresumOne: "Attach your resume",
  attachresumetext: "Attach Resume/CV",
  submitbutton: "Submit Application",
  bysendingthereqOne: (
    <Text
      className="leading-[160.00%] max-w-[580px] md:max-w-full text-base text-blue_gray-700"
      size="txtEpilogueRegular16Bluegray700"
    >
      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
        By sending the request you can confirm that you accept our{" "}
      </span>
      <span className="text-indigo-A700 font-epilogue text-left font-normal">
        Terms of Service
      </span>
      <span className="text-blue_gray-700 font-epilogue text-left font-normal">
        {" "}
        and{" "}
      </span>
      <span className="text-indigo-A700 font-epilogue text-left font-normal">
        Privacy Policy
      </span>
    </Text>
  ),
};

export default C19JobApplicationsColumnicon;
