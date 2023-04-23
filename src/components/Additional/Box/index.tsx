import React, { ReactNode } from 'react';

// helpers
import styled from 'styled-components';

type AlignType = 'center' | 'flex-end' | 'flex-start';
type JustifyType = 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-around';
type DirectionType = 'row' | 'column';
type TextAlignType = 'left' | 'center' | 'right';

interface BoxProps {
  id?: string;
  gap?: number;
  width?: string;
  align?: AlignType;
  margin?: string;
  height?: string;
  padding?: string;
  children: ReactNode;
  justify?: JustifyType;
  className?: string;
  textAlign?: TextAlignType;
  direction?: DirectionType;

  onClick?: () => void;
}

const Box = ({
  id,
  gap = 4,
  width = '100%',
  align = 'flex-start',
  height = 'auto',
  margin = '0',
  padding = '0',
  justify = 'center',
  children,
  className = '',
  direction = 'row',
  textAlign = 'left',
  onClick,
}: BoxProps) => {
  return (
    <StyledBox
      id={id}
      gap={gap}
      width={width}
      align={align}
      height={height}
      margin={margin}
      padding={padding}
      justify={justify}
      className={className}
      direction={direction}
      textAlign={textAlign}
      onClick={onClick}
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div<{
  gap: number;
  width: string;
  align: AlignType;
  margin: string;
  height: string;
  padding: string;
  justify: JustifyType;
  direction: DirectionType;
  textAlign: TextAlignType;
}>`
  display: flex;
  gap: ${({ gap }) => gap}px;
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
`;

export default Box;
