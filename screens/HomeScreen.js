import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeMesureCorpsScreen from "../screens/Home/HomeMesureCorps/HomeMesureCorpsScreen";
import HomePoidsScreen from "../screens/Home/HomePoidsScreen";
const Tab = createMaterialTopTabNavigator();
export default function HomeScreen() {
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
          name="HomePoids"
          component={HomePoidsScreen}
          options={{
            title: "Poids",
          }}
        />
        <Tab.Screen
          name="HomeMesureCorpsScreen "
          component={HomeMesureCorpsScreen}
          options={{
            title: "Mesures corps",
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
