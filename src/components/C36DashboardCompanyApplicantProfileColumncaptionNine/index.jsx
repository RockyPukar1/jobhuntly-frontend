import React from "react";

import { Img, Line, Text } from "components";

const C36DashboardCompanyApplicantProfileColumncaptionNine = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[718px] pt-4 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-10 items-start justify-start max-w-[718px] sm:pl-5 pl-6 shadow-bs1 w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captionNine}
              </Text>
            </div>
            <div className="flex flex-col gap-[7px] items-center justify-start w-[103px]">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueSemiBold16Bluegray900"
              >
                {props?.captionTen}
              </Text>
              <Line className="bg-indigo-A700 h-1 w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captionEleven}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-blue_gray-400 w-auto"
                size="txtEpilogueSemiBold16Bluegray400"
              >
                {props?.captionTwelve}
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[0.5px] outline-gray-300 w-[83%] md:w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <Line className="bg-gray-900_01 h-1 w-full" />
            <div className="flex flex-col gap-8 items-start justify-start w-[84%] md:w-full">
              <div className="flex flex-row items-end justify-between w-[87%] md:w-full">
                {props?.username}
                <div className="flex flex-col h-[72px] items-center justify-start w-[72px]">
                  <Img
                    className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                    src="images/img_imagepeople7_72x72.png"
                    alt="imagepeopleSeven_One"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-between w-full">
                {props?.userexperience}
                <Text
                  className="leading-[160.00%] text-[11px] text-blue_gray-400"
                  size="txtEpilogueRegular11"
                >
                  {props?.usercontactinfo}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C36DashboardCompanyApplicantProfileColumncaptionNine.defaultProps = {
  captionNine: "Applicant Profile",
  captionTen: "Resume",
  captionEleven: "Hiring Progress",
  captionTwelve: "Interview Schedule",
  username: (
    <Text
      className="leading-[28.00px] mt-3 text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
      size="txtInterBold36"
    >
      <span className="md:text-3xl sm:text-[28px] text-blue_gray-900 font-epilogue text-left text-[32px] font-semibold">
        <>
          Jerome Bell
          <br />
        </>
      </span>
      <span className="text-blue_gray-900 font-epilogue text-left text-lg font-medium">
        Product Designer
      </span>
    </Text>
  ),
  userexperience: (
    <Text
      className="leading-[18.00px] text-[10px] text-blue_gray-700"
      size="txtInterMedium10"
    >
      <span className="text-blue_gray-400 tracking-[2.00px] font-arial uppercase text-left text-[7px] font-normal">
        <>
          experience
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
        Senior{" "}
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
        UI/UX{" "}
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
        <>
          Product Designer
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          Enterprise name
          <br />
        </>
      </span>
      <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
        <>
          Aug 2018 - Present - 1 year, Paris
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          Directly collaborated with CEO and Product team to prototype, design
          and deliver the UI and UX experience with a lean design process:
          research, design, test, and iterate.
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
        <>
          <br />
          UI/UX Product Designer
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          Enterprise name
          <br />
        </>
      </span>
      <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
        <>
          Aug 2013 - Aug 2018 - 5 years, Paris
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          Lead the UI design with the accountability of the design system,
          collaborated with product and development teams on core projects to
          improve product interfaces and experiences.
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
        <>
          <br />
          UI Designer
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          Enterprise name
          <br />
        </>
      </span>
      <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
        <>
          Aug 2012 - jul 2013 - 1 year, Paris
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          Designed mobile UI applications for Orange R&D departement, BNP
          Paribas, La Poste, Le Cned...
          <br />
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
        <>
          Graphic Designer
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          Enterprise name
          <br />
        </>
      </span>
      <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
        <>
          Sept 2010 - jul 2012 - 2 years, Paris
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          Designed print and web applications for Pau Brasil, Renault,
          <br />
          Le théatre du Mantois, La mairie de Mantes la Ville...
          <br />
          <br />
        </>
      </span>
      <span className="text-blue_gray-400 tracking-[2.00px] font-arial uppercase text-left text-[7px] font-normal">
        <>
          education
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
        <>
          Bachelor European in Graphic Design
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          School name
          <br />
        </>
      </span>
      <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
        <>
          2009 - 2010, Bagnolet
          <br />
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-bold">
        <>
          BTS Communication Visuelle option Multimédia
          <br />
        </>
      </span>
      <span className="text-blue_gray-700 font-arial text-left text-[11px] font-normal">
        <>
          School name
          <br />
        </>
      </span>
      <span className="text-blue_gray-400 font-arial text-left text-[9px] font-normal">
        2007 - 2009, Bagnolet
      </span>
    </Text>
  ),
  usercontactinfo: (
    <>
      jeromebell@gmail.com
      <br />
      +44 1245 572 135
      <br />
      Vernouillet
      <br />
      <br />
      Industry Knowledge
      <br />
      Product Design
      <br />
      User Interface
      <br />
      User Experience
      <br />
      Interaction Design
      <br />
      Wireframing
      <br />
      Rapid Prototyping
      <br />
      Design Research
      <br />
      <br />
      Tools & Technologies
      <br />
      Figma, Sketch, Protopie, Framer, Invision, Abstract, Zeplin, Google
      Analytics, Amplitude, Fullstory...
      <br />
      <br />
      Other Skills
      <br />
      HTML, CSS, jQuery
      <br />
      <br />
      Languages
      <br />
      French (native)
      <br />
      English (professionnal)
      <br />
      <br />
      Social
      <br />
      yoursite.com
      <br />
      linkedin.com/in/yourname
      <br />
      dribbble.com/yourname
    </>
  ),
};

export default C36DashboardCompanyApplicantProfileColumncaptionNine;
