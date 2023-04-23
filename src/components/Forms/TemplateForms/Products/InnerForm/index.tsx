import React from 'react';

// helpers
import { FormValuesModel } from '..';

// components
import Rate from '../../../../AntD/Rate';
import Text from '../../../../AntD/Text';
import Input from '../../../../AntD/Input';
import Button from '../../../../AntD/Button';
import FormField from '../../../FormField';
import CommentsForm from './CommentsForm';
import CategorySelect from '../../../FormComponents/CategorySelect';
import { Col, Row } from 'antd';
import { FieldArray, FieldArrayRenderProps, useFormikContext } from 'formik';

const InnerForm = (selectedProduct: any) => {
  const { values } = useFormikContext<FormValuesModel>();

  const renderComments = (arrayHelpers: FieldArrayRenderProps) => {
    const newComment = { id: values.comments?.length, productId: values.id, date: new Date() };
    return (
      <>
        {values?.comments?.map((_, index) => (
          <>
            <CommentsForm key={index} fieldName={`comments.${index}`} onRemove={() => arrayHelpers.remove(index)} />
          </>
        ))}
        <Button onClick={() => arrayHelpers.push(newComment)}>Add coments</Button>
      </>
    );
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <FormField name='title' placeholder='Add title' component={Input} />
      </Col>
      <Col span={12}>
        <FormField name='brand' placeholder='Add brand' component={Input} />
      </Col>
      <Col span={12}>
        <FormField name='category' placeholder='Choose category' component={CategorySelect} />
      </Col>
      <Col span={12}>
        <FormField name='price' placeholder='Add price' component={Input} additionalProps={{ addonBefore: '$', type: 'numbers' }} />
      </Col>
      <Col span={12}>
        <FormField name='weight' placeholder='Weight' component={Input} />
      </Col>
      <Col span={12}>
        <FormField name='stock' placeholder='Count in stock' component={Input} additionalProps={{ type: 'number' }} />
      </Col>
      <Col span={12}>
        <FormField name='width' placeholder='Width' component={Input} />
      </Col>
      <Col span={12}>
        <FormField name='height' placeholder='Height' component={Input} />
      </Col>
      <Text>Choose rating:</Text>
      <FormField name='rating' component={Rate} />
      {Object.keys(selectedProduct.selectedProduct).length ? <FieldArray name='comments' render={renderComments} /> : ''}
    </Row>
  );
};

export default InnerForm;
