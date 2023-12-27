import React from "react";

import { Img, Text } from "components";

type C21DashboardApplicantCarddashboardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "totaljobsappliedtext" | "totaljobscounttext"
> &
  Partial<{ totaljobsappliedtext: string; totaljobscounttext: string }>;

const C21DashboardApplicantCarddashboard: React.FC<
  C21DashboardApplicantCarddashboardProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute bottom-[0] h-[68px] right-[14%]"
          src="images/img_icon_blue_gray_700_68x88.svg"
          alt="icon_Four"
        />
        <div className="absolute bottom-[6%] flex flex-col gap-[27px] items-start justify-start left-[9%] w-auto">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtEpilogueSemiBold20"
          >
            {props?.totaljobsappliedtext}
          </Text>
          <Text
            className="md:text-5xl text-7xl text-blue_gray-900 text-center w-auto"
            size="txtEpilogueSemiBold72"
          >
            {props?.totaljobscounttext}
          </Text>
        </div>
      </div>
    </>
  );
};

C21DashboardApplicantCarddashboard.defaultProps = {
  totaljobsappliedtext: "Total Jobs Applied",
  totaljobscounttext: "45",
};

export default C21DashboardApplicantCarddashboard;
