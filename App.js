import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import AppIntroSlider from "react-native-app-intro-slider";
// const slides = [
//   {
//     key: "one",
//     title: "Title 1",
//     text: "Description.\nSay something cool",
//     image: require("./assets/1.jpg"),
//     backgroundColor: "#59b2ab",
//   },
//   {
//     key: "two",
//     title: "Title 2",
//     text: "Other cool stuff",
//     image: require("./assets/2.jpg"),
//     backgroundColor: "#febe29",
//   },
//   {
//     key: "three",
//     title: "Rocket guy",
//     text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
//     image: require("./assets/3.jpg"),
//     backgroundColor: "#22bcb5",
//   },
// ];
const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
