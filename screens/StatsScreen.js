import * as React from "react";
import { StyleSheet, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HistoriqueScreen from "../screens/Stats/HistoriqueScreen";
import StatestiquesScreen from "../screens/Stats/StatestiquesScreen";
const Tab = createMaterialTopTabNavigator();
export default function StatsScreen() {
  return (
    <View style={styles.container}>
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
            textTransform: "none",
          },
        }}
      >
        <Tab.Screen
          name="StatestiquesScreen"
          component={StatestiquesScreen}
          options={{
            title: "Statestiques",
          }}
        />
        <Tab.Screen
          name="HistoriqueScreen"
          component={HistoriqueScreen}
          options={{
            title: "Historique",
          }}
        />
      </Tab.Navigator>
    </View>
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
StatsScreen.navigationOptions = {
  header: null,
};
