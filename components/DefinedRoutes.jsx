import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MoviesList from "./MoviesList";
import Home from "./Home";
import MyMap from "./MyMap";
import Login from "./Login";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="/"
        component={Home}
        options={{ title: "Home " }} // Optionally hide the header
      />
      <Stack.Screen
        name="MoviesList"
        component={MoviesList}
        options={{ title: "Movie Screen" }} // Optionally hide the header
      />
      <Stack.Screen
        name="map"
        component={MyMap}
        options={{ title: "Map Screen" }} // Optionally set a screen title
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Login Screen" }}
      />
    </Stack.Navigator>
  );
}

function DefinedRoutes() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default DefinedRoutes;
