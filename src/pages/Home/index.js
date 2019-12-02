import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FlatList } from 'react-native';

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
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
    ],
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => product.id.toString()}
          renderItem={({ item }) => (
            <ProductList>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>R$ {item.price}</ProductPrice>
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
        <Button
          title="Go to Card"
          onPress={() => {
            this.handleNavigate();
          }}
        />
      </Container>
    );
  }
}
