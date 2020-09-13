import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppIntroSlider from "react-native-app-intro-slider";
import { useState } from "react";

export default function IntroScreen() {
  const [selectedValue, setSelectedValue] = useState("Janvier");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>bb</Text>
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
