import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C12FindJobsHeader2desktop from "components/C12FindJobsHeader2desktop";
import C13BrowseCompaniesColumnOne from "components/C13BrowseCompaniesColumnOne";
import C13BrowseCompaniesColumnrecommendedcompOne from "components/C13BrowseCompaniesColumnrecommendedcompOne";
import Footer from "components/Footer";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BrowseCompaniesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-redhatdisplay items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <C12FindJobsHeader2desktop
          className="flex flex-col md:gap-10 gap-[65px] items-center justify-start pb-[65px] w-full"
          dreamjob="dream companies"
          findyournextcarOne="Find the dream companies you dream work for"
          jobtitleorkeywoOne="Company name or keyword"
          popularuidesignOne="Popular : Twitter, Microsoft, Apple, Facebook"
        />
        <C13BrowseCompaniesColumnrecommendedcompOne className="bg-white-A700 flex flex-col font-epilogue gap-8 items-start justify-start pt-[72px] md:px-10 sm:px-5 px-[124px] w-auto md:w-full" />
        <C13BrowseCompaniesColumnOne
          className="bg-cover bg-no-repeat flex flex-col font-clashdisplayvariable h-[1095px] items-end justify-end md:pl-10 sm:pl-5 pl-[72px] py-[72px] w-full"
          style={{ backgroundImage: "url('images/img_landingpagelatest.svg')" }}
        />
        <Footer className="bg-gray-900 flex font-epilogue items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BrowseCompaniesPage;
