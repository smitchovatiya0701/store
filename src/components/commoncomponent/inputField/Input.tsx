import { InputProps } from "@/types/type";
import React from "react";
function Input({
  error = false,
  label,
  placeholder,
  type,
  id,
  name,
  value,
  onChange,
  inputClassName,
  disabled,
  onBlur,
  classname,
  labelStyles = {},
  inputStyles = {},
}: InputProps) {
  return (
    <div className="flex flex-col gap-3 w-full lg:ml-0">
      <span
        style={labelStyles}
        className={`${classname}  px-1.5 font-figtree text-xl font-medium text-black`}
      >
        {label}
      </span>
      <input
        className={` w-full rounded-[5px] border h-[52px] text-base ${
          error === true ? `border-Red` : `border-tertiary`
        }  p-4 text-[13px] font-figtree lg:text-base font-medium leading-5 outline-none placeholder:text-Gray ${inputClassName} `}
        style={inputStyles}
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
      />
    </div>
  );
}
export default Input;
