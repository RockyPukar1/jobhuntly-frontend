import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[17px]",
};
const variants = {
  fill: {
    yellow_700: "bg-yellow-700",
    deep_purple_A200: "bg-deep_purple-A200",
    blue_500_19: "bg-blue-500_19 text-blue-500",
    teal_300: "bg-teal-300",
    white_A700: "bg-white-A700",
    indigo_A700: "bg-indigo-A700 text-white-A700",
    gray_900: "bg-gray-900",
    gray_50: "bg-gray-50",
    blue_500: "bg-blue-500",
    blue_gray_700: "bg-blue_gray-700",
    deep_orange_400_19: "bg-deep_orange-400_19",
    indigo_A700_19: "bg-indigo-A700_19",
    indigo_A700_5f: "bg-indigo-A700_5f",
    yellow_900_19: "bg-yellow-900_19",
    white_A700_63: "bg-white-A700_63",
    indigo_50_01: "bg-indigo-50_01",
    teal_300_19: "bg-teal-300_19",
  },
  outline: {
    blue_gray_200: "border border-blue_gray-200 border-solid",
    blue_500: "border border-blue-500 border-solid",
    deep_orange_400: "border border-deep_orange-400 border-solid",
    indigo_100: "border border-indigo-100 border-solid text-indigo-A700",
    gray_300: "border border-gray-300 border-solid text-indigo-A700",
    teal_300: "border border-solid border-teal-300",
    yellow_700: "border border-solid border-yellow-700",
    indigo_A700: "border border-indigo-A700 border-solid text-indigo-A700",
  },
};
const sizes = {
  xs: "p-px",
  sm: "p-1.5",
  md: "p-[9px]",
  lg: "p-[13px]",
  xl: "p-4",
  "2xl": "p-[19px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "yellow_700",
    "deep_purple_A200",
    "blue_500_19",
    "teal_300",
    "white_A700",
    "indigo_A700",
    "gray_900",
    "gray_50",
    "blue_500",
    "blue_gray_700",
    "deep_orange_400_19",
    "indigo_A700_19",
    "indigo_A700_5f",
    "yellow_900_19",
    "white_A700_63",
    "indigo_50_01",
    "teal_300_19",
    "blue_gray_200",
    "deep_orange_400",
    "indigo_100",
    "gray_300",
  ]),
};

export { Button };
