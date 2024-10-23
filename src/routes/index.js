//Import das Bibliotecas
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import das telas
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import FinanceDashboard from '../screens/FinanceDashboard';
import FreightScreen from '../screens/FreightScreen';
import ExpenseScreen from '../screens/ExpenseScreen';
import RevenueScreen from '../screens/RevenueScreen';
import SupplyScreen from '../screens/SupplyScreen';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FinanceDashboard" 
          component={FinanceDashboard} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FreightScreen" 
          component={FreightScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ExpenseScreen" 
          component={ExpenseScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RevenueScreen" 
          component={RevenueScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SupplyScreen" 
          component={SupplyScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
