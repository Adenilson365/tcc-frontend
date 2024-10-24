import React, {useContext} from "react";
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import { AuthContext } from "../config/auth";
//import screens
import FinanceDashboard from "../screens/FinanceDashboard";
import UserInfoScreen from "../screens/UserInforScreen";

const Drawer = createDrawerNavigator();

//inicio

function CustomDrawerContent(props) {
  const { logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
}



//fim
export default function DrawerRoutes() {
  const { logout } = useContext(AuthContext);
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#fff',
        width: 240,
      },
      drawerActiveTintColor: '#4CAF50',
      drawerInactiveTintColor: '#black',
    }}
    >
      <Drawer.Screen name="Home" component={FinanceDashboard} />
      <Drawer.Screen name="Perfil" component={UserInfoScreen} />


    </Drawer.Navigator>
  );
}