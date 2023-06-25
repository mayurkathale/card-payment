import { StatusBar } from 'expo-status-bar';
import StackNavigation from './src/navigation/StackNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
