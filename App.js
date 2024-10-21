import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import das telas
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import FinanceDashboard from './src/screens/FinanceDashboard';
import FreightScreen from './src/screens/FreightScreen';
import ExpenseScreen from './src/screens/ExpenseScreen';
import RevenueScreen from './src/screens/RevenueScreen';
import SupplyScreen from './src/screens/SupplyScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Aqui são chamadas todas as telas do app, quando usarmos o Navigator, é através do nome que o fluxo de navegação acontecerá*/}
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

export default App;
