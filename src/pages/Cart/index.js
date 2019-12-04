import React, { Component } from 'react';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  CartList,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductTrash,
  ProductOptions,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve e muito Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ],
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <CartList>
          <ProductInfo>
            <ProductImage source={{ uri: products[0].image }} />
            <ProductDetails>
              <ProductTitle>{products[0].title}</ProductTitle>
              <ProductPrice>R${products[0].price}0</ProductPrice>
            </ProductDetails>
            <ProductTrash>
              <Icon name="delete-forever" color="#715c94" size={30} />
            </ProductTrash>
          </ProductInfo>
          <ProductOptions>
            <Text>Teste</Text>
            <Text>Teste</Text>
          </ProductOptions>
        </CartList>
      </Container>
    );
  }
}
