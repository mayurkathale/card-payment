import {
  AddCardActionParam,
  CardsState,
  DeleteCardActionParam,
  MakePaymentActionParam,
} from '../types';
import { ADD_CARD, DELETE_CARD, MAKE_PAYMENT } from './constants';

const initialState: CardsState = {
  cards: [],
};
const cardPaymentReducer = (
  state = initialState,
  action: MakePaymentActionParam | AddCardActionParam | DeleteCardActionParam
) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case DELETE_CARD:
      // const index = state.cards.findIndex(
      //   (obj) => action.payload === obj.token
      // );
      const newState = state.cards.filter(
        (card) => card.token !== action.payload
      );
      return {
        ...state,
        cards: [...newState],
      };

    case MAKE_PAYMENT:
      return state;

    default:
      return state;
  }
};

export default cardPaymentReducer;
