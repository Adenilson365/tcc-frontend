import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../config/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';





const Routes = () => {
  const Stack = createStackNavigator();
  const { signed } = useContext(AuthContext);
  console.log(signed);
  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
};

export default Routes;
