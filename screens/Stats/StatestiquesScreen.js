import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Chart from "./components/Chart";
import { Picker } from "@react-native-community/picker";

import { useState } from "react";

export default function StatestiquesScreen() {
  const [selectedValue, setSelectedValue] = useState("Janvier");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>Progression du poids</Text>
      <View style={styles.card}>
        <Picker
          selectedValue={selectedValue}
          style={{
            height: 30,
            width: 150,

            backgroundColor: "#fafafa",
            borderBottomColor: "#FF647C",
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomWidth: 2,
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
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
    margin: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  cardTitle: { fontWeight: "bold", padding: 5 },
});
