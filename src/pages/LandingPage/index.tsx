import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C11LandingPageColumnexplorebycategoOne from "components/C11LandingPageColumnexplorebycategoOne";
import C11LandingPageColumnfeaturedjobs from "components/C11LandingPageColumnfeaturedjobs";
import C11LandingPageHeader1desktop from "components/C11LandingPageHeader1desktop";
import C11LandingPageLandingpagecta from "components/C11LandingPageLandingpagecta";
import C11LandingPageStackpattern from "components/C11LandingPageStackpattern";
import Footer from "components/Footer";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LandingPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-redhatdisplay items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <C11LandingPageHeader1desktop
          className="bg-gray-900 flex flex-col md:gap-10 gap-[82px] justify-start pb-[103px] w-full"
          discovermoretext={
            <Text className="font-semibold leading-[110.00%] md:text-5xl text-7xl text-blue_gray-900 w-full">
              <span className="text-white-A700 font-clashdisplayvariable text-left">
                Discover more than{" "}
              </span>
              <span className="text-blue-500 font-clashdisplayvariable text-left">
                5000+ Jobs
              </span>
            </Text>
          }
          populartext={
            <Text className="text-base text-white-A700_99 w-auto">
              <span className="text-white-A700 font-epilogue text-left font-normal">
                Popular :{" "}
              </span>
              <span className="text-white-A700 font-epilogue text-left font-medium">
                UI Designer, UX Researcher, Android, Admin
              </span>
            </Text>
          }
        />
        <div className="bg-gray-900 flex flex-col font-epilogue gap-8 items-start justify-start md:px-10 sm:px-5 px-[123px] py-12 w-full">
          <Text
            className="text-lg text-white-A700_87 w-auto"
            size="txtEpilogueRegular18"
          >
            Companies we helped grow
          </Text>
          <Img
            className="h-10 max-w-[1194px] mx-auto w-full"
            src="images/img_featuredcompany.svg"
            alt="featuredcompany"
          />
        </div>
        <C11LandingPageColumnexplorebycategoOne
          className="bg-gray-900 flex flex-col font-clashdisplayvariable gap-[41px] items-center justify-end pt-[72px] md:px-10 sm:px-5 px-[72px] w-full"
          explorebycategorytext={
            <Text className="font-semibold text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto">
              <span className="text-gray-50 font-clashdisplayvariable text-left">
                Explore by{" "}
              </span>
              <span className="text-blue-500 font-clashdisplayvariable text-left">
                category
              </span>
            </Text>
          }
        />
        <C11LandingPageLandingpagecta className="bg-gray-900 flex flex-col font-epilogue items-center justify-start p-[72px] md:px-10 sm:px-5 w-full" />
        <C11LandingPageColumnfeaturedjobs
          className="bg-gray-900 flex flex-col font-clashdisplayvariable gap-12 items-start justify-start pb-[72px] md:px-10 sm:px-5 px-[124px] w-auto md:w-full"
          featuredjobs={
            <Text className="font-semibold text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto">
              <span className="text-gray-50 font-clashdisplayvariable text-left">
                Featured
              </span>
              <span className="text-blue_gray-900 font-clashdisplayvariable text-left">
                {" "}
              </span>
              <span className="text-blue-500 font-clashdisplayvariable text-left">
                jobs
              </span>
            </Text>
          }
        />
        <C11LandingPageStackpattern
          className="bg-gray-900 flex flex-col font-clashdisplayvariable items-center justify-end p-[60px] md:px-10 sm:px-5 w-full"
          latestjobsopen={
            <Text className="font-semibold text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto">
              <span className="text-gray-50 font-clashdisplayvariable text-left">
                Latest
              </span>
              <span className="text-blue_gray-900 font-clashdisplayvariable text-left">
                {" "}
              </span>
              <span className="text-blue-500 font-clashdisplayvariable text-left">
                jobs open
              </span>
            </Text>
          }
        />
        <Footer className="bg-gray-900 flex font-epilogue items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LandingPagePage;
