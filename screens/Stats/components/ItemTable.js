import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ItemTable({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text
          style={{
            flex: 1,
            color: "black",
            fontWeight: "bold",
          }}
        >
          {data.actuel}
        </Text>
        <Text
          style={{
            flex: 1,
            fontWeight: "bold",
            color: data.actuel - data.precedent > 0 ? "orange" : "black",
          }}
        >
          {data.precedent - data.actuel}
        </Text>
        <Text
          style={{
            flex: 1,
            color: "black",
            fontWeight: "bold",
          }}
        >
          {data.date}
        </Text>
      </View>
      <View style={styles.hr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
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
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hr: {
    borderWidth: 0.5,
    borderColor: "#E5E5E5",
    marginVertical: 5,
    width: "100%",
  },
});
