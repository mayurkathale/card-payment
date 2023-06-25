import { Pressable } from 'react-native';

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

const Button = ({ onPress, children }: Props) => {
  return <Pressable onPress={onPress}>{children}</Pressable>;
};
export default Button;
