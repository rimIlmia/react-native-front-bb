import * as React from "react";
import { StyleSheet, View, Text, Switch, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { Picker } from "react-native";
import Table from "./components/Table";

export default function HistoriqueScreen() {
  const data = {
    title: "Historique de votre poids",
  };
  const [selectedValue, setSelectedValue] = useState("Janvier");
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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignContent: "space-between",
          backgroundColor: "white",
          borderRadius: 15,
          borderWidth: 2,
          borderColor: "#E5E5E5",
          paddingHorizontal: 5,
          paddingVertical: 10,
          margin: 10,
        }}
      >
        <View style={{ flex: 1, paddingLeft: 10 }}>
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
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
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
      </View>
      <Table data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingTop: 15,
  },
});
