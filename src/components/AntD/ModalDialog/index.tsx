import React, { memo, ReactNode } from 'react';

// components
import { Modal as AntdModal } from 'antd';

export interface RequiredPropsForModalDialog {
  isVisible: boolean;
  closeCallback: (value: any) => void;
}

interface ModalDialogProps extends RequiredPropsForModalDialog {
  title?: ReactNode;
  width?: number;
  footer?: ReactNode | null;
  children: ReactNode;
  centered?: boolean;
}

const ModalDialog = memo(({ width, title, footer = null, children, centered = true, isVisible: open, closeCallback }: ModalDialogProps) => {
  return (
    <AntdModal open={open} width={width} title={title} footer={footer} centered={centered} onCancel={closeCallback}>
      {children}
    </AntdModal>
  );
});

export default ModalDialog;
