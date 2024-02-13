import React from "react";

import { Button, Img, SelectBox, Text } from "components";

const nomadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C31DashboardCompanyTopnav = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-start w-auto">
          <Img
            className="h-12 w-12"
            src="images/img_television_teal_300.svg"
            alt="television_One"
          />
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.companytext}
            </Text>
            <SelectBox
              className="font-epilogue font-semibold text-blue_gray-900 text-left text-xl w-full"
              placeholderClassName="text-blue_gray-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_blue_gray_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frame1227"
              options={nomadOptionsList}
              isSearchable={false}
              placeholder="Nomad"
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 items-center justify-center w-auto">
          <div className="flex flex-col h-10 items-center justify-start w-10">
            <Button
              className="flex h-10 items-center justify-center rounded-[50%] w-10"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_icon_blue_gray_900_40x40.svg"
                alt="icon_Five"
              />
            </Button>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[163px]"
            leftIcon={
              <Img
                className="h-6 mr-2.5"
                src="images/img_plus_white_a700.svg"
                alt="plus"
              />
            }
            shape="square"
            color="indigo_A700"
            size="lg"
            variant="fill"
          >
            <div className="font-bold font-epilogue text-base text-center">
              {props?.postjobbutton}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C31DashboardCompanyTopnav.defaultProps = {
  companytext: "Company",
  postjobbutton: "Post a job",
};

export default C31DashboardCompanyTopnav;
