import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Chart from "./components/Chart";

export default function StatestiquesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>Progression du poids</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Mois Actuel</Text>
        <Chart />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tout les mois</Text>
        <Chart />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
  title: {
    color: "#FF647C",
    textAlign: "center",
    fontWeight: "bold",
  },
  card: {
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  cardTitle: { fontWeight: "bold", padding: 5 },
});
