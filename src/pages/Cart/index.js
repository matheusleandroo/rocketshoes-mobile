import React, { Component } from 'react';

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
  ProductActions,
  ProductActionsTouch,
  ProductActionsInput,
  ProductActionsPrice,
  ProductActionsPriceText,
  TotalView,
  TotalTitle,
  TotalPrice,
  FinalizarBotao,
  FinalizarBotaoText,
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
              <Icon name="delete-forever" color="#7159c1" size={30} />
            </ProductTrash>
          </ProductInfo>
          <ProductOptions>
            <ProductActions>
              <ProductActionsTouch>
                <Icon name="remove-circle-outline" color="#7159c1" size={30} />
              </ProductActionsTouch>
              <ProductActionsInput maxLength={3}>0</ProductActionsInput>
              <ProductActionsTouch>
                <Icon name="add-circle-outline" color="#7159c1" size={30} />
              </ProductActionsTouch>
            </ProductActions>
            <ProductActionsPrice>
              <ProductActionsPriceText>RS 129,90</ProductActionsPriceText>
            </ProductActionsPrice>
          </ProductOptions>
          <TotalView>
            <TotalTitle>TOTAL</TotalTitle>
            <TotalPrice>R$ 129,29</TotalPrice>
            <FinalizarBotao>
              <FinalizarBotaoText>FINALIZAR PEDIDO</FinalizarBotaoText>
            </FinalizarBotao>
          </TotalView>
        </CartList>
      </Container>
    );
  }
}
