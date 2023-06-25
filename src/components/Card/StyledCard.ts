import styled from 'styled-components/native';

export const CardBox = styled.View`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  padding: 16px 40px;
  margin: 0 5px 20px 5px;
`;

export const CardNumber = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0 20px 0;
`;

export const CardNumberText = styled.Text`
  font-size: 22px;
  color: #808080;
`;

export const CardDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  letter-spacing: 1.038px;
  font-weight: 500;
`;

export const CardDetailTitle = styled.Text`
  color: #8f8f8f;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const CardDetailContent = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
