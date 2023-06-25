import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackNavigatorParamList = {
  Home: undefined;
  Cards: undefined;
  AddCard: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Cards'
>;

export type CardsScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'AddCard'
>;

export type Card = {
  bank: string;
  brand: string;
  city: string;
  country: string;
  created_at: string;
  deleted: boolean;
  expiration_month: number;
  expiration_year: number;
  financing: string;
  fingerprint: string;
  id: string;
  last_digits: string;
  livemode: false;
  name: string;
  object: string;
  postal_code: string;
  security_code_check: true;
  token: string;
};

export type CreateTokenResponse = {
  card: Card;
  id: string;
  ok: boolean;
};

export type CreateTokenResponseError = {
  code: string;
  location: string;
  message: string;
};

export type AddCardActionParam = {
  type: string;
  payload: Card;
};

export type MakePaymentActionParam = {
  type: string;
  payload: Card;
};

export type DeleteCardActionParam = {
  type: string;
  payload: string;
};

export type CardsState = {
  cards: Card[];
};

export type StoreState = {
  cards: CardsState;
};
