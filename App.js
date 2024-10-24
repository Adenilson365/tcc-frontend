import React from 'react';
import AuthProvider from './src/config/auth';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      
    </AuthProvider>
  );
};

export default App;