import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import FormTextInput from '../../components/FormTextInput';
import { Top, Bottom, Row, Column } from './StyledAddCardScreen';
import PrimaryButton from '../../components/PrimaryButton';
import { useRef, useState } from 'react';
import { CreateTokenResponse, CreateTokenResponseError } from '../../types';
import Omise from 'omise-react-native';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/actions';
import { CenteredScreen, SpacedBetweenScreen } from '../../styled';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading';

Omise.config(
  'pkey_test_5rrcize7zvkrk3nvj6b',
  'skey_test_5rrcizzz5sxtu1vqad0',
  '2017-11-12'
);

const bannerImage = require('../../../assets/secure_payment_3x.png');

const AddCardScreen = () => {
  const [number, setNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddCard = async () => {
    if (expiry.trim().length) {
      const [month, year] = expiry.replaceAll(' ', '').split('/');
      if (
        !isNaN(+month) &&
        !isNaN(+year) &&
        !isNaN(+code) &&
        number.trim().length > 0 &&
        name.trim().length &&
        code.trim().length === 3
      ) {
        setLoading(true);
        try {
          const response: CreateTokenResponse = await Omise.createToken({
            card: {
              name,
              city: 'Bangkok',
              postal_code: 10320,
              number,
              expiration_month: +month,
              expiration_year: 2000 + parseInt(year),
              security_code: code,
            },
          });
          dispatch(addCard({ ...response.card, token: response.id }));
          setName('');
          setNumber('');
          setCode('');
          setExpiry('');
          navigation.goBack();
        } catch (error: any) {
          const err = await error;
          alert(err.message);
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <SpacedBetweenScreen
          keyboardVerticalOffset={Platform.select({ ios: 100, android: 500 })}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Top>
            <FormTextInput
              label="ATM/Debit/Credit card number"
              placeholder={'0000 0000 0000 0000'}
              onChangeText={setNumber}
              value={number}
              numeric
            />
            <FormTextInput
              label="Name on Card"
              placeholder={'Your Name'}
              onChangeText={setName}
              value={name}
            />
            <Row>
              <Column>
                <FormTextInput
                  label="Expiry date"
                  placeholder={'MM / YY'}
                  onChangeText={setExpiry}
                  value={expiry}
                />
              </Column>
              <Column>
                <FormTextInput
                  label="CVV"
                  onChangeText={setCode}
                  value={code}
                  placeholder="000"
                  numeric
                />
              </Column>
            </Row>
            <View>
              <Image
                source={bannerImage}
                resizeMode="center"
                style={{ alignSelf: 'center' }}
              />
            </View>
          </Top>
          <Bottom>
            <PrimaryButton onPress={handleAddCard} title="Add Card" />
          </Bottom>
        </SpacedBetweenScreen>
      )}
    </>
  );
};
export default AddCardScreen;
