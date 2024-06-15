import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import DefinedRoutes from "./components/DefinedRoutes";

export default function App() {
  return <DefinedRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
