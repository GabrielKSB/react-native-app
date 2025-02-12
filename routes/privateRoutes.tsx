import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListuserScreen from '../screens/ListuserScreen';

const Stack = createNativeStackNavigator();

export function PrivateStack() {
    return (
      <Stack.Navigator initialRouteName='ListUser' screenOptions={{headerShown: false}}>
        <Stack.Screen name="ListUser" component={ListuserScreen} />
      </Stack.Navigator>
    );
  }