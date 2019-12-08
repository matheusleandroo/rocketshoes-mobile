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
  width: 100%;
`;

export const Product = styled.View`
  min-height: 190px;
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
  max-height: 60px;
`;

export const ProductActionsTouch = styled.TouchableOpacity``;

export const ProductActions = styled.View`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

export const ProductActionsInput = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  width: 50px;
  height: 40px;
  text-align: center;
  margin: 0px 15px;
`;

export const ProductActionsPrice = styled.View`
  height: 30px;
`;

export const ProductActionsPriceText = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const TotalView = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const TotalTitle = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  font-size: 28px;
  margin-left: 5px;
`;

export const FinalizarBotao = styled.TouchableOpacity`
  background-color: #7159c1;
  border-radius: 4px;
  width: 95%;
  height: 50px;
  margin: 25px 15px;
  justify-content: center;
`;

export const FinalizarBotaoText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const CartEmpty = styled.View`
  background: #ffff;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
`;

export const CartEmptyText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;
