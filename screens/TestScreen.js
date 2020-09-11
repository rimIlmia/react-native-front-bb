import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import HomePoidsScreen from "../screens/HomePoidsScreen";
const Tab = createMaterialTopTabNavigator();
export default function TestScreen() {
  return (
    <View>
      <Text>bb</Text>
    </View>
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
});
