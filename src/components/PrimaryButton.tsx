import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  title: string;
  onPress: () => void;
};

const Button = styled.View`
  border-radius: 22.5px;
  background: #4ad8da;
  padding: 10px 0;
`;

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
`;

const PrimaryButton = ({ onPress, title }: Props) => {
  return (
    <Button>
      <TouchableOpacity onPress={onPress}>
        <ButtonText>{title}</ButtonText>
      </TouchableOpacity>
    </Button>
  );
};
export default PrimaryButton;
