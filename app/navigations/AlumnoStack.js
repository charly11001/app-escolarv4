import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Alumnos from "../screens/Alumno/Alumno";
import AlumnosInfo from "../screens/Alumno/AlumnoInfo";
import AlumnosAdd from "../screens/Alumno/AlumnoAdd";

const Stack = createStackNavigator();

export default function AlumnoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="maestros"
        component={Alumnos}
        options={{ title: "Alumnos" }}
      />
      <Stack.Screen
        name="alumnos-info"
        component={AlumnosInfo}
        options={{ title: "Detalle de los alumnos" }}
      />
      <Stack.Screen
        name="alumnos-add"
        component={AlumnosAdd}
        options={{ title: "Agregar alumno" }}
      />
    </Stack.Navigator>
  );
}
