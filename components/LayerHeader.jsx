import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

function LayerHeader({ children, layerFolderOpen, handleLayerFolderOpen }) {
  return (
    <View style={styles.container}>
      <View style={[styles.header, layerFolderOpen ? styles.headerOpen : null]}>
        <View style={styles.headerContent}>
          <Svg
            style={styles.icon}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <Path d="M12 2L2 12h3v7h6v-5h2v5h6v-7h3L12 2z" />
          </Svg>
          <Text style={styles.headerText}>Layers</Text>
        </View>
        <TouchableOpacity onPress={handleLayerFolderOpen}>
          {layerFolderOpen ? (
            <Svg
              style={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <Path d="M6 18L18 6M6 6l12 12" />
            </Svg>
          ) : (
            <Svg
              style={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <Path d="M4 6h16M4 12h16M4 18h16" />
            </Svg>
          )}
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 16,
    borderRadius: 10,
    width: "80%",
    maxWidth: 320,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0,
  },
  headerOpen: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LayerHeader;
