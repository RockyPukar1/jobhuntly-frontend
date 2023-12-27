import React from "react";

import { Button, Img, Line, List, Text } from "components";

type C28DashboardProfileColumneducationsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "educationtext"
  | "harvarduniversitytext"
  | "bachelorsdegreetext"
  | "datetext"
  | "descriptiontext"
  | "universityoftorontotext"
  | "bachelorsdegreetext1"
  | "datetext1"
  | "showmoreeducationstext"
> &
  Partial<{
    educationtext: string;
    harvarduniversitytext: string;
    bachelorsdegreetext: string;
    datetext: string;
    descriptiontext: string;
    universityoftorontotext: string;
    bachelorsdegreetext1: string;
    datetext1: string;
    showmoreeducationstext: string;
  }>;

const C28DashboardProfileColumneducations: React.FC<
  C28DashboardProfileColumneducationsProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-between sm:px-5 px-6 w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtEpilogueSemiBold20"
          >
            {props?.educationtext}
          </Text>
          <Button
            className="flex h-10 items-center justify-center w-10"
            shape="square"
            color="gray_300"
            size="md"
            variant="outline"
          >
            <Img
              className="h-6"
              src="images/img_plus_indigo_a700.svg"
              alt="plus_One"
            />
          </Button>
        </div>
        <List
          className="flex flex-col gap-[0.5px] items-center w-full"
          orientation="vertical"
        >
          <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-6 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-col h-20 items-center justify-start w-20">
              <Img
                className="h-20 md:h-auto object-cover w-20"
                src="images/img_image5.png"
                alt="imageFive"
              />
            </div>
            <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.harvarduniversitytext}
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
                      alt="edit"
                    />
                  </Button>
                </div>
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16"
                >
                  {props?.bachelorsdegreetext}
                </Text>
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16"
                >
                  {props?.datetext}
                </Text>
              </div>
              <Text
                className="leading-[160.00%] md:max-w-full max-w-xl text-base text-blue_gray-900"
                size="txtEpilogueRegular16Bluegray900"
              >
                {props?.descriptiontext}
              </Text>
            </div>
          </div>
          <Line className="self-center h-px bg-gray-300 w-[94%]" />
          <div className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-6 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-col h-20 items-center justify-start w-20">
              <Img
                className="h-20 md:h-auto object-cover w-20"
                src="images/img_image4.png"
                alt="imageFour"
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtEpilogueSemiBold18Bluegray900"
                  >
                    {props?.universityoftorontotext}
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
                      alt="edit"
                    />
                  </Button>
                </div>
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16"
                >
                  {props?.bachelorsdegreetext1}
                </Text>
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtEpilogueRegular16"
                >
                  {props?.datetext1}
                </Text>
              </div>
            </div>
          </div>
        </List>
        <div className="flex flex-col items-center justify-end w-auto">
          <Text
            className="text-base text-center text-indigo-A700 w-auto"
            size="txtEpilogueSemiBold16IndigoA700"
          >
            {props?.showmoreeducationstext}
          </Text>
        </div>
      </div>
    </>
  );
};

C28DashboardProfileColumneducations.defaultProps = {
  educationtext: "Educations",
  harvarduniversitytext: "Harvard University",
  bachelorsdegreetext: "Postgraduate degree, Applied Psychology",
  datetext: "2010 - 2012",
  descriptiontext:
    "As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business opportunities by observing, analysing, researching and changing behaviour.",
  universityoftorontotext: "University of Toronto",
  bachelorsdegreetext1: "Bachelor of Arts, Visual Communication",
  datetext1: "2005 - 2009",
  showmoreeducationstext: "Show 2 more educations",
};

export default C28DashboardProfileColumneducations;
