import React, { useState } from 'react';

// helpers
import styled from 'styled-components';
import { products } from '../../../redux/actions/products';
import { useDispatch } from 'react-redux';
import { getCurrentPrice } from '../../../helpers/getCurrentPrice';

// components
import Box from '../Box';
import Rate from '../../AntD/Rate';
import Text from '../../AntD/Text';
import Button from '../../AntD/Button';
import NoImage from '../../../assets/img/NoImg.png';
import ModalDialog from '../../AntD/ModalDialog';
import { Col } from 'antd';
import { IProducts } from '../../../typings/products';
import { CloseOutlined } from '@ant-design/icons';

interface ProductProps {
  product: IProducts;
  handleEdit: (product: any) => void;
}

const Product = ({ product, handleEdit }: ProductProps) => {
  const dispatch: any = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const handleRemoveProduct = () => {
    dispatch(products.deleteProduct(product.id));
  };

  return (
    <StyledProduct span={6} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {product.discountPercentage && <Discount>-{product.discountPercentage}%</Discount>}
      {product.rating >= 4.5 && <TopSale>TOP SALE</TopSale>}

      {isHover && <RemoveIcon onClick={() => setIsModalVisible(true)} />}

      <ProductImage>
        <img src={product.thumbnail || NoImage} alt='icon' />
      </ProductImage>

      <Text size={16} weight={600}>
        {product.title}
      </Text>
      <Rate disabled value={product.rating} />

      {product.discountPercentage && <OldPrice>{product.price}$</OldPrice>}

      <Text size={20} color={product.discountPercentage ? 'red' : 'black'}>
        {getCurrentPrice(product.price, product.discountPercentage)}$
      </Text>
      <Box justify='space-between' align='center'>
        <Text>In stock: {product.stock}</Text>
        {isHover && <Button onClick={() => handleEdit(product)}>Edit</Button>}
      </Box>
      <ModalDialog isVisible={isModalVisible} closeCallback={() => setIsModalVisible(false)}>
        <Box align='center' direction='column'>
          <Text>Do you want delete this product?</Text>
          <Box>
            <Button onClick={handleRemoveProduct}>Yes</Button>
            <Button onClick={() => setIsModalVisible(false)}>No</Button>
          </Box>
        </Box>
      </ModalDialog>
    </StyledProduct>
  );
};

const StyledProduct = styled(Col)`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 360px !important;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const RemoveIcon = styled(CloseOutlined)`
  position: absolute;
  right: 5px;
  top: 5px;
  height: 16px;
  width: 16px;
  z-index: 2000;
  svg {
    height: 100%;
    width: 100%;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Discount = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  background: red;
  color: white;
  padding: 6px;
  border-radius: 30px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  font-size: 16px;
`;

const TopSale = styled.div`
  position: absolute;
  top: 5px;
  left: 80px;
  background: orange;
  color: white;
  padding: 6px;
  border-radius: 30px;
`;

export default Product;
