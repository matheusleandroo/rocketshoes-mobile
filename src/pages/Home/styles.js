import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #191920;
`;

export const ProductList = styled.View`
  flex: 1;
  background: #ffff;
  border-radius: 4px;
  padding: 20px;
  margin: 0px 20px 20px 0px;
  width: 280px;
  height: 450px;
`;

export const ProductImage = styled.Image.attrs(props => ({
  uri: props.source,
}))`
  flex: 0.7;
  width: 240px;
  height: 200px;
  margin-bottom: 5%;
`;

export const ProductTitle = styled.Text`
  flex: 0.3;
  font-size: 18px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  flex: 0.1;
  font-weight: bold;
  font-size: 23px;
  margin: 5px 0 20px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 0.17;
  flex-direction: row;
  height: 10px;
  background-color: #7159c1;
  border-radius: 4px;
  overflow: hidden;
  align-items: center;
`;

export const ButtonIcon = styled.View`
  flex: 0.2;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 12px;
`;

export const IconShoppingCart = styled(Icon)`
  font-size: 25px;
  color: #ffff;
`;

export const IconText = styled.Text`
  color: #ffff;
  font-size: 18px;
  padding-left: 5px;
`;

export const ButtonText = styled.Text`
  flex: 0.75;
  font-size: 20px;
  font-weight: bold;
  color: #ffff;
  text-align: center;
`;
