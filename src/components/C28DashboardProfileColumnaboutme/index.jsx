import React from "react";

import { Button, Img, Text } from "components";

const C28DashboardProfileColumnaboutme = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-between w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtEpilogueSemiBold20"
          >
            {props?.aboutme}
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
          className="leading-[160.00%] max-w-[680px] md:max-w-full text-base text-blue_gray-700"
          size="txtEpilogueRegular16Bluegray700"
        >
          {props?.descriptiontext}
        </Text>
        <Text
          className="leading-[160.00%] max-w-[680px] md:max-w-full text-base text-blue_gray-700"
          size="txtEpilogueRegular16Bluegray700"
        >
          {props?.experiencetext}
        </Text>
      </div>
    </>
  );
};

C28DashboardProfileColumnaboutme.defaultProps = {
  aboutme: "About Me",
  descriptiontext:
    "I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.",
  experiencetext:
    "For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.",
};

export default C28DashboardProfileColumnaboutme;
