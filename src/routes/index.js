import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerRoutes from './drawer.routes';

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
          <Stack.Screen 
          name="FinanceDashboard" 
          component={DrawerRoutes} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
};

export default AppRoutes;
