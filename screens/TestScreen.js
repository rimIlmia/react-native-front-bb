import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import HomePoidsScreen from "../screens/HomePoidsScreen";
const Tab = createMaterialTopTabNavigator();
export default function TestScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#00C48C",
        inactiveTintColor: "gray",
        pressOpacity: 0.5,

        indicatorStyle: {
          backgroundColor: "#00C48C",
        },
        labelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Poids",
        }}
      />
      <Tab.Screen
        name="HomePoids"
        component={HomePoidsScreen}
        options={{
          title: "Poids",
        }}
      />
    </Tab.Navigator>
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