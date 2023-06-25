import NoCardNotice from '../../components/NoCardNotice';
import Card from '../../components/Card';
import {
  Card as CardType,
  CreateTokenResponseError,
  StoreState,
} from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, ScrollView } from 'react-native';
import { CenteredScreen, Screen } from '../../styled';
import Omise from 'omise-react-native';
import { useState } from 'react';
import { deleteCard } from '../../store/actions';
import Loading from '../../components/Loading';

Omise.config(
  'pkey_test_5rrcize7zvkrk3nvj6b',
  'skey_test_5rrcizzz5sxtu1vqad0',
  '2017-11-12'
);

const HomeScreen = (): JSX.Element => {
  const cards = useSelector((state: StoreState) => state.cards.cards);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handlePayment = async (token: string): Promise<void> => {
    setLoading(true);
    try {
      const data = await Omise.createCharge({
        description: 'Test Payment',
        amount: 500100,
        currency: 'thb',
        capture: true,
        card: token,
      });
      if (data.paid) {
        alert('Received Payment!');
      } else {
        alert('Received Payment!');
      }
      dispatch(deleteCard(token));
    } catch (error) {
      const err = (await error) as CreateTokenResponseError;
      alert('Payment declined' + err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loading />}
      {!loading && cards.length > 0 && (
        <Screen>
          <ScrollView>
            {cards.map((card: CardType) => (
              <Card
                card={card}
                handlePayment={handlePayment}
                key={card.token}
              />
            ))}
          </ScrollView>
        </Screen>
      )}
      {!loading && cards.length === 0 && (
        <CenteredScreen>
          <NoCardNotice />
        </CenteredScreen>
      )}
    </>
  );
};
export default HomeScreen;
