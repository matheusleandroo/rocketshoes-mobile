import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

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

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
            <ButtonContainer onPress={() => handleAddProduct(item.id)}>
              <ButtonIcon>
                <IconShoppingCart name="shopping-cart" />
                <IconText>{amount[item.id] || 0}</IconText>
              </ButtonIcon>
              <ButtonText>ADICIONAR</ButtonText>
            </ButtonContainer>
          </ProductList>
        )}
      />
    </Container>
  );
}
