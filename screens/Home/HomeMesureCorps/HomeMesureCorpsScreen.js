import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, TouchableHighlight, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ItemMesureCorps from "./components/ItemMesureCorps";

export default function HomeMesureCorpsScreen() {
  const data = {
    titre: "Hanche",
    depart: 112,
    actuel: 72,
    gray: true,
  };
  const data1 = {
    titre: "Hanche",
    depart: 112,
    actuel: 172,
    gray: false,
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ItemMesureCorps data={data} />
      <ItemMesureCorps data={data1} />
      <ItemMesureCorps data={data} />
      <ItemMesureCorps data={data1} />
      <ItemMesureCorps data={data1} />
      <TouchableHighlight
        style={[styles.btnGreen, { marginHorizontal: 40, marginVertical: 10 }]}
        onPress={() => Alert.alert("You tapped the Decrypt button!")}
        underlayColor="#fff"
      >
        <Text style={[styles.btnGreenText]}>Actualiser mes mesures</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  btnGreen: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 20,
    backgroundColor: "#00C48C",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnGreenText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
