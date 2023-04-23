import React from 'react';

// components
import Select from '../../../AntD/Select';

interface CategorySelectProps {
  value: any;
  placeholder: string;
  onChange: (e: any) => void;
}

const CategorySelect = ({ value, placeholder, onChange }: CategorySelectProps) => {
  return (
    <Select
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      options={[
        { label: 'smartphones', value: 'smartphones' },
        { label: 'laptops', value: 'laptops' },
        { label: 'fragrances', value: 'fragrances' },
        { label: 'skincare', value: 'skincare' },
        { label: 'groceries', value: 'groceries' },
        { label: 'home-decoration', value: 'home-decoration' },
      ]}
    />
  );
};

export default CategorySelect;
