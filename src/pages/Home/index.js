import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

class Home extends Component {
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

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
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
            <ProductList key={item.id}>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <ButtonContainer onPress={() => this.handleAddProduct(item)}>
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

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Home);
