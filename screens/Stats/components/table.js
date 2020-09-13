import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ItemTable from "./ItemTable";

export default function Table({ data }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>{data.title}</Text>
      <ItemTable
        data={{ actuel: 75, precedent: 80, date: "25/01/2020" }}
      ></ItemTable>
      <ItemTable
        data={{ actuel: 80, precedent: 80, date: "25/03/2020" }}
      ></ItemTable>
      <ItemTable
        data={{ actuel: 81, precedent: 80, date: "25/04/2020" }}
      ></ItemTable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    height: 40,
    paddingBottom: 15,
  },
  contentContainer: {
    paddingTop: 15,
  },
  title: {
    color: "#999999",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
});
