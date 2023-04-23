import React from 'react';

// components
import { Rate as AntdRate } from 'antd';

interface RateProps {
  value: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

const Rate = ({ value, disabled = false, onChange }: RateProps) => {
  return <AntdRate allowHalf disabled={disabled} value={value} onChange={onChange} />;
};

export default Rate;
