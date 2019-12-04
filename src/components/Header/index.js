import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LogoContainer,
  LogoImage,
  BasketContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <LogoContainer onPress={() => navigation.navigate('Home')}>
        <LogoImage />
      </LogoContainer>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>0</ItemCount>
      </BasketContainer>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
