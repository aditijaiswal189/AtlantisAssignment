import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MoviesList from "./MoviesList";
import Home from "./Home";
import MyMap from "./MyMap";
import Login from "./Login";
import AuthProvider, { useAuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function AppStack() {
  const { state } = useAuthContext();
  return (
    <Stack.Navigator>
      {state.isAuthenticated ? (
        <>
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
        </>
      ) : (
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

function DefinedRoutes() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default DefinedRoutes;
