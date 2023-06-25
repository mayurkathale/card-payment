import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreenNavigationProp, StackNavigatorParamList } from '../types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AddCardScreen from '../screens/AddCardScreen/AddCardScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../components/Button';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const AddButton = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <Button onPress={() => navigation.navigate('AddCard')}>
      <Ionicons name="add" size={32} />
    </Button>
  );
};

const BackButton = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <Button onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back-outline" size={32} />
    </Button>
  );
};

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          contentStyle: { backgroundColor: '#ffffff' },
          headerLeft: () => <BackButton />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Cards',
            headerRight: () => <AddButton />,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCardScreen}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
