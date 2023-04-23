import React, { memo, ReactNode } from 'react';

// components
import Box from '../../Additional/Box';
import { Layout } from 'antd';

const { Header: AntdHeader } = Layout;

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header = memo(({ children }: HeaderProps) => {
  return (
    <AntdHeader>
      <Box height='100%' width='100%'>
        {children}
      </Box>
    </AntdHeader>
  );
});

export default Header;
