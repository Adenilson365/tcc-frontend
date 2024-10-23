import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//import screens
import FinanceDashboard from "../screens/FinanceDashboard";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
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

    </Drawer.Navigator>
  );
}