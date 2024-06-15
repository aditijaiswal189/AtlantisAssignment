import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

function LayerButton({
  gurgaonShow,
  airportShow,
  handleAirport,
  handleGurgaon,
}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, styles.buttonMargin]}
        onPress={handleGurgaon}
      >
        <View style={styles.buttonContent}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.dash}>-</Text>
            <Svg
              style={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <Path d="M12 2L2 12h3v7h6v-5h2v5h6v-7h3L12 2z" />
            </Svg>
            <Text style={styles.buttonText}>Gurgaon</Text>
          </View>
          {gurgaonShow ? (
            <Svg
              style={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <Path d="M12 12l9-9m-9 0v18m0-18H3" />
            </Svg>
          ) : (
            <Svg
              style={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <Path d="M12 4v16m8-8H4" />
            </Svg>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAirport}>
        <View style={styles.buttonContent}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.dash}>-</Text>
            <Svg
              style={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <Path d="M12 2L2 12h3v7h6v-5h2v5h6v-7h3L12 2z" />
            </Svg>
            <Text style={styles.buttonText}>Airports</Text>
          </View>
          {airportShow ? (
            <Svg
              style={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <Path d="M12 12l9-9m-9 0v18m0-18H3" />
            </Svg>
          ) : (
            <Svg
              style={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <Path d="M12 4v16m8-8H4" />
            </Svg>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    width: "100%",
    backgroundColor: "#ececec",
    borderRadius: 8,
    alignItems: "flex-start",
    marginBottom: 8,
  },
  buttonMargin: {
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dash: {
    fontSize: 18,
    marginRight: 8,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LayerButton;
