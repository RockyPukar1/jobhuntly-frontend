import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
} from "components";
import C12FindJobsHeader2desktop from "components/C12FindJobsHeader2desktop";
import C14SearchCompaniesResultsRowindustry from "components/C14SearchCompaniesResultsRowindustry";
import Footer from "components/Footer";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SearchCompaniesResultsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-redhatdisplay items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <C12FindJobsHeader2desktop
          className="flex flex-col md:gap-10 gap-[65px] items-center justify-start pb-[65px] w-full"
          dreamjob="dream companies"
          findyournextcarOne="Find the dream companies you dream work for"
          jobtitleorkeywoOne="Fintech"
          popularuidesignOne="Popular : Twitter, Microsoft, Apple, Facebook"
        />
        <C14SearchCompaniesResultsRowindustry className="bg-white-A700 flex md:flex-col flex-row font-epilogue md:gap-10 gap-16 items-start justify-start md:px-10 sm:px-5 px-[124px] py-[72px] w-auto md:w-full" />
        <Footer className="bg-gray-900 flex font-epilogue items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SearchCompaniesResultsPage;
