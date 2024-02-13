import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C11LandingPageStackpattern from "components/C11LandingPageStackpattern";
import C15JobDescriptionsColumnperksbenefits from "components/C15JobDescriptionsColumnperksbenefits";
import C15JobDescriptionsHeader3desktop from "components/C15JobDescriptionsHeader3desktop";
import C15JobDescriptionsRow from "components/C15JobDescriptionsRow";
import C15JobDescriptionsRowdescription from "components/C15JobDescriptionsRowdescription";
import Footer from "components/Footer";

const JobDescriptionsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-redhatdisplay items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <C15JobDescriptionsHeader3desktop className="bg-gray-50 flex flex-col gap-11 items-center justify-start pb-[71px] w-full" />
        <C15JobDescriptionsRowdescription
          className="bg-white-A700 flex md:flex-col flex-row font-clashdisplayvariable md:gap-10 gap-16 items-start justify-center max-w-[1440px] md:px-10 sm:px-5 px-[124px] py-[72px] w-full"
          p5appliedoften={
            <Text className="font-semibold text-base text-blue_gray-900 text-center w-auto">
              <span className="text-blue_gray-900 font-epilogue">
                5 applied
              </span>
              <span className="text-blue_gray-900 font-epilogue"> </span>
              <span className="text-blue_gray-400 font-epilogue font-normal">
                of 10 capacity
              </span>
            </Text>
          }
        />
        <Line className="bg-gray-300 h-px max-w-[1192px] mx-auto w-full" />
        <C15JobDescriptionsColumnperksbenefits className="bg-white-A700 flex flex-col gap-6 items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[124px] py-[72px] w-full" />
        <Line className="bg-gray-300 h-px max-w-[1192px] mx-auto w-full" />
        <C15JobDescriptionsRow className="bg-white-A700 flex flex-row items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[124px] py-[72px] rounded-lg w-full" />
        <C11LandingPageStackpattern
          className="bg-cover bg-no-repeat font-clashdisplayvariable md:h-[1408px] sm:h-[794px] h-[877px] pl-[70px] pt-[70px] md:px-5 relative w-full"
          style={{ backgroundImage: "url('images/img_landingpagelatest.svg')" }}
          latestjobsopen="Similiar Jobs"
        />
        <Footer className="bg-gray-900 flex font-epilogue items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default JobDescriptionsPage;
