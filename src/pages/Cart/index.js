import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { YellowBox, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  CartList,
  Product,
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
  CartEmpty,
  CartEmptyText,
} from './styles';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function incremetn(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decremente(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <ScrollView>
          <CartList
            data={cart}
            keyExtractor={(carts, index) => String(index)}
            renderItem={({ item }) => (
              <Product>
                <ProductInfo>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductDetails>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                  </ProductDetails>
                  <ProductTrash
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  >
                    <Icon name="delete-forever" color="#7159c1" size={30} />
                  </ProductTrash>
                </ProductInfo>
                <ProductOptions>
                  <ProductActions>
                    <ProductActionsTouch onPress={() => decremente(item)}>
                      <Icon
                        name="remove-circle-outline"
                        color="#7159c1"
                        size={30}
                      />
                    </ProductActionsTouch>
                    <ProductActionsInput maxLength={3}>
                      {item.amount}
                    </ProductActionsInput>
                    <ProductActionsTouch onPress={() => incremetn(item)}>
                      <Icon
                        name="add-circle-outline"
                        color="#7159c1"
                        size={30}
                      />
                    </ProductActionsTouch>
                  </ProductActions>
                  <ProductActionsPrice>
                    <ProductActionsPriceText>
                      {item.subtotal}
                    </ProductActionsPriceText>
                  </ProductActionsPrice>
                </ProductOptions>
              </Product>
            )}
            ListFooterComponent={
              <TotalView>
                <TotalTitle>TOTAL</TotalTitle>
                <TotalPrice>{total}</TotalPrice>

                <FinalizarBotao>
                  <FinalizarBotaoText>FINALIZAR PEDIDO</FinalizarBotaoText>
                </FinalizarBotao>
              </TotalView>
            }
          />
        </ScrollView>
      ) : (
        <CartEmpty>
          <CartEmptyText>Carrinho Vazio</CartEmptyText>
        </CartEmpty>
      )}
    </Container>
  );
}
