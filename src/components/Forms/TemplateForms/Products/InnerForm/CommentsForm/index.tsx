import React from 'react';

// components
import Box from '../../../../../Additional/Box';
import Button from '../../../../../AntD/Button';
import Textarea from '../../../../../AntD/Textarea';
import FormField from '../../../../FormField';

const CommentsForm = ({ fieldName, onRemove }: any) => {
  return (
    <Box direction='column'>
      <FormField name={`${fieldName}.description`} placeholder='Fill information about product' component={Textarea} />
      <Box justify='flex-start'>
        <Button onClick={onRemove}>Remove</Button>
      </Box>
    </Box>
  );
};

export default CommentsForm;
