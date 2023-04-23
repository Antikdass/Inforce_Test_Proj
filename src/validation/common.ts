import * as Yup from 'yup';

export const AddProductValidationSchema = Yup.object().shape({
  title: Yup.string()
    .test('len', 'Title must be at least 3 characters', name => (name || '').toString().length >= 3)
    .required('Title is required!'),
  brand: Yup.string()
    .test('len', 'Brand must be at least 3 characters', name => (name || '').toString().length >= 3)
    .required('Brand is required!'),
  rating: Yup.number().required('Rating is required!'),
  price: Yup.number().required('Price is required!'),
  stock: Yup.number().required('Stock is required!'),
  width: Yup.number().required('Width is required!'),
  height: Yup.number().required('Height is required!'),
  weight: Yup.number().required('Weight is required!'),
  category: Yup.string().required('Category is required!'),
  comments: Yup.array().of(
    Yup.object().shape({
      description: Yup.string()
        .test('len', 'Comment must be at least 10 characters', name => (name || '').toString().length >= 10)
        .required('Description is required!'),
      id: Yup.number().required('id is required'),
      productId: Yup.number().required('productId is required'),
      date: Yup.string().required('date is required'),
    }),
  ),
});
