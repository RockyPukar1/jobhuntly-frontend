import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-200",
    teal_300_19: "bg-teal-300_19",
    gray_50: "bg-gray-50",
    indigo_50_01: "bg-indigo-50_01",
    indigo_A700: "bg-indigo-A700 text-white-A700",
  },
  outline: {
    indigo_A700: "border border-indigo-A700 border-solid text-indigo-A700",
  },
  underline: { gray_300: "border-b border-gray-300" },
};
const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-lg",
  square: "rounded-none",
};
const sizes = {
  xs: "py-0.5",
  sm: "px-2 py-[9px]",
  md: "px-[11px] py-3",
  lg: "pb-[15px] pt-3.5 px-3.5",
  xl: "pl-4 sm:pr-5 pr-[21px] py-[21px]",
  "3xl": "pb-[21px] pt-[25px] sm:px-5 px-[21px]",
  "2xl": "pb-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "3xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "underline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "teal_300_19",
    "gray_50",
    "indigo_50_01",
    "indigo_A700",
    "indigo_A700",
    "gray_300",
  ]),
};

export { Input };
