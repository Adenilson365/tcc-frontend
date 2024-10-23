import React from 'react';
import AuthProvider from './src/config/auth';
import AppRoutes from './src/routes'
import DrawerRoutes from './src/routes/drawer.routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      
    </AuthProvider>
  );
};

export default App;