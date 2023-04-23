import React, { useEffect, useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import { IProducts } from '../typings/products';
import { StateModel } from '../redux/reducers';
import { FormValuesModel } from '../components/Forms/TemplateForms/Products';
import { useDispatch, useSelector } from 'react-redux';
import { products as productsActions } from '../redux/actions/products';

// components
import Box from '../components/Additional/Box';
import Text from '../components/AntD/Text';
import Modal from '../modules/Modal';
import Spiner from '../components/AntD/Spiner';
import Select from '../components/AntD/Select';
import Button from '../components/AntD/Button';
import Header from '../components/AntD/Header';
import Product from '../components/Additional/Product';
import { Row } from 'antd';

const HomePage = () => {
  const dispatch: any = useDispatch();
  const [selectedValue, setSelectedValue] = useState('Alphabet');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const productsData = useSelector<StateModel, IProducts[]>(state => state.products.products);

  const initialFormValues = useMemo<FormValuesModel>(() => {
    return {
      id: selectedProduct?.id || '',
      title: selectedProduct?.title || '',
      brand: selectedProduct?.brand || '',
      rating: selectedProduct?.rating || 0,
      stock: selectedProduct?.stock || null,
      price: selectedProduct?.price || null,
      category: selectedProduct?.category || '',
      width: selectedProduct?.width || '',
      height: selectedProduct?.height || '',
      weight: selectedProduct?.weight || '',
      comments: selectedProduct?.comments || [],
      thumbnail: selectedProduct?.thumbnail || '',
      isCreated: selectedProduct?.isCreated || false,
    };
  }, [selectedProduct]);

  useMemo(() => {
    productsData.sort((a, b) => (a.title < b.title ? -1 : 1));
  }, [productsData]);

  const handleSortProductsData = (value: any) => {
    setSelectedValue(value);
    if (value === 'Alphabet') {
      productsData.sort((a, b) => (a.title < b.title ? -1 : 1));
    }
    if (value === 'Stock') {
      productsData.sort((a, b) => (a.stock > b.stock ? -1 : 1));
    }
  };

  const onSubmit = async (values: FormValuesModel) => {
    if (Object.keys(selectedProduct).length) {
      console.log(values.id);
      const productId = values.id;
      dispatch(productsActions.updateProduct(productId as number, values));
    } else {
      dispatch(productsActions.createProduct({ ...values, isCreated: true }));
    }
    setSelectedProduct(null);
  };

  const handleEdit = (product: any) => {
    setSelectedProduct((prevState: any) => ({ ...prevState, ...product }));
  };

  useEffect(() => {
    dispatch(productsActions.getProducts());
  }, []);

  console.log(selectedProduct);

  return (
    <>
      {productsData ? (
        <StyledContainer>
          <Header>
            <StyledBlock>
              <Button onClick={() => setSelectedProduct({})}>Add products</Button>
            </StyledBlock>
          </Header>
          <Box>
            <Box align='center' direction='column' padding='10px 0'>
              <Box align='center'>
                <Text>Sort by:</Text>
                <Select
                  value={selectedValue}
                  onChange={value => handleSortProductsData(value)}
                  options={[
                    { label: 'Alphabet', value: 'Alphabet' },
                    { label: 'Stock', value: 'Stock' },
                  ]}
                />
              </Box>
            </Box>
            <StyledRow gutter={[16, 16]}>
              {productsData.map(item => (
                <Product key={item.id} product={item} handleEdit={handleEdit} />
              ))}
            </StyledRow>
          </Box>
        </StyledContainer>
      ) : (
        <StyledSpinerContainer>
          <Spiner />
        </StyledSpinerContainer>
      )}
      {selectedProduct && (
        <Modal
          onSubmit={onSubmit}
          selectedProduct={selectedProduct}
          isModalVisible={!!selectedProduct}
          closeCallback={() => setSelectedProduct(null)}
          initialFormValues={initialFormValues}
        />
      )}
    </>
  );
};

const StyledContainer = styled.div`
  height: 100%;
`;

const StyledSpinerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const StyledRow = styled(Row)`
  margin-right: 0 !important;
  padding-top: 10px;
`;
const StyledBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export default HomePage;
