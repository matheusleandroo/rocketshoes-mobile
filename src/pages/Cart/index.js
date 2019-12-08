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

import * as CartActions from '../../store/modules/cart/actions';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

function Cart({ cart, removeFromCart }) {
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
                    <ProductPrice>R${item.price}0</ProductPrice>
                  </ProductDetails>
                  <ProductTrash onPress={() => removeFromCart(item.id)}>
                    <Icon name="delete-forever" color="#7159c1" size={30} />
                  </ProductTrash>
                </ProductInfo>
                <ProductOptions>
                  <ProductActions>
                    <ProductActionsTouch>
                      <Icon
                        name="remove-circle-outline"
                        color="#7159c1"
                        size={30}
                      />
                    </ProductActionsTouch>
                    <ProductActionsInput maxLength={3}>
                      {item.amount}
                    </ProductActionsInput>
                    <ProductActionsTouch>
                      <Icon
                        name="add-circle-outline"
                        color="#7159c1"
                        size={30}
                      />
                    </ProductActionsTouch>
                  </ProductActions>
                  <ProductActionsPrice>
                    <ProductActionsPriceText>RS 129,90</ProductActionsPriceText>
                  </ProductActionsPrice>
                </ProductOptions>
              </Product>
            )}
            ListFooterComponent={
              <TotalView>
                <TotalTitle>TOTAL</TotalTitle>
                <TotalPrice>R$ 129,29</TotalPrice>

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
  removeFromCart: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
