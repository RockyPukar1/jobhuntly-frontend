import React from "react";

import { Button, Img, List, Text } from "components";

const C28DashboardProfileColumnportfolios = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-between w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtEpilogueSemiBold20"
          >
            {props?.portfolios}
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
              src="images/img_icon_indigo_a700_40x40.svg"
              alt="icon_Five"
            />
          </Button>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[706px] w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[91%] md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
              <Img
                className="h-[152px] md:h-auto object-cover w-[203px] sm:w-full"
                src="images/img_image3.png"
                alt="imageThree"
              />
              <Text
                className="leading-[160.00%] max-w-[203px] md:max-w-full text-base text-blue_gray-900"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.clinicallyclinione}
              </Text>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
              <Img
                className="h-[152px] md:h-auto object-cover w-[203px] sm:w-full"
                src="images/img_image3_152x203.png"
                alt="imageThree"
              />
              <Text
                className="leading-[160.00%] max-w-[203px] md:max-w-full text-base text-blue_gray-900"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.growthlysaas}
              </Text>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
              <Img
                className="h-[152px] md:h-auto object-cover w-[203px] sm:w-full"
                src="images/img_image3_1.png"
                alt="imageThree"
              />
              <Text
                className="leading-[160.00%] max-w-[203px] md:max-w-full text-base text-blue_gray-900"
                size="txtEpilogueMedium16Bluegray900"
              >
                {props?.plannaproject}
              </Text>
            </div>
          </List>
          <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
            <Img
              className="h-[152px] md:h-auto object-cover w-[49px] sm:w-full"
              src="images/img_image3_152x49.png"
              alt="imageThree"
            />
            <Text
              className="leading-[160.00%] max-w-[49px] md:max-w-full text-base text-blue_gray-900"
              size="txtEpilogueMedium16Bluegray900"
            >
              {props?.funirolanding}
            </Text>
          </div>
        </div>
        <Img
          className="h-[5px] w-[682px]"
          src="images/img_slider.svg"
          alt="slider"
        />
      </div>
    </>
  );
};

C28DashboardProfileColumnportfolios.defaultProps = {
  portfolios: "Portfolios",
  clinicallyclinione: "Clinically - clinic & health care website",
  growthlysaas: "Growthly - SaaS Analytics & Sales Website",
  plannaproject: "Planna - Project Management App",
  funirolanding: "Funiro - Landing Page for furniture shop",
};

export default C28DashboardProfileColumnportfolios;
