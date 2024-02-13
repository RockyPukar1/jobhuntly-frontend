import React from "react";

import { Button, CheckBox, Img, Line, Text } from "components";

const C14SearchCompaniesResultsRowindustry = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start w-[204px]">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueBold16Bluegray900"
              >
                {props?.industry}
              </Text>
            </div>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Three"
              id="caption_Three"
              label="Advertising (43)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Four"
              id="caption_Four"
              label="Business Service (4)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Five"
              id="caption_Five"
              label="Blockchain (5)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Six"
              id="caption_Six"
              label="Cloud (15)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Seven"
              id="caption_Seven"
              label="Consumer Tech (5)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Eight"
              id="caption_Eight"
              label="Education (34)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Nine"
              id="caption_Nine"
              label="Fintech (45)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Ten"
              id="caption_Ten"
              label="Gaming (33)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Eleven"
              id="caption_Eleven"
              label="Food & Beverage (5)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Twelve"
              id="caption_Twelve"
              label="Healthcare (3)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Thirteen"
              id="caption_Thirteen"
              label="Hostinng (5)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Fourteen"
              id="caption_Fourteen"
              label="Media (4)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueBold16Bluegray900"
              >
                {props?.companysize}
              </Text>
            </div>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Fifteen"
              id="caption_Fifteen"
              label="1-50 (25)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Sixteen"
              id="caption_Sixteen"
              label="51-150 (57)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Seventeen"
              id="caption_Seventeen"
              label="151-250 (45)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="border border-indigo-A700 border-solid h-6 mr-[5px] w-6"
              name="caption_Eighteen"
              id="caption_Eighteen"
              label="251-500 (4)"
              shape="round"
              color="indigo_A700"
              size="xs"
              variant="fill"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Nineteen"
              id="caption_Nineteen"
              label="501-1000 (43)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-700 font-epilogue text-base text-left"
              inputClassName="h-6 mr-[5px] w-6"
              name="caption_Twenty"
              id="caption_Twenty"
              label="1000 - above (23)"
              shape="round"
              color="gray_300"
              size="xs"
              variant="outline"
            ></CheckBox>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[923px] w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtClashDisplayVariableSemiBold32"
              >
                {props?.alljobs}
              </Text>
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtEpilogueRegular16Bluegray900"
              >
                {props?.showing73resultone}
              </Text>
            </div>
            <div className="flex flex-row gap-[22px] items-center justify-center w-auto">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Text
                  className="text-base text-blue_gray-400 text-right w-auto"
                  size="txtEpilogueRegular16Bluegray400"
                >
                  {props?.sortby}
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtEpilogueMedium16Bluegray900"
                  >
                    {props?.mostrelevant}
                  </Text>
                  <div className="flex flex-col h-4 items-center justify-start w-4">
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown_indigo_a700.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
              <Line className="bg-gray-900_63 h-8 w-px" />
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col h-10 items-center justify-start p-2 w-10">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icon_blue_gray_700.svg"
                    alt="icon"
                  />
                </div>
                <Button
                  className="flex h-10 items-center justify-center rounded w-10"
                  color="indigo_A700_5f"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_user_indigo_a700.svg"
                    alt="user"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[924px] w-full">
            <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_stripelogodp4f5yykm.png"
                      alt="stripelogodp4fFive"
                    />
                  </div>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[75px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.p7jobs}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.komodo}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[398px] md:max-w-full text-blue_gray-700 text-lg"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    {props?.description}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business}
                  </Button>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue font-semibold min-w-[145px] text-center text-sm"
                    shape="round"
                    color="indigo_A700_19"
                    size="md"
                    variant="fill"
                  >
                    {props?.paymentGateway}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_truebilllogov2krsyvgz.png"
                      alt="truebilllogov2k"
                    />
                  </div>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[75px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.p7jobs1}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.komodo1}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[398px] md:max-w-full text-blue_gray-700 text-lg"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    {props?.komodoisanopen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business1}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_squarelogoxvh9oc2it.png"
                      alt="squarelogoxvh9o"
                    />
                  </div>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[75px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.p7jobs2}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.komodo2}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[398px] md:max-w-full text-blue_gray-700 text-lg"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    {props?.komodoisanopen1}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business2}
                  </Button>
                  <Button
                    className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[97px] text-center text-sm"
                    shape="round"
                    color="yellow_700"
                    size="md"
                    variant="outline"
                  >
                    {props?.blockchain}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                    <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                      <Img
                        className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                        src="images/img_ey9yojwxeaub1op.png"
                        alt="ey9yojwxeaub1op"
                      />
                    </div>
                  </div>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[75px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.p7jobs3}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.komodo3}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[398px] md:max-w-full text-blue_gray-700 text-lg"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    {props?.description1}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business3}
                  </Button>
                  <Button
                    className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[97px] text-center text-sm"
                    shape="round"
                    color="yellow_700"
                    size="md"
                    variant="outline"
                  >
                    {props?.blockchain1}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                    <Img
                      className="h-[88px] md:h-auto object-cover w-[88px]"
                      src="images/img_dzjpswtd400x400.png"
                      alt="dzjpswtd400x400"
                    />
                  </div>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[75px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.p7jobs4}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.komodo4}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[398px] md:max-w-full text-blue_gray-700 text-lg"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    {props?.komodoisanopen2}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business4}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_1548817766621.png"
                      alt="1548817766621"
                    />
                  </div>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[75px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.p7jobs5}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.komodo5}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[398px] md:max-w-full text-blue_gray-700 text-lg"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    {props?.komodoisanopen3}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business5}
                  </Button>
                  <Button
                    className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[97px] text-center text-sm"
                    shape="round"
                    color="yellow_700"
                    size="md"
                    variant="outline"
                  >
                    {props?.blockchain2}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col h-[88px] items-center justify-start w-[88px]">
                    <Img
                      className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                      src="images/img_bvboaeet400x400_88x88.png"
                      alt="bvboaeet400x400"
                    />
                  </div>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[75px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.p7jobs6}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.komodo6}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[398px] md:max-w-full text-blue_gray-700 text-lg"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    {props?.komodoisanopen4}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business6}
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col h-[88px] items-center justify-start p-1 w-[88px]">
                    <div className="flex flex-col h-20 items-center justify-start w-20">
                      <Img
                        className="h-20 md:h-auto rounded-[50%] w-20"
                        src="images/img_divvylogof0rwkqp73.png"
                        alt="divvylogof0rwkq"
                      />
                    </div>
                  </div>
                  <Button
                    className="!text-indigo-A700 cursor-pointer font-epilogue min-w-[75px] text-base text-center"
                    shape="square"
                    color="gray_50"
                    size="md"
                    variant="fill"
                  >
                    {props?.p7jobs7}
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtClashDisplayVariableSemiBold24"
                  >
                    {props?.komodo7}
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[398px] md:max-w-full text-blue_gray-700 text-lg"
                    size="txtEpilogueRegular18Bluegray700"
                  >
                    {props?.komodoisanopen5}
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button
                    className="!text-teal-300 cursor-pointer font-epilogue font-semibold min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_300"
                    size="md"
                    variant="outline"
                  >
                    {props?.business7}
                  </Button>
                  <Button
                    className="!text-yellow-700 cursor-pointer font-epilogue font-semibold min-w-[97px] text-center text-sm"
                    shape="round"
                    color="yellow_700"
                    size="md"
                    variant="outline"
                  >
                    {props?.blockchain3}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center w-[32%] md:w-full">
            <Img
              className="h-6 mt-2 w-6"
              src="images/img_arrowleft_indigo_a700.svg"
              alt="arrowleft"
            />
            <Text
              className="ml-[25px] mt-[9px] text-base text-blue_gray-400 text-center"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.one}
            </Text>
            <Button
              className="cursor-pointer font-inter font-semibold min-w-[42px] ml-[26px] rounded text-base text-center"
              color="indigo_A700"
              size="md"
              variant="fill"
            >
              {props?.two}
            </Button>
            <Text
              className="ml-6 mt-[9px] text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.three}
            </Text>
            <Text
              className="ml-[25px] mt-[9px] text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.four}
            </Text>
            <Text
              className="ml-[25px] mt-[9px] text-base text-blue_gray-400"
              size="txtEpilogueRegular16Bluegray400"
            >
              {props?.ten}
            </Text>
            <Img
              className="h-6 ml-6 mt-2 w-6"
              src="images/img_arrowleft_indigo_a700.svg"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C14SearchCompaniesResultsRowindustry.defaultProps = {
  industry: "Industry",
  companysize: "Company Size",
  alljobs: "All Jobs",
  showing73resultone: "Showing 73 results",
  sortby: "Sort by:",
  mostrelevant: "Most relevant",
  p7jobs: "7 Jobs",
  komodo: "Stripe",
  description:
    "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...",
  business: "Business",
  paymentGateway: "Payment gateway",
  p7jobs1: "7 Jobs",
  komodo1: "Truebill",
  komodoisanopen:
    "Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...",
  business1: "Business",
  p7jobs2: "7 Jobs",
  komodo2: "Square",
  komodoisanopen1:
    "Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.",
  business2: "Business",
  blockchain: "Blockchain",
  p7jobs3: "7 Jobs",
  komodo3: "Coinbase",
  description1:
    "Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.",
  business3: "Business",
  blockchain1: "Blockchain",
  p7jobs4: "7 Jobs",
  komodo4: "Robinhood",
  komodoisanopen2:
    "Robinhood is lowering barriers, removing fees, and providing greater access to financial information.",
  business4: "Business",
  p7jobs5: "7 Jobs",
  komodo5: "Kraken",
  komodoisanopen3:
    "Based in San Francisco, Kraken is the world’s largest global bitcoin exchange in euro volume and liquidity.",
  business5: "Business",
  blockchain2: "Blockchain",
  p7jobs6: "7 Jobs",
  komodo6: "Revolut",
  komodoisanopen4:
    "When Revolut was founded in 2015, we had a vision to build a sustainable, digital alternative to traditional big banks.",
  business6: "Business",
  p7jobs7: "7 Jobs",
  komodo7: "Divvy",
  komodoisanopen5:
    "Divvy is a secure financial platform for businesses to manage payments and subscriptions.",
  business7: "Business",
  blockchain3: "Blockchain",
  one: "1",
  two: "2",
  three: "3",
  four: "•••",
  ten: "10",
};

export default C14SearchCompaniesResultsRowindustry;
