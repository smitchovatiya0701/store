import { HTMLInputTypeAttribute, CSSProperties } from "react";
export type InputProps = {
  error?: boolean;
  label?: string;
  text?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | undefined;
  id?: string;
  name?: string;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputClassName?: string;
  disabled?: boolean;
  height?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  classname?: string;
  darkModeEnabled?: boolean;
  labelStyles?: CSSProperties;
  inputStyles?: CSSProperties;
};

export type buttonType = {
  type?: "submit" | "reset" | "button";
  classname?: string;
  disabled?: boolean;
  buttonName: string;
  handleClick?: () => void;
};
