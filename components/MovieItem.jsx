import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

function MovieItem({ movieData }) {
  const { movie, rating, imdb_url } = movieData;

  const openIMDbLink = () => {
    Linking.openURL(imdb_url);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={openIMDbLink}
      activeOpacity={0.8}
    >
      <View style={styles.textContainer}>
        <Text style={styles.movieTitle}>{movie}</Text>
        <Text style={styles.ratingText}>Rating: {rating}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.imdbButton}
          onPress={openIMDbLink}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>IMDb Link</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  ratingText: {
    fontSize: 16,
    color: "#666666",
    paddingTop: 8,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imdbButton: {
    backgroundColor: "#CCCCCC",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default MovieItem;
