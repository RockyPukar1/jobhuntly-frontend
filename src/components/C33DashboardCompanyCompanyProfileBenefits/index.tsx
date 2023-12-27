import React from "react";

import { Img, Text } from "components";

type C33DashboardCompanyCompanyProfileBenefitsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "iconimage" | "fullhealthcaretext" | "webbelievetext"
> &
  Partial<{
    iconimage: string;
    fullhealthcaretext: string;
    webbelievetext: string;
  }>;

const C33DashboardCompanyCompanyProfileBenefits: React.FC<
  C33DashboardCompanyCompanyProfileBenefitsProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-12 w-12" alt="icon" src={props?.iconimage} />
        <div className="flex flex-col gap-3 items-start justify-center w-full">
          {!!props?.fullhealthcaretext ? (
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtClashDisplayVariableSemiBold20"
            >
              {props?.fullhealthcaretext}
            </Text>
          ) : null}
          {!!props?.webbelievetext ? (
            <Text
              className="leading-[160.00%] max-w-[221px] md:max-w-full text-base text-blue_gray-700"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.webbelievetext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

C33DashboardCompanyCompanyProfileBenefits.defaultProps = {
  iconimage: "images/img_icon_4.svg",
};

export default C33DashboardCompanyCompanyProfileBenefits;
