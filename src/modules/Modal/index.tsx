import React, { useState } from 'react';

// helpers
import { IProducts } from '../../typings/products';
import { FormikHelpers } from 'formik';

// components
import Box from '../../components/Additional/Box';
import ModalDialog from '../../components/AntD/ModalDialog';
import AddProductForm, { FormValuesModel } from '../../components/Forms/TemplateForms/Products';

interface AddProductModalProps {
  isModalVisible: boolean;
  initialFormValues: FormValuesModel;
  selectedProduct: IProducts;
  onSubmit: (values: FormValuesModel, helpers?: FormikHelpers<FormValuesModel>) => Promise<void>;
  closeCallback: (isVisible: boolean) => void;
}

const Modal = ({ isModalVisible, initialFormValues, selectedProduct, onSubmit, closeCallback }: AddProductModalProps) => {
  return (
    <ModalDialog closeCallback={closeCallback} isVisible={isModalVisible}>
      <Box padding='20px 0'>
        <AddProductForm
          selectedProduct={selectedProduct}
          initialFormValues={initialFormValues ? initialFormValues : ({} as any)}
          onSubmit={(values, helpers) => onSubmit(values, helpers)}
        />
      </Box>
    </ModalDialog>
  );
};

export default Modal;
