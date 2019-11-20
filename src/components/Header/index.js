import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Icon name="shopping-basket" size={25} color="#FFF" />
    </Container>
  );
}
