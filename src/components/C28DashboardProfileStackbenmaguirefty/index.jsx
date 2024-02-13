import React from "react";

import { Button, Img, Input, Text } from "components";

const C28DashboardProfileStackbenmaguirefty = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col mx-auto w-full">
          <div className="h-[140px] mx-auto w-full">
            <Img
              className="h-[140px] m-auto object-cover w-full"
              src="images/img_benmaguirefty.png"
              alt="benmaguirefty"
            />
            <div className="absolute h-[140px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[140px] m-auto object-cover w-full"
                src="images/img_gradientagmyc.png"
                alt="gradientagmyc"
              />
              <Button
                className="absolute flex h-10 items-center justify-center right-[3%] top-[17%] w-10"
                shape="square"
                color="blue_gray_200"
                size="md"
                variant="outline"
              >
                <Img className="h-6" src="images/img_edit.svg" alt="edit" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-[140px] items-center justify-start ml-8 mt-[-70px] w-[140px] z-[1]">
            <div className="bg-blue-500 flex flex-col h-[140px] items-center justify-start outline outline-[8px] outline-white-A700 rounded-[50%] w-[140px]">
              <Img
                className="h-[140px] md:h-auto rounded-[50%] w-[140px]"
                src="images/img_kevinkeithiql.png"
                alt="kevinkeithiql"
              />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-auto mt-[-46px] sm:pr-5 pr-6 w-[524px] sm:w-full z-[1]">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
              size="txtClashDisplayVariableSemiBold24"
            >
              {props?.nametext}
            </Text>
            {props?.designationtext}
            <Input
              name="location"
              placeholder="Manchester, UK"
              className="font-epilogue p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-lg w-full"
              wrapClassName="flex w-[58%]"
              prefix={
                <Img
                  className="h-6 mr-2 my-auto"
                  src="images/img_linkedin_blue_gray_400.svg"
                  alt="linkedin"
                />
              }
              size="xs"
            ></Input>
            <Input
              name="price"
              placeholder="OPEN FOR OPPORTUNITIES"
              className="!placeholder:text-teal-300 !text-teal-300 font-epilogue font-semibold p-0 text-base text-center w-full"
              wrapClassName="flex w-full"
              prefix={
                <Img
                  className="h-6 mr-[17px] my-auto"
                  src="images/img_icon_teal_300_24x24.svg"
                  alt="Icon"
                />
              }
              shape="round"
              color="teal_300_19"
              size="md"
              variant="fill"
            ></Input>
          </div>
          <Button
            className="cursor-pointer font-bold font-epilogue min-w-[137px] text-base text-center"
            shape="square"
            color="indigo_100"
            size="xl"
            variant="outline"
          >
            {props?.editprofilebutton}
          </Button>
        </div>
      </div>
    </>
  );
};

C28DashboardProfileStackbenmaguirefty.defaultProps = {
  nametext: "Jake Gyll",
  designationtext: (
    <Text
      className="text-gray-900 text-lg w-auto"
      size="txtEpilogueRegular18Gray900"
    >
      <span className="text-blue_gray-400 font-epilogue text-left font-normal">
        Product Designer at
      </span>
      <span className="text-gray-900 font-epilogue text-left font-normal">
        {" "}
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left font-medium">
        Twitter
      </span>
    </Text>
  ),
  editprofilebutton: "Edit Profile",
};

export default C28DashboardProfileStackbenmaguirefty;
