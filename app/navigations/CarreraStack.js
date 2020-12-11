import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Carreras from "../screens/Carrera/Carrera";
import CarrerasInfo from "../screens/Carrera/CarreraInfo";
import CarrerasAdd from "../screens/Carrera/CarreraAdd";

const Stack = createStackNavigator();

export default function MaestroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="carreras"
        component={Carreras}
        options={{ title: "Carreras" }}
      />
      <Stack.Screen
        name="carreras-info"
        component={CarrerasInfo}
        options={{ title: "Detalle de carreras" }}
      />
      <Stack.Screen
        name="carreras-add"
        component={CarrerasAdd}
        options={{ title: "Agregar carrera" }}
      />
    </Stack.Navigator>
  );
}
