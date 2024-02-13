import React from "react";

import { Button, Img, Text } from "components";

const C31DashboardCompanyJoblist = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-auto">
          <div className="flex flex-row items-start justify-between w-[205px]">
            <div className="flex flex-col h-12 items-center justify-start w-12">
              {!!props?.userimage ? (
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  alt="s93hu9p3400x400"
                  src={props?.userimage}
                />
              ) : null}
            </div>
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
          </div>
          <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
            {!!props?.jobtitle ? (
              <Text
                className="text-blue_gray-900 text-lg w-auto"
                size="txtEpilogueSemiBold18Bluegray900"
              >
                {props?.jobtitle}
              </Text>
            ) : null}
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              {!!props?.companyname ? (
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.companyname}
                </Text>
              ) : null}
              {!!props?.ellipsefour ? (
                <div className="bg-blue_gray-200 h-1 rounded-[50%] w-1"></div>
              ) : null}
              {!!props?.locationtext ? (
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.locationtext}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-start justify-start w-auto">
          {!!props?.businessbutton ? (
            <Button
              className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
              shape="round"
              color="teal_300"
              size="md"
              variant="outline"
            >
              {props?.businessbutton}
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
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          {!!props?.progressbarimage ? (
            <Img
              className="h-1.5 w-full"
              alt="progressbar"
              src={props?.progressbarimage}
            />
          ) : null}
          {!!props?.appliedcapacitytext ? props?.appliedcapacitytext : null}
        </div>
      </div>
    </>
  );
};

C31DashboardCompanyJoblist.defaultProps = {};

export default C31DashboardCompanyJoblist;
