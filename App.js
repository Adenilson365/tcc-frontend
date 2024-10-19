import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import FinanceDashboard from './src/screens/FinanceDashboard';
import FreightScreen from './src/screens/FreightScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Definindo as rotas */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Esconder o header para a tela de Login
        />
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroScreen} 
          options={{ headerShown: false }} // Esconder o header para a tela de Cadastro
        />
        <Stack.Screen 
          name="FinanceDashboard" 
          component={FinanceDashboard} 
          options={{ headerShown: false }} // Esconder o header para a tela do Dashboard Financeiro
        />
        <Stack.Screen 
          name="FreightScreen" 
          component={FreightScreen} 
          options={{ headerShown: false }} // Esconder o header para a tela de Fretes
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
