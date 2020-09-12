import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function ChartScreen() {
  return (
    <View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={Dimensions.get("window").height / 3}
        yAxisLabel=""
        yAxisSuffix="kg"
        yAxisInterval={1} // optional, defaults to 1
        withInnerLines={false}
        chartConfig={{
          backgroundColor: "red",
          backgroundGradientFromOpacity: 1,
          backgroundGradientToOpacity: 0.5,
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(68, 189, 154, 0.8)`,
          labelColor: (opacity = 1) => `rgba(153,153,153, ${opacity})`,
          style: {},
          propsForDots: {
            r: "3",
            strokeWidth: "1",
            stroke: "gray",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
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
