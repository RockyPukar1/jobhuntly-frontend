import React from "react";

import { Img, Text } from "components";

type C33DashboardCompanyCompanyProfileTeamProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "nametext" | "roletext"
> &
  Partial<{ userimage: string; nametext: string; roletext: string }>;

const C33DashboardCompanyCompanyProfileTeam: React.FC<
  C33DashboardCompanyCompanyProfileTeamProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-cyan-50 flex flex-col h-20 items-center justify-start w-20">
          {!!props?.userimage ? (
            <Img
              className="h-20 md:h-auto rounded-[50%] w-20"
              alt="julianwanwnol"
              src={props?.userimage}
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-1 items-center justify-start w-auto">
          <Text
            className="text-blue_gray-900 text-center text-lg w-auto"
            size="txtEpilogueSemiBold18Bluegray900"
          >
            {props?.nametext}
          </Text>
          <Text
            className="text-base text-blue_gray-400 text-center w-auto"
            size="txtEpilogueRegular16"
          >
            {props?.roletext}
          </Text>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center w-[35%] md:w-full">
          <Img
            className="h-6 w-6"
            src="images/img_icon_blue_gray_700_24x24.svg"
            alt="icon"
          />
          <Img className="h-6 w-6" src="images/img_icon_9.svg" alt="icon_One" />
        </div>
      </div>
    </>
  );
};

C33DashboardCompanyCompanyProfileTeam.defaultProps = {
  nametext: " Reynaud Colbert",
  roletext: "Co-Founder",
};

export default C33DashboardCompanyCompanyProfileTeam;
