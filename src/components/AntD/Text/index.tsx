import React, { ReactNode, MouseEvent } from 'react';

// helpers
import styled from 'styled-components';

// components
import { Typography } from 'antd';

interface TextProps {
  size?: number;
  color?: string;
  weight?: number;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Text = ({ size = 14, weight = 400, color = 'black', children, onClick }: TextProps) => {
  return (
    <StyledText size={size} weight={weight} color={color} onClick={onClick}>
      {children}
    </StyledText>
  );
};

const StyledText = styled(Typography)<{ weight: number; color: string; size: number }>`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
`;
export default Text;
