import { View, Image, TouchableOpacity } from 'react-native';
import { Card as CardType } from '../../types';
import React from 'react';
import {
  CardBox,
  CardDetail,
  CardDetailContent,
  CardDetailTitle,
  CardNumber,
  CardNumberText,
} from './StyledCard';

const cardIcon = require('../../../assets/visa_color_3x.png');

type Props = {
  card: CardType;
  handlePayment: (arg0: string) => void;
};

const Card = ({ card, handlePayment }: Props) => {
  return (
    <CardBox>
      <TouchableOpacity onPress={() => handlePayment(card.token)}>
        <Image source={cardIcon} style={{ width: 85, height: 50 }} />
        <CardNumber>
          <CardNumberText>••••</CardNumberText>
          <CardNumberText>••••</CardNumberText>
          <CardNumberText>••••</CardNumberText>
          <CardNumberText>{card.last_digits}</CardNumberText>
        </CardNumber>
        <CardDetail>
          <View>
            <CardDetailTitle>Name on Card</CardDetailTitle>
            <CardDetailContent>{card.name}</CardDetailContent>
          </View>
          <View>
            <CardDetailTitle>Expiry</CardDetailTitle>
            <CardDetailContent>
              {card.expiration_month} / {card.expiration_year}
            </CardDetailContent>
          </View>
        </CardDetail>
      </TouchableOpacity>
    </CardBox>
  );
};

export default Card;
