import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import HomeScreen from "../screens/HomeScreen";
import StatsScreen from "../screens/StatsScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import ChartScreen from "../screens/ChartScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerTintColor: "#FF647C",
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: "#FF647C",
        inactiveTintColor: "#999999",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Accueil",
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name="home"
              size={25}
              color={focused ? "#FF647C" : "#999999"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Statestiques"
        component={StatsScreen}
        options={{
          title: "Statestiques",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bar-chart"
              size={25}
              color={focused ? "#FF647C" : "#999999"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chart"
        component={ChartScreen}
        options={{
          title: "chart",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="user"
              size={25}
              color={focused ? "#FF647C" : "#999999"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
    case "Statestiques":
      return "Bonjour Rim";
    case "Test":
      return "Bonjour Tests";
  }
}
