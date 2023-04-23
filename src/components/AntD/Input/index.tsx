import React, { memo } from 'react';

// components
import { Input as AntDInput } from 'antd';

export type InputSizes = 'large' | 'middle' | 'small';
export type InputType = 'text' | 'number' | 'numbers';

export interface InputProps {
  type: InputType;
  name?: string;
  size?: InputSizes;
  value?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;

  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input = memo(({ type, name, size, value, disabled, placeholder, onBlur, onChange, onKeyPress }: InputProps) => {
  return (
    <AntDInput
      type={type}
      name={name}
      size={size}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
});

export default Input;
