import React from "react";
import { View, Button, StyleSheet } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Movies List"
        onPress={() => navigation.navigate("MoviesList")}
      />
      <Button title="Go to Map" onPress={() => navigation.navigate("map")} />
      <Button
        title="Go to Login Page"
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
