import React from "react";

import { Button } from "components";

const C31DashboardCompanyPilltab = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[68px] text-base text-center"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.week}
        </Button>
        <Button
          className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[77px] text-base text-center"
          shape="square"
          color="indigo_50_01"
          size="md"
          variant="fill"
        >
          {props?.month}
        </Button>
        <Button
          className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[60px] text-base text-center"
          shape="square"
          color="indigo_50_01"
          size="md"
          variant="fill"
        >
          {props?.year}
        </Button>
      </div>
    </>
  );
};

C31DashboardCompanyPilltab.defaultProps = {
  week: "Week",
  month: "Month",
  year: "Year",
};

export default C31DashboardCompanyPilltab;
