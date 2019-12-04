import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #191920;
  align-items: center;
`;

export const CartList = styled.View`
  background: #ffff;
  border-radius: 4px;
  padding: 10px;
  min-height: 320px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image.attrs(props => ({
  uri: props.source,
}))`
  width: 140px;
  height: 110px;
`;

export const ProductDetails = styled.View`
  padding: 10px;
  width: 195px;
`;

export const ProductTitle = styled.Text`
  font-size: 15px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
`;

export const ProductTrash = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  margin-top: 25px;
`;

export const ProductOptions = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
