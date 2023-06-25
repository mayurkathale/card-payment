import {
  AddCardActionParam,
  Card,
  DeleteCardActionParam,
  MakePaymentActionParam,
} from '../types';
import { ADD_CARD, DELETE_CARD, MAKE_PAYMENT } from './constants';

export function addCard(card: Card): AddCardActionParam {
  return {
    type: ADD_CARD,
    payload: card,
  };
}

export function deleteCard(id: string): DeleteCardActionParam {
  return {
    type: DELETE_CARD,
    payload: id,
  };
}

export function makePayment(card: Card): MakePaymentActionParam {
  return {
    type: MAKE_PAYMENT,
    payload: card,
  };
}
