import React, { useState } from 'react';

// components
import { Select as AntdSelect } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

type ModeType = 'multiple' | 'tags' | undefined;

interface IOption {
  value: any;
  label: string;
}

interface SelectProps {
  mode?: ModeType;
  value?: string | null;
  options: IOption[];
  disabled?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  defaultValue?: any;
  onChange?: (option: any) => void;
}

function Select({ mode = undefined, allowClear = false, value, options, disabled, defaultValue, placeholder, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <AntdSelect
      value={value || null}
      options={options}
      mode={mode}
      disabled={disabled}
      allowClear={allowClear}
      onBlur={() => setOpen(!open)}
      suffixIcon={open ? <UpOutlined /> : <DownOutlined />}
      placeholder={placeholder}
      onClick={() => setOpen(!open)}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}

export default Select;
