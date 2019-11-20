import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Button, FlatList } from 'react-native';

import { Container, ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
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
          keyExtractor={product => product.id}
          renderItem={({ item }) => (
            <ProductList>
              <Text>{item.title}</Text>
            </ProductList>
          )}
        />
        {/* <ProductList>
          <Text>Teste</Text>
        </ProductList> */}
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
