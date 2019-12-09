import React from 'react';
import { YellowBox, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function incremetn(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decremente(product) {
    updateAmountRequest(product.id, product.amount - 1);
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
                  <ProductTrash onPress={() => removeFromCart(item.id)}>
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

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      amount: PropTypes.number,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
