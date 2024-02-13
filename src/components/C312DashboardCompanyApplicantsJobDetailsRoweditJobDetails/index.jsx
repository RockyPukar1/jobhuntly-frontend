import React from "react";

import { Button, Img, Text } from "components";

const C312DashboardCompanyApplicantsJobDetailsRoweditJobDetails = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
          <div className="flex flex-col items-center justify-start p-0.5 w-[12%] sm:w-full">
            <Img
              className="h-[46px] md:h-auto object-cover w-[98%]"
              src="images/img_stripelogodp4f5yykm.png"
              alt="stripelogodp4fFive"
            />
          </div>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
            size="txtClashDisplayVariableSemiBold32"
          >
            {props?.socialmediaassistant}
          </Text>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[188px]"
          leftIcon={
            <Img
              className="h-5 mt-px mr-2.5"
              src="images/img_edit_20x20.svg"
              alt="edit"
            />
          }
          shape="square"
          color="indigo_100"
          size="xl"
          variant="outline"
        >
          <div className="font-bold font-epilogue text-base text-center">
            {props?.editjobdetails}
          </div>
        </Button>
      </div>
    </>
  );
};

C312DashboardCompanyApplicantsJobDetailsRoweditJobDetails.defaultProps = {
  socialmediaassistant: "Social Media Assistant",
  editjobdetails: "Edit Job Details",
};

export default C312DashboardCompanyApplicantsJobDetailsRoweditJobDetails;
