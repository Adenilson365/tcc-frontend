import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerRoutes from './drawer.routes';

// Import das telas
import FreightScreen from '../screens/FreightScreen';
import ExpenseScreen from '../screens/ExpenseScreen';
import RevenueScreen from '../screens/RevenueScreen';
import SupplyScreen from '../screens/SupplyScreen';
import FinanceDashboard from '../screens/FinanceDashboard';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
      <Stack.Navigator initialRouteName="FinanceDashboard">
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
