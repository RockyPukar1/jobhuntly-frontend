import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C11LandingPageStackpattern from "components/C11LandingPageStackpattern";
import C15JobDescriptionsColumnperksbenefits from "components/C15JobDescriptionsColumnperksbenefits";
import C16CompanyProfileColumn from "components/C16CompanyProfileColumn";
import C16CompanyProfileHeader4desktop from "components/C16CompanyProfileHeader4desktop";
import C16CompanyProfileRowcompanyprofile from "components/C16CompanyProfileRowcompanyprofile";
import Footer from "components/Footer";

const CompanyProfilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-redhatdisplay gap-[3px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <C16CompanyProfileHeader4desktop className="bg-gray-50 flex flex-col gap-11 justify-start pb-[73px] w-full" />
        <C16CompanyProfileRowcompanyprofile className="bg-white-A700 flex md:flex-col flex-row font-epilogue md:gap-10 gap-16 items-start justify-start md:px-10 sm:px-5 px-[124px] py-[72px] w-auto md:w-full" />
        <Line className="bg-gray-300 h-px max-w-[1192px] mx-auto w-full" />
        <C16CompanyProfileColumn className="bg-white-A700 flex flex-col font-clashdisplayvariable gap-[11px] items-start justify-start md:px-10 sm:px-5 px-[124px] py-[72px] rounded-lg w-full" />
        <Line className="bg-gray-300 h-px max-w-[1192px] mx-auto w-full" />
        <C15JobDescriptionsColumnperksbenefits className="bg-white-A700 flex flex-col gap-6 items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[124px] py-[72px] w-full" />
        <C11LandingPageStackpattern
          className="bg-cover bg-no-repeat font-clashdisplayvariable md:h-[1408px] sm:h-[794px] h-[877px] pl-[72px] pt-[72px] md:px-5 relative w-full"
          style={{ backgroundImage: "url('images/img_landingpagelatest.svg')" }}
          latestjobsopen="Open Jobs"
        />
        <Footer className="bg-gray-900 flex font-epilogue items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default CompanyProfilePage;
