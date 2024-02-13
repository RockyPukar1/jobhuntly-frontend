import React from "react";

import { Button, Img, Line, Text } from "components";

const C33DashboardCompanyCompanyProfileJoblist = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-16 w-16"
          alt="television"
          src={props?.televisionimage}
        />
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          {!!props?.socialmediaassistanttext ? (
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtEpilogueSemiBold20"
            >
              {props?.socialmediaassistanttext}
            </Text>
          ) : null}
          <div className="flex flex-row gap-2 h-[27px] md:h-auto items-center justify-center w-auto">
            {!!props?.nomadtext ? (
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.nomadtext}
              </Text>
            ) : null}
            {!!props?.ellipsefour ? (
              <div className="bg-blue_gray-700 h-1 rounded-[50%] w-1"></div>
            ) : null}
            {!!props?.countrytext ? (
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtEpilogueRegular16Bluegray700"
              >
                {props?.countrytext}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            {!!props?.fulltimebutton ? (
              <Button
                className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                shape="round"
                color="teal_300_19"
                size="md"
                variant="fill"
              >
                {props?.fulltimebutton}
              </Button>
            ) : null}
            {!!props?.rectangle2752 ? (
              <Line className="bg-gray-300 h-[34px] w-px" />
            ) : null}
            {!!props?.marketingbutton ? (
              <Button
                className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[92px] text-center text-sm"
                shape="round"
                color="yellow_700"
                size="md"
                variant="outline"
              >
                {props?.marketingbutton}
              </Button>
            ) : null}
            {!!props?.designbutton ? (
              <Button
                className="cursor-pointer font-epilogue font-semibold min-w-[68px] text-center text-sm"
                shape="round"
                color="indigo_A700"
                size="md"
                variant="outline"
              >
                {props?.designbutton}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

C33DashboardCompanyCompanyProfileJoblist.defaultProps = {
  televisionimage: "images/img_television.svg",
};

export default C33DashboardCompanyCompanyProfileJoblist;
