import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/views/Login/Login';
import { ProductScreen } from './src/views/Products/Products';
import useAuth from './src/viewsmodels/AuthViewModel';

const Stack = createNativeStackNavigator();

const App = () => {
  const isAuthenticated = useAuth();
  console.log('isAuthenticated')
  console.log(isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='ProductList' component={ProductScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
