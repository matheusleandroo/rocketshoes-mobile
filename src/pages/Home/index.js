import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';

import { Container } from './styles';

export default class Home extends Component {
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
    return (
      <Container>
        <Text>Home</Text>
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

Home.navigationOptions = {
  title: 'Rocketshoes',
};
