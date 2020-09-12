import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { color } from "react-native-reanimated";

export default function ItemMesureCorps({ data }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
        }}
      >
        <View
          style={[
            {
              backgroundColor: data.gray ? "#999999" : "#FF647C",
            },
            styles.circle,
          ]}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {data.titre}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[{ color: "#999999" }, styles.title]}>Départ</Text>
        <View>
          <Text>{data.depart}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[{ color: "#00C48C" }, styles.title]}>Actuel</Text>
        <View>
          <Text>{data.actuel}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[{ color: "#FF647C" }, styles.title]}>Difference</Text>
        <View>
          <Text
            style={{ color: data.depart - data.actuel < 0 ? "red" : "black" }}
          >
            {data.depart - data.actuel}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    marginHorizontal: 5,
    marginVertical: 3,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  circle: {
    margin: 5,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    paddingTop: 15,
  },
  title: {
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 10,
  },
});
