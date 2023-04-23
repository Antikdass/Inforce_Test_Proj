import React, { memo, ReactNode } from 'react';

// components
import { Button as AntdButton } from 'antd';

type HtmlType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  type?: HtmlType;
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;

  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = memo(({ type = 'button', children, disabled = false, isLoading = false, onClick }: ButtonProps) => {
  return (
    <AntdButton htmlType={type} disabled={disabled} onClick={onClick} loading={isLoading}>
      {children}
    </AntdButton>
  );
});

export default Button;
