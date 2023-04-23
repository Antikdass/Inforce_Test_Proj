import React from 'react';

// helpers
import { FormikHelpers } from 'formik';
import { IComments, IProducts } from '../../../../typings/products';
import { AddProductValidationSchema } from '../../../../validation/common';

// components
import Form from '../../Form/index';
import InnerForm from './InnerForm';

export interface FormValuesModel {
  id?: number;
  title: string;
  category: string;
  brand: string;
  rating: number;
  price: number | null;
  width: number;
  height: number;
  weight: number;
  stock: number | null;
  comments?: IComments[];
  thumbnail?: string;
  isCreated?: boolean;
}

interface IProps {
  selectedProduct: IProducts;
  initialFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel, helpers?: FormikHelpers<FormValuesModel>) => Promise<void>;
}

const AddProductForm = ({ selectedProduct, initialFormValues, onSubmit }: IProps) => {
  return (
    <Form<FormValuesModel>
      submitText='Create'
      renderForm={<InnerForm selectedProduct={selectedProduct} />}
      initialValues={initialFormValues}
      validationSchema={AddProductValidationSchema}
      onSubmit={(values: FormValuesModel, helpers: FormikHelpers<FormValuesModel>) => onSubmit(values, helpers)}
    />
  );
};

export default AddProductForm;
