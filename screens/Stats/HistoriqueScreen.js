import * as React from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { Picker } from "@react-native-community/picker";
import Table from "./components/Table";

export default function HistoriqueScreen() {
  const data = {
    title: "Historique de votre poids",
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    console.log("isEnabled", isEnabled);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
        <Text
          style={{
            color: isEnabled == false ? "gray" : "#00C48C",
            fontWeight: "bold",
          }}
        >
          Mesure
        </Text>
        <Switch
          style={{ marginHorizontal: 4 }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "gray" : "#00C48C"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={!isEnabled}
        />
        <Text
          style={{
            color: isEnabled == true ? "gray" : "#00C48C",
            fontWeight: "bold",
          }}
        >
          Poids
        </Text>
      </View>

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
