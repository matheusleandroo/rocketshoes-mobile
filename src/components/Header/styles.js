import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background: #191920;
  padding: 20px;
`;

export const LogoContainer = styled.TouchableOpacity`
  width: 185px;
  height: 24px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
