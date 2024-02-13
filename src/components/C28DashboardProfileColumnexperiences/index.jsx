import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C28DashboardProfileColumnexperiences = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-between sm:px-5 px-6 w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtEpilogueSemiBold20"
          >
            {props?.experiences}
          </Text>
          <Button
            className="flex h-10 items-center justify-center w-10"
            shape="square"
            color="gray_300"
            size="md"
            variant="outline"
          >
            <Img
              className="h-6"
              src="images/img_plus_indigo_a700.svg"
              alt="plus"
            />
          </Button>
        </div>
        <List
          className="flex flex-col gap-[0.5px] items-center w-full"
          orientation="vertical"
        >
          <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-6 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-col h-20 items-center justify-start w-20">
              <Img
                className="h-20 md:h-auto rounded-[50%] w-20"
                src="images/img_btnfm47p400x400_80x80.png"
                alt="btnfm47p400x400"
              />
            </div>
            <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.productdesignerOne}
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
                      alt="edit"
                    />
                  </Button>
                </div>
                <div className="flex flex-col h-[27px] md:h-auto items-center justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.twitter}
                    </Text>
                    <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.fulltime}
                    </Text>
                    <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.jun2019present}
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.manchesteruk}
                </Text>
              </div>
              <Text
                className="leading-[160.00%] md:max-w-full max-w-xl text-base text-blue_gray-900"
                size="txtEpilogueRegular16Bluegray900"
              >
                {props?.description}
              </Text>
            </div>
          </div>
          <Line className="self-center h-px bg-gray-300 w-[94%]" />
          <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-6 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-col h-20 items-center justify-start w-20">
              <Img
                className="h-20 md:h-auto rounded-[50%] w-20"
                src="images/img_godaddylogo01_80x80.png"
                alt="godaddylogoOne"
              />
            </div>
            <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.productdesigner}
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
                      alt="edit"
                    />
                  </Button>
                </div>
                <div className="flex flex-col h-[27px] md:h-auto items-center justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtEpilogueMedium16Bluegray900"
                    >
                      {props?.twitter1}
                    </Text>
                    <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.fulltime1}
                    </Text>
                    <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
                    <Text
                      className="text-base text-blue_gray-700 w-auto"
                      size="txtEpilogueRegular16Bluegray700"
                    >
                      {props?.jun2019present1}
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.manchesteruk1}
                </Text>
              </div>
              <Text
                className="leading-[160.00%] md:max-w-full max-w-xl text-base text-blue_gray-700"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.description1}
              </Text>
            </div>
          </div>
        </List>
        <div className="flex flex-col items-center justify-end w-auto">
          <Text
            className="text-base text-center text-indigo-A700 w-auto"
            size="txtEpilogueSemiBold16IndigoA700"
          >
            {props?.show3moreexperione}
          </Text>
        </div>
      </div>
    </>
  );
};

C28DashboardProfileColumnexperiences.defaultProps = {
  experiences: "Experiences",
  productdesignerOne: "Product Designer",
  twitter: "Twitter",
  fulltime: "Full-Time",
  jun2019present: "Jun 2019 - Present (1y 1m)",
  manchesteruk: "Manchester, UK",
  description:
    "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
  productdesigner: "Growth Marketing Designer",
  twitter1: "GoDaddy",
  fulltime1: "Full-Time",
  jun2019present1: "Jun 2011 - May 2019 (8y)",
  manchesteruk1: "Manchester, UK",
  description1:
    "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
  show3moreexperione: "Show 3 more experiences",
};

export default C28DashboardProfileColumnexperiences;
