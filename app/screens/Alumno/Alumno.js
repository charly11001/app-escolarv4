import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Alumno() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Alumnos</Text>

      <View style={styles.viewBtn}>
        <Button
          title="Agregar alumno"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("alumnos-add")}
        />
      </View>

      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  btnAddAlumno: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%"
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});

const list = [
  {
    title: "Alumno 1",
    icon: "account"
  },
  {
    title: "Alumno 2",
    icon: "account-outline"
  }
];
