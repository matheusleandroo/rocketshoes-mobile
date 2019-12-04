import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
  Container,
  ProductList,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ButtonContainer,
  ButtonIcon,
  IconShoppingCart,
  IconText,
  ButtonText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => product.id.toString()}
          renderItem={({ item }) => (
            <ProductList key={item.id}>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <ButtonContainer>
                <ButtonIcon>
                  <IconShoppingCart name="shopping-cart" />
                  <IconText>0</IconText>
                </ButtonIcon>
                <ButtonText>ADICIONAR</ButtonText>
              </ButtonContainer>
            </ProductList>
          )}
        />
      </Container>
    );
  }
}
