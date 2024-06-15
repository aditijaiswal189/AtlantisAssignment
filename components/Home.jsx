import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useAuthContext } from "../context/AuthContext";

function Home({ navigation }) {
  const { signOut } = useAuthContext();
  return (
    <>
      <View style={styles.logoutContainer}>
        <Button title="Logout" onPress={() => signOut()} />
      </View>
      <View style={styles.container}>
        <Button
          title="Go to Movies List"
          onPress={() => navigation.navigate("MoviesList")}
        />
        <Button
          style={styles.button}
          title="Go to Map"
          onPress={() => navigation.navigate("map")}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,

    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
  },
  logoutContainer: {
    position: "absolute",
    top: 10,
    right: 20,
    width: 100,
  },
});
export default Home;
