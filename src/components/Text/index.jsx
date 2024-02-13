import React from "react";

const sizeClasses = {
  txtEpilogueSemiBold2819: "font-epilogue font-semibold",
  txtEpilogueSemiBold16Blue500: "font-epilogue font-semibold",
  txtClashDisplayVariableSemiBold20Gray900:
    "font-clashdisplayvariable font-semibold",
  txtClashDisplayVariableSemiBold24Gray900:
    "font-clashdisplayvariable font-semibold",
  txtEpilogueRegular14WhiteA700ab: "font-epilogue font-normal",
  txtEpilogueRegular20Bluegray700: "font-epilogue font-normal",
  txtEpilogueRegular16Bluegray700: "font-epilogue font-normal",
  txtRedHatDisplayBold24: "font-bold font-redhatdisplay",
  txtEpilogueSemiBold16Bluegray700: "font-epilogue font-semibold",
  txtEpilogueSemiBold72: "font-epilogue font-semibold",
  txtEpilogueSemiBold16Gray90087: "font-epilogue font-semibold",
  txtEpilogueMedium16Bluegray700: "font-epilogue font-medium",
  txtEpilogueRegular20: "font-epilogue font-normal",
  txtEpilogueSemiBold16Teal300: "font-epilogue font-semibold",
  txtEpilogueMedium18Teal300: "font-epilogue font-medium",
  txtInterRegular16Bluegray900: "font-inter font-normal",
  txtEpilogueSemiBold48Bluegray900: "font-epilogue font-semibold",
  txtEpilogueRegular18Bluegray400: "font-epilogue font-normal",
  txtEpilogueSemiBold18Bluegray900: "font-epilogue font-semibold",
  txtEpilogueRegular16: "font-epilogue font-normal",
  txtClashDisplayVariableSemiBold24: "font-clashdisplayvariable font-semibold",
  txtEpilogueRegular14: "font-epilogue font-normal",
  txtClashDisplayVariableSemiBold20: "font-clashdisplayvariable font-semibold",
  txtInterMedium626Gray900: "font-inter font-medium",
  txtEpilogueRegular18: "font-epilogue font-normal",
  txtRedHatDisplayBold94: "font-bold font-redhatdisplay",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium16Bluegray900: "font-inter font-medium",
  txtEpilogueRegular11: "font-epilogue font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtEpilogueRegular12: "font-epilogue font-normal",
  txtEpilogueMedium18Bluegray400: "font-epilogue font-medium",
  txtEpilogueRegular16Bluegray40087: "font-epilogue font-normal",
  txtEpilogueSemiBold20Bluegray400: "font-epilogue font-semibold",
  txtEpilogueSemiBold14Bluegray900: "font-epilogue font-semibold",
  txtInterSemiBold16Bluegray900: "font-inter font-semibold",
  txtEpilogueRegular16Bluegray200: "font-epilogue font-normal",
  txtEpilogueRegular626Bluegray400: "font-epilogue font-normal",
  txtEpilogueBold14: "font-bold font-epilogue",
  txtEpilogueRegular14Bluegray700: "font-epilogue font-normal",
  txtEpilogueRegular16Gray50: "font-epilogue font-normal",
  txtEpilogueMedium16Bluegray400: "font-epilogue font-medium",
  txtClashDisplayVariableSemiBold32: "font-clashdisplayvariable font-semibold",
  txtEpilogueBold16: "font-bold font-epilogue",
  txtEpilogueBold18: "font-bold font-epilogue",
  txtEpilogueRegular16Gray90099: "font-epilogue font-normal",
  txtEpilogueRegular626: "font-epilogue font-normal",
  txtHelveticaBold64: "font-bold font-helvetica",
  txtClashDisplayVariableSemiBold48WhiteA700:
    "font-clashdisplayvariable font-semibold",
  txtInterRegular16Bluegray400: "font-inter font-normal",
  txtEpilogueMedium18: "font-epilogue font-medium",
  txtEpilogueRegular14Bluegray70087: "font-epilogue font-normal",
  txtInterBold36: "font-bold font-inter",
  txtEpilogueMedium16: "font-epilogue font-medium",
  txtEpilogueMedium18DeeppurpleA200: "font-epilogue font-medium",
  txtEpilogueRegular18Bluegray700: "font-epilogue font-normal",
  txtInterSemiBold14Bluegray400: "font-inter font-semibold",
  txtEpilogueMedium18Bluegray900: "font-epilogue font-medium",
  txtEpilogueSemiBold20Gray900: "font-epilogue font-semibold",
  txtEpilogueRegular16Bluegray70099: "font-epilogue font-normal",
  txtEpilogueRegular16Gray900: "font-epilogue font-normal",
  txtClashDisplayVariableSemiBold24WhiteA700:
    "font-clashdisplayvariable font-semibold",
  txtEpilogueRegular16Gray90087: "font-epilogue font-normal",
  txtClashDisplayVariableSemiBold48: "font-clashdisplayvariable font-semibold",
  txtInterSemiBold16IndigoA700: "font-inter font-semibold",
  txtEpilogueRegular20Bluegray900: "font-epilogue font-normal",
  txtEpilogueSemiBold16WhiteA700: "font-epilogue font-semibold",
  txtEpilogueBold16Black900: "font-bold font-epilogue",
  txtEpilogueSemiBold16Deeporange400: "font-epilogue font-semibold",
  txtEpilogueSemiBold14Yellow700: "font-epilogue font-semibold",
  txtInterMedium626: "font-inter font-medium",
  txtClashDisplayVariableSemiBold1253:
    "font-clashdisplayvariable font-semibold",
  txtInterBold20: "font-bold font-inter",
  txtEpilogueMedium14: "font-epilogue font-medium",
  txtEpilogueMedium626: "font-epilogue font-medium",
  txtEpilogueSemiBold14IndigoA700: "font-epilogue font-semibold",
  txtEpilogueSemiBold16Bluegray900: "font-epilogue font-semibold",
  txtEpilogueMedium16Bluegray900: "font-epilogue font-medium",
  txtEpilogueSemiBold36: "font-epilogue font-semibold",
  txtEpilogueRegular16Bluegray90099: "font-epilogue font-normal",
  txtInterSemiBold548: "font-inter font-semibold",
  txtEpilogueRegular16Bluegray40099: "font-epilogue font-normal",
  txtInterMedium10: "font-inter font-medium",
  txtEpilogueRegular20Bluegray70099: "font-epilogue font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtEpilogueSemiBold16Black900: "font-epilogue font-semibold",
  txtEpilogueRegular20Gray300: "font-epilogue font-normal",
  txtEpilogueSemiBold18Gray900: "font-epilogue font-semibold",
  txtEpilogueSemiBold48: "font-epilogue font-semibold",
  txtEpilogueSemiBold20WhiteA700: "font-epilogue font-semibold",
  txtEpilogueMedium16Gray300: "font-epilogue font-medium",
  txtClashDisplayVariableSemiBold72: "font-clashdisplayvariable font-semibold",
  txtClashDisplayVariableSemiBold48Blue500:
    "font-clashdisplayvariable font-semibold",
  txtEpilogueRegular14Black900: "font-epilogue font-normal",
  txtClashDisplayVariableSemiBold32Gray900:
    "font-clashdisplayvariable font-semibold",
  txtInterMedium16Gray90087: "font-inter font-medium",
  txtEpilogueRegular16IndigoA700: "font-epilogue font-normal",
  txtEpilogueRegular14Bluegray900: "font-epilogue font-normal",
  txtEpilogueRegular16Bluegray400: "font-epilogue font-normal",
  txtEpilogueSemiBold16Bluegray400: "font-epilogue font-semibold",
  txtEpilogueSemiBold705: "font-epilogue font-semibold",
  txtRedHatDisplayBold24Gray900: "font-bold font-redhatdisplay",
  txtEpilogueMedium18Deeporange400: "font-epilogue font-medium",
  txtEpilogueRegular16WhiteA700: "font-epilogue font-normal",
  txtEpilogueSemiBold16IndigoA700: "font-epilogue font-semibold",
  txtEpilogueSemiBold14: "font-epilogue font-semibold",
  txtEpilogueSemiBold16: "font-epilogue font-semibold",
  txtEpilogueMedium16Deeporange400: "font-epilogue font-medium",
  txtEpilogueSemiBold18: "font-epilogue font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtEpilogueSemiBold783: "font-epilogue font-semibold",
  txtEpilogueMedium705: "font-epilogue font-medium",
  txtEpilogueMedium16IndigoA700: "font-epilogue font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtEpilogueRegular16Bluegray900: "font-epilogue font-normal",
  txtEpilogueRegular18WhiteA700: "font-epilogue font-normal",
  txtEpilogueRegular18Gray900: "font-epilogue font-normal",
  txtRedHatDisplayBold24Bluegray900: "font-bold font-redhatdisplay",
  txtEpilogueSemiBold20: "font-epilogue font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtEpilogueBold16Bluegray900: "font-bold font-epilogue",
  txtEpilogueRegular14Blue500: "font-epilogue font-normal",
  txtEpilogueSemiBold18Bluegray400: "font-epilogue font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };