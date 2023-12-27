import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-lg",
  square: "rounded-none",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-900",
    teal_300_19: "bg-teal-300_19",
    gray_50: "bg-gray-50",
    indigo_50_01: "bg-indigo-50_01",
    indigo_A700: "bg-indigo-A700 text-white-A700",
  },
  outline: {
    indigo_A700: "border border-indigo-A700 border-solid text-indigo-A700",
  },
  underline: { gray_300: "border-b border-gray-300" },
} as const;
const sizes = {
  xs: "py-0.5",
  sm: "px-2 py-[9px]",
  md: "px-[11px] py-3",
  lg: "pb-[15px] pt-3.5 px-3.5",
  xl: "pl-4 sm:pr-5 pr-[21px] py-[21px]",
  "3xl": "pb-[21px] pt-[25px] sm:px-5 px-[21px]",
  "2xl": "pb-[22px]",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
