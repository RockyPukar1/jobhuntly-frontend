import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C11LandingPageLandingpagecta = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[414px] items-center justify-center pt-[70px] md:px-10 sm:px-5 px-[70px] w-[92%] md:w-full"
          style={{ backgroundImage: "url('images/img_ctasection.svg')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-6 items-start justify-start md:mt-0 mt-[23px] w-auto">
              <Text
                className="leading-[110.00%] max-w-[364px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtClashDisplayVariableSemiBold48WhiteA700"
              >
                {props?.startpostingjobtext}
              </Text>
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtEpilogueMedium16"
              >
                {props?.pricetext}
              </Text>
              <Button
                className="!text-indigo-A700 cursor-pointer font-bold font-epilogue min-w-[179px] text-base text-center"
                shape="square"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                {props?.signupbutton}
              </Button>
            </div>
            <div className="bg-white-A700 h-[344px] md:h-[480px] relative w-[54%] md:w-full">
              <div className="absolute flex flex-col gap-[9px] items-center justify-start right-[0] top-[2%] w-[82%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 justify-start w-full">
                    <div className="flex flex-row gap-1.5 items-start justify-end md:ml-[0] ml-[360px] w-[19%] md:w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[62px]"
                        leftIcon={
                          <Img
                            className="h-[9px] mt-[3px] mb-1 mr-[3px]"
                            src="images/img_icon_white_a700.svg"
                            alt="Icon"
                          />
                        }
                        shape="square"
                        color="indigo_A700"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-bold font-epilogue text-base text-center">
                          {props?.postjobbutton}
                        </div>
                      </Button>
                      <div className="bg-white-A700 flex flex-col h-[15px] items-center justify-start mt-[3px] p-[3px] rounded-[7px] w-[15px]">
                        <Img
                          className="h-[9px] w-[9px]"
                          src="images/img_icon_gray_900.svg"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo-50 h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[12.53px] text-gray-900 tracking-[-0.25px]"
                      size="txtClashDisplayVariableSemiBold1253"
                    >
                      {props?.greetingtext}
                    </Text>
                    <Text
                      className="mt-0.5 text-[6.26px] text-gray-900_87"
                      size="txtEpilogueMedium626"
                    >
                      {props?.happeningtext}
                    </Text>
                  </div>
                  <Button
                    className="border border-indigo-50 border-solid cursor-pointer flex items-center justify-center min-w-[67px] my-[3px] rounded-[3px]"
                    leftIcon={
                      <Img
                        className="h-[9px] mr-[3px]"
                        src="images/img_icon_calendar.svg"
                        alt="Icon / Calendar"
                      />
                    }
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <div className="!text-gray-900 font-inter font-medium text-[6.26px] text-left">
                      {props?.datebutton}
                    </div>
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-[0] md:h-[152px] h-[259px] right-[2%] w-[77%] sm:w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-full items-center justify-start p-[9px] w-[49%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-end justify-start w-[91%] md:w-full">
                      <div className="flex flex-col gap-[9.4px] items-start justify-start mb-1 w-auto">
                        <Text
                          className="text-[7.83px] text-blue_gray-900 w-auto"
                          size="txtEpilogueSemiBold783"
                        >
                          {props?.companyvisitorstext}
                        </Text>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="sm:text-[24.19px] md:text-[26.19px] text-[28.19px] text-blue_gray-900 w-auto"
                            size="txtEpilogueSemiBold2819"
                          >
                            {props?.totalvisitorstext}
                          </Text>
                          <Text
                            className="text-[7.05px] text-blue_gray-400 w-auto"
                            size="txtEpilogueMedium705"
                          >
                            {props?.visitorsdatetext}
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-900 flex flex-col items-center justify-end mt-8 pt-[5px] px-[5px] rounded-[3px] w-[24%]">
                        <Text
                          className="text-[6.26px] text-center text-gray-300"
                          size="txtEpilogueRegular626"
                        >
                          {props?.visitorstext}
                        </Text>
                        <Text
                          className="mt-0.5 text-[7.05px] text-center text-white-A700"
                          size="txtEpilogueSemiBold705"
                        >
                          {props?.visitorscounttext}
                        </Text>
                        <Img
                          className="h-[3px] mt-0.5 rounded-[1px]"
                          src="images/img_polygon1.svg"
                          alt="polygonOne"
                        />
                      </div>
                    </div>
                    <Img
                      className="h-[55px] mt-1.5 w-48"
                      src="images/img_chart.svg"
                      alt="chart"
                    />
                    <div className="flex flex-row gap-[9.4px] items-start justify-between mt-[3px] w-48">
                      <Text
                        className="text-[6.26px] text-blue_gray-400 text-center w-3"
                        size="txtEpilogueRegular626Bluegray400"
                      >
                        {props?.montext}
                      </Text>
                      <Text
                        className="text-[6.26px] text-blue_gray-400 text-center w-[11px]"
                        size="txtEpilogueRegular626Bluegray400"
                      >
                        {props?.tuetext}
                      </Text>
                      <Text
                        className="text-[6.26px] text-blue_gray-400 text-center w-[13px]"
                        size="txtEpilogueRegular626Bluegray400"
                      >
                        {props?.wedtext}
                      </Text>
                      <Text
                        className="text-[6.26px] text-blue_gray-400 text-center w-[11px]"
                        size="txtEpilogueRegular626Bluegray400"
                      >
                        {props?.thutext}
                      </Text>
                      <Text
                        className="text-[6.26px] text-blue_gray-400 text-center"
                        size="txtEpilogueRegular626Bluegray400"
                      >
                        {props?.fritext}
                      </Text>
                      <Text
                        className="text-[6.26px] text-blue_gray-400 text-center w-2.5"
                        size="txtEpilogueRegular626Bluegray400"
                      >
                        {props?.sattext}
                      </Text>
                      <Text
                        className="text-[6.26px] text-blue_gray-400 text-center w-[11px]"
                        size="txtEpilogueRegular626Bluegray400"
                      >
                        {props?.suntext}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute md:h-[108px] h-[259px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute md:h-[108px] h-[259px] inset-y-[0] my-auto py-[23px] right-[3%] w-[199px]">
                    <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[19px] h-full inset-y-[0] items-center justify-center left-[0] my-auto py-[23px] w-[174px]">
                      <div className="flex flex-row gap-[3.13px] items-end justify-start pl-[9.4px] pt-[3.13px] w-full">
                        <Text
                          className="md:text-5xl text-7xl text-blue_gray-900 w-[47px]"
                          size="txtEpilogueSemiBold72"
                        >
                          {props?.applicantscounttext}
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-lg w-auto"
                          size="txtEpilogueMedium18Bluegray400"
                        >
                          {props?.applicantstext}
                        </Text>
                      </div>
                      <Img
                        className="h-1.5 w-full"
                        src="images/img_chart_indigo_a700.svg"
                        alt="chart_One"
                      />
                    </div>
                    <div className="absolute flex flex-col gap-[9px] inset-x-[0] items-center justify-start mx-auto top-[9%] w-full">
                      <div className="h-6 md:h-[21px] px-[9.4px] relative w-full">
                        <Text
                          className="ml-auto my-auto text-blue_gray-900 text-xl w-auto"
                          size="txtEpilogueSemiBold20"
                        >
                          {props?.applicantsstatistictext}
                        </Text>
                        <div className="absolute flex flex-row gap-[3.13px] h-max inset-y-[0] items-center justify-end my-auto right-[17%] w-auto">
                          <Text
                            className="text-base text-indigo-A700 w-auto"
                            size="txtEpilogueSemiBold16IndigoA700"
                          >
                            {props?.viewalljobstext}
                          </Text>
                          <Img
                            className="h-[9px] w-[9px]"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft_One"
                          />
                        </div>
                      </div>
                      <Line className="bg-gray-300 h-px w-[88%]" />
                    </div>
                    <div className="absolute bottom-[0] flex flex-col gap-[6.26px] inset-x-[0] items-start justify-start mx-auto px-[9.4px] w-full">
                      <div className="flex flex-col items-center justify-between w-full">
                        <div className="flex flex-row gap-[6.26px] items-center justify-start w-auto">
                          <div className="bg-indigo-A700 h-1.5 rounded-[1px] w-1.5"></div>
                          <div className="flex flex-row items-center justify-end sm:pl-5 pl-[38px] w-[94%]">
                            <Text
                              className="text-base text-blue_gray-400 text-right w-auto"
                              size="txtEpilogueRegular16Bluegray400"
                            >
                              {props?.applicantscountertext}
                            </Text>
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtEpilogueMedium16Bluegray900"
                            >
                              {props?.socialmediaspecialisttext}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-1.5 w-[88%]"
                        orientation="vertical"
                      >
                        <div className="h-[26px] relative w-full">
                          <div className="absolute flex flex-row gap-[6.26px] h-full inset-y-[0] items-center justify-start left-[0] my-auto w-auto">
                            <div className="bg-blue_gray-900 h-1.5 rounded-[1px] w-1.5"></div>
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtEpilogueMedium16Bluegray900"
                            >
                              {props?.seniorengineertext}
                            </Text>
                          </div>
                          <Text
                            className="absolute h-max inset-y-[0] my-auto right-[-1%] text-base text-blue_gray-400 text-right w-auto"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            {props?.applicantscounter}
                          </Text>
                        </div>
                        <div className="h-[26px] relative w-full">
                          <div className="absolute flex flex-row gap-[6.26px] h-full inset-y-[0] items-center justify-start left-[0] my-auto w-auto">
                            <div className="bg-blue-500 h-1.5 rounded-[1px] w-1.5"></div>
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtEpilogueMedium16Bluegray900"
                            >
                              {props?.seniorengineertext1}
                            </Text>
                          </div>
                          <Text
                            className="absolute h-max inset-y-[0] my-auto right-[-1%] text-base text-blue_gray-400 text-right w-auto"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            {props?.applicantscounter1}
                          </Text>
                        </div>
                        <div className="flex relative w-full">
                          <div className="flex flex-row gap-[6.26px] items-center justify-start my-auto w-auto">
                            <div className="bg-gray-300 h-px rounded-[1px] w-[11%]"></div>
                            <Text
                              className="text-base text-blue_gray-900 w-auto"
                              size="txtEpilogueMedium16Bluegray900"
                            >
                              {props?.othertext}
                            </Text>
                          </div>
                          <Text
                            className="ml-[-8.7px] my-auto text-base text-blue_gray-400 text-right w-auto z-[1]"
                            size="txtEpilogueRegular16Bluegray400"
                          >
                            {props?.applicantscounter2}
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] md:h-[69px] h-[92px] inset-x-[0] mx-auto py-6 w-[432px] sm:w-full">
                    <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col h-full inset-[0] items-center justify-start m-auto py-6 w-auto">
                      <div className="h-[21px] relative w-full">
                        <Line className="absolute bg-gray-300 bottom-[14%] h-px inset-x-[0] mx-auto w-full" />
                        <Text
                          className="absolute h-full inset-y-[0] left-[2%] my-auto text-blue_gray-900 text-xl"
                          size="txtEpilogueSemiBold20"
                        >
                          {props?.recentapplicantOne}
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[413px] sm:w-full">
                      <div className="bg-gray-50 flex flex-row gap-[14.88px] items-center justify-between p-[9.4px] w-full">
                        <div className="flex flex-row gap-[6.26px] items-center justify-start w-[119px]">
                          <Img
                            className="h-[11px] md:h-auto object-cover w-[25px]"
                            src="images/img_avatar.png"
                            alt="avatar"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-blue_gray-900 text-lg w-auto"
                              size="txtEpilogueBold18"
                            >
                              {props?.jakegyll}
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[78px]">
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtEpilogueSemiBold16Bluegray900"
                          >
                            {props?.email}
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[51px]">
                          <Text
                            className="text-base text-blue_gray-900 w-auto"
                            size="txtEpilogueSemiBold16Bluegray900"
                          >
                            {props?.dateapplied}
                          </Text>
                        </div>
                        <div className="h-2 px-[8.22px] py-[4.7px] relative w-[60px]">
                          <div className="absolute bg-indigo-50_01 border border-indigo-A700 border-solid bottom-[8%] h-[7px] inset-x-[0] mx-auto w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] m-auto text-center text-indigo-A700 text-sm w-max"
                            size="txtEpilogueBold14"
                          >
                            {props?.captionThree}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[344px] md:h-[480px] inset-y-[0] justify-end left-[0] my-auto w-[19%]">
                <div className="bg-gray-50_01 border border-indigo-50 border-solid h-[480px] mt-auto mx-auto w-full"></div>
                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[13%] w-full">
                  <div className="flex flex-row gap-[5px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[9px]"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                    <div className="bg-indigo-A700_5e flex flex-col items-start justify-start p-1 rounded-[3px] w-[93%]">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[57%] md:w-full">
                        <Img
                          className="h-[9px] w-[9px]"
                          src="images/img_home.svg"
                          alt="home"
                        />
                        <Text
                          className="text-[6.26px] text-indigo-A700"
                          size="txtInterMedium626"
                        >
                          {props?.dashboardtext}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9.4px] items-start justify-start ml-3 md:ml-[0] mt-1.5 w-auto">
                    <div className="flex flex-row gap-1.5 items-start justify-start w-[63%] md:w-full">
                      <Img
                        className="h-[9px] w-[9px]"
                        src="images/img_icon_blue_gray_900_9x9.svg"
                        alt="icon_One"
                      />
                      <Text
                        className="text-[6.26px] text-gray-900"
                        size="txtInterMedium626Gray900"
                      >
                        {props?.messagestext}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-start justify-start w-[88%] md:w-full">
                      <Img
                        className="h-[9px] w-[9px]"
                        src="images/img_user_blue_gray_900.svg"
                        alt="user"
                      />
                      <Text
                        className="text-[6.26px] text-gray-900"
                        size="txtInterMedium626Gray900"
                      >
                        {props?.companyprofiletext}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-start justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[9px] w-[9px]"
                        src="images/img_icon_blue_gray_900.svg"
                        alt="icon_Two"
                      />
                      <Text
                        className="text-[6.26px] text-gray-900"
                        size="txtInterMedium626Gray900"
                      >
                        {props?.allapplicantstext}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-start justify-start w-[65%] md:w-full">
                      <Img
                        className="h-[9px] w-[9px]"
                        src="images/img_icon_9x9.svg"
                        alt="icon_Three"
                      />
                      <Text
                        className="text-[6.26px] text-gray-900"
                        size="txtInterMedium626Gray900"
                      >
                        {props?.joblistingtext}
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-indigo-50 h-px mt-[9px] w-full" />
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-3 md:ml-[0] mt-2.5 w-[70%] md:w-full">
                    <Text
                      className="text-[5.48px] text-gray-900_87 tracking-[0.22px]"
                      size="txtInterSemiBold548"
                    >
                      {props?.settingstext}
                    </Text>
                    <div className="flex flex-col gap-[9.4px] items-start justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[55%] md:w-full">
                        <Img
                          className="h-[9px] w-[9px]"
                          src="images/img_icon_1.svg"
                          alt="icon_Four"
                        />
                        <Text
                          className="text-[6.26px] text-gray-900"
                          size="txtInterMedium626Gray900"
                        >
                          {props?.settingsonetext}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-2/5 md:w-full">
                        <Img
                          className="h-[9px] w-[9px]"
                          src="images/img_icon_2.svg"
                          alt="icon_Five"
                        />
                        <Text
                          className="text-[6.26px] text-gray-900"
                          size="txtInterMedium626Gray900"
                        >
                          {props?.helptext}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row items-start justify-center left-[11%] top-[4%] w-[59%]">
                  <Img
                    className="h-3 w-3"
                    src="images/img_frame3.svg"
                    alt="frameThree_One"
                  />
                  <Text
                    className="ml-[3px] text-[9.4px] text-gray-900 tracking-[-0.09px]"
                    size="txtRedHatDisplayBold94"
                  >
                    {props?.jobhuntlytext}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C11LandingPageLandingpagecta.defaultProps = {
  startpostingjobtext: "Start posting jobs today",
  pricetext: "Start posting jobs for only $10.",
  signupbutton: "Sign Up For Free",
  postjobbutton: "Post a job",
  greetingtext: "Good morning, Maria",
  happeningtext:
    "Here is what’s happening with your job listings from July 19 - July 25.",
  datebutton: "Jul 19 - Jul 25",
  companyvisitorstext: "Company Visitors",
  totalvisitorstext: "21,457",
  visitorsdatetext: "Visitors from July 19 - July 25",
  visitorstext: "Visitors",
  visitorscounttext: "5,879",
  montext: "Mon",
  tuetext: "Tue",
  wedtext: "Wed",
  thutext: "Thu",
  fritext: "Fri",
  sattext: "Sat",
  suntext: "Sun",
  applicantscounttext: "158",
  applicantstext: "Applicants",
  applicantsstatistictext: "Applicants Statistic",
  viewalljobstext: "View All Jobs",
  applicantscountertext: "67 Applicants",
  socialmediaspecialisttext: "Social Media Specialist",
  seniorengineertext: "Senior Engineer",
  applicantscounter: "21 Applicants",
  seniorengineertext1: "Senior Engineer",
  applicantscounter1: "38 Applicants",
  othertext: "Other",
  applicantscounter2: "54 Applicants",
  recentapplicantOne: "Recent Applicants",
  jakegyll: "Jake Gyll",
  email: "Email",
  dateapplied: "Date Applied",
  captionThree: "See Application",
  dashboardtext: "Dashboard",
  messagestext: "Messages",
  companyprofiletext: "Company Profile",
  allapplicantstext: "All Applicants",
  joblistingtext: "Job Listing",
  settingstext: "SETTINGS",
  settingsonetext: "Settings",
  helptext: "Help",
  jobhuntlytext: "JobHuntly",
};

export default C11LandingPageLandingpagecta;
