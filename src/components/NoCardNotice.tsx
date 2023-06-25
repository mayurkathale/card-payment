import { Image, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types';

const cardImage = require('../../assets/card-icon.png');

const Notice = styled.View`
  align-items: center;
  gap: 16px;
`;

const StyledText = styled.Text`
  text-align: center;
`;

const TouchText = styled.Text`
  color: #4ad8da;
  font-size: 18px;
  font-weight: 500;
`;

const NoCardNotice = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <Notice>
      <Image source={cardImage} />
      <Text>No Cards Found</Text>
      <StyledText>We recommend adding a card{'\n'}for easy payment</StyledText>
      <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
        <TouchText>Add New Card</TouchText>
      </TouchableOpacity>
    </Notice>
  );
};
export default NoCardNotice;
