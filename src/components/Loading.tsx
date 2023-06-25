import { ActivityIndicator } from 'react-native';
import { CenteredScreen } from '../styled';

const Loading = () => {
  return (
    <CenteredScreen>
      <ActivityIndicator size="large" color="#4ad8da" />
    </CenteredScreen>
  );
};
export default Loading;
