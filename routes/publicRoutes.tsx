import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SingUpScreen from '../screens/SingupScreen';

const Stack = createNativeStackNavigator();

export function PublicStack() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SingUp" component={SingUpScreen} />

      </Stack.Navigator>
    );
  }