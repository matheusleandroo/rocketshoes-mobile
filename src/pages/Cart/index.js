import React, { Component } from 'react';

import { Container, CartList } from './styles';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default class Cart extends Component {
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
        <CartList />
      </Container>
    );
  }
}
