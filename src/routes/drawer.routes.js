import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FinanceDashboard from "../screens/FinanceDashboard";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FinanceDashboard" component={FinanceDashboard} />
    </Drawer.Navigator>
  );
}