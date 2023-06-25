import { styled } from 'styled-components/native';

export const Screen = styled.SafeAreaView`
  margin: 20px 22px;
`;

export const CenteredScreen = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SpacedBetweenScreen = styled.KeyboardAvoidingView`
  justify-content: space-between;
  flex: 1;
  margin: 20px 22px;
`;
