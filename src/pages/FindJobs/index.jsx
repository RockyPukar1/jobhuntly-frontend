import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import C12FindJobsHeader2desktop from "components/C12FindJobsHeader2desktop";
import C12FindJobsLandingpagejob from "components/C12FindJobsLandingpagejob";
import Footer from "components/Footer";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FindJobsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-redhatdisplay items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <C12FindJobsHeader2desktop
          className="bg-cover bg-no-repeat flex flex-col h-[514px] items-center justify-start pb-[65px] w-full"
          style={{ backgroundImage: "url('images/img_header2desktop.svg')" }}
        />
        <C12FindJobsLandingpagejob
          className="bg-white-A700 flex md:flex-col flex-row font-epilogue gap-10 items-start justify-start md:px-10 sm:px-5 px-[123px] py-[72px] w-auto md:w-full"
          p5appliedoften={
            <Text className="text-black-900 text-center text-sm w-auto">
              <span className="text-blue_gray-900 font-epilogue font-semibold">
                5 applied
              </span>
              <span className="text-black-900 font-epilogue font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-400 font-epilogue font-normal">
                of 10 capacity
              </span>
            </Text>
          }
          p5appliedoften1={
            <Text className="text-black-900 text-center text-sm w-auto">
              <span className="text-blue_gray-900 font-epilogue font-semibold">
                2 applied
              </span>
              <span className="text-black-900 font-epilogue font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-400 font-epilogue font-normal">
                of 10 capacity
              </span>
            </Text>
          }
          p5appliedoften2={
            <Text className="text-black-900 text-center text-sm w-auto">
              <span className="text-blue_gray-900 font-epilogue font-semibold">
                8 applied
              </span>
              <span className="text-black-900 font-epilogue font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-400 font-epilogue font-normal">
                of 12 capacity
              </span>
            </Text>
          }
          p5appliedoften3={
            <Text className="text-black-900 text-center text-sm w-auto">
              <span className="text-blue_gray-900 font-epilogue font-semibold">
                0 applied
              </span>
              <span className="text-black-900 font-epilogue font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-400 font-epilogue font-normal">
                of 10 capacity
              </span>
            </Text>
          }
          p5appliedoften4={
            <Text className="text-black-900 text-center text-sm w-auto">
              <span className="text-blue_gray-900 font-epilogue font-semibold">
                5 applied
              </span>
              <span className="text-black-900 font-epilogue font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-400 font-epilogue font-normal">
                of 10 capacity
              </span>
            </Text>
          }
          p5appliedoften5={
            <Text className="text-black-900 text-center text-sm w-auto">
              <span className="text-blue_gray-900 font-epilogue font-semibold">
                5 applied
              </span>
              <span className="text-black-900 font-epilogue font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-400 font-epilogue font-normal">
                of 10 capacity
              </span>
            </Text>
          }
          p5appliedoften6={
            <Text className="text-black-900 text-center text-sm w-auto">
              <span className="text-blue_gray-900 font-epilogue font-semibold">
                5 applied
              </span>
              <span className="text-black-900 font-epilogue font-normal">
                {" "}
              </span>
              <span className="text-blue_gray-400 font-epilogue font-normal">
                of 10 capacity
              </span>
            </Text>
          }
        />
        <Footer className="bg-gray-900 flex font-epilogue items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default FindJobsPage;
