import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import signInBackgroundImg from '../../assets/backgrounds/bg-youplace1.jpg';

export const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background: url(${signInBackgroundImg}) no-repeat center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Arial';
  margin: 60px 0 20px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 60px;
  margin-left: 120px;
  width: 280px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-family: 'Arial';
`;
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.colors.background};
  border-top-width: 1px;
  border-color: ${(props) => props.theme.colors.li};
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'Arial';
  margin-left: 16px;
`;
