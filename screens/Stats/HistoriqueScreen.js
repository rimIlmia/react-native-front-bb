import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { Picker } from "@react-native-community/picker";
import Table from "./components/Table";

export default function HistoriqueScreen() {
  const data = {
    title: "Historique de votre poids",
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>Historique</Text>
      <Table data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
});
