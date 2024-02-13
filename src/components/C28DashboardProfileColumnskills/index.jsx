import React from "react";

import { Button, Img, Text } from "components";

const C28DashboardProfileColumnskills = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-between w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtEpilogueSemiBold20"
          >
            {props?.skills}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
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
                alt="icon_Four"
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
        <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
          <Button
            className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[148px] text-base text-center"
            shape="square"
            color="gray_50"
            size="md"
            variant="fill"
          >
            {props?.dynamicproperty3}
          </Button>
          <Button
            className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[96px] text-base text-center"
            shape="square"
            color="gray_50"
            size="md"
            variant="fill"
          >
            {props?.dynamicproperty4}
          </Button>
          <Button
            className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[134px] text-base text-center"
            shape="square"
            color="gray_50"
            size="md"
            variant="fill"
          >
            {props?.dynamicproperty5}
          </Button>
          <Button
            className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[159px] text-base text-center"
            shape="square"
            color="gray_50"
            size="md"
            variant="fill"
          >
            {props?.dynamicproperty6}
          </Button>
        </div>
        <Button
          className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[185px] text-base text-center"
          shape="square"
          color="gray_50"
          size="md"
          variant="fill"
        >
          {props?.dynamicproperty7}
        </Button>
      </div>
    </>
  );
};

C28DashboardProfileColumnskills.defaultProps = {
  skills: "Skills",
  dynamicproperty3: "Communication",
  dynamicproperty4: "Analytics",
  dynamicproperty5: "Facebook Ads",
  dynamicproperty6: "Content Planning",
  dynamicproperty7: "Community Manager",
};

export default C28DashboardProfileColumnskills;
