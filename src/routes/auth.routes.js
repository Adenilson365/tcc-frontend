import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// Import das telas
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';


const Stack = createStackNavigator();

const AuthRoutes = () => {
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
      </Stack.Navigator>
  );
};

export default AuthRoutes;
