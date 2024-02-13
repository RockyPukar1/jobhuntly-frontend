import React from "react";

import { Img, Text } from "components";

const C15JobDescriptionsRow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-row gap-8 items-start justify-start w-[58%] md:w-full">
              <div className="flex flex-col h-16 items-center justify-start mb-0.5 p-0.5 w-16">
                <Img
                  className="h-[58px] md:h-auto object-cover w-[58px]"
                  src="images/img_stripelogodp4f5yykm.png"
                  alt="stripelogodp4fFive_One"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-0.5 w-[71%]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtClashDisplayVariableSemiBold32"
                >
                  {props?.stripetext}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-end w-auto">
                  <Text
                    className="text-base text-center text-indigo-A700 w-auto"
                    size="txtEpilogueSemiBold16IndigoA700"
                  >
                    {props?.buttontext}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <Text
              className="leading-[160.00%] max-w-[577px] md:max-w-full text-base text-blue_gray-700"
              size="txtEpilogueRegular16Bluegray700"
            >
              {props?.descriptiontwo}
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[42%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[65%] sm:w-full">
                <Img
                  className="h-[276px] md:h-auto object-cover rounded-bl rounded-br w-full"
                  src="images/img_leonwvh5grsmyayunsplash.png"
                  alt="leonwvh5grsmyay"
                />
              </div>
              <div className="flex sm:flex-1 flex-col gap-4 items-center justify-start w-[32%] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[130px] md:h-auto object-cover rounded-bl rounded-br w-full"
                    src="images/img_leon6awftplgaceunsplash.png"
                    alt="leon6awftplgace"
                  />
                </div>
                <div className="h-[130px] relative w-full">
                  <Img
                    className="absolute h-[130px] inset-[0] justify-center m-auto object-cover rounded w-full"
                    src="images/img_leonndz08czu0cunsplash.png"
                    alt="leonndz08czu0cu"
                  />
                  <div className="absolute h-[130px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="absolute h-[130px] inset-[0] justify-center m-auto object-cover rounded w-full"
                      src="images/img_leon0k7ggia8lveunsplash.png"
                      alt="leon0k7ggia8lve"
                    />
                    <Img
                      className="absolute h-[130px] inset-[0] justify-center m-auto object-cover rounded w-full"
                      src="images/img_leonbzqu01vg54unsplash.png"
                      alt="leonbzqu01vg54u"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C15JobDescriptionsRow.defaultProps = {
  stripetext: "Stripe",
  buttontext: "Read more about Stripe",
  descriptiontwo:
    "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.",
};

export default C15JobDescriptionsRow;
