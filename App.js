import React from 'react';
import AuthProvider from './src/config/auth';
import AppRoutes from './src/routes'

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;