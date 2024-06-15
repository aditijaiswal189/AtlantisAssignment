// import React from "react";
// import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
// import { useMovies } from "../hooks/useMovies";
// import LoadingScreen from "./LoadingScreen";
// import MovieItem from "./MovieItem";

// function MoviesList() {
//   const [isLoading, movies] = useMovies();

//   if (isLoading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <View style={styles.container}>
//       {movies.map((item) => (
//         <MovieItem movieData={item} key={item.id} />
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//   },
//   contentContainer: {
//     paddingBottom: 16,
//   },
// });

// export default MoviesList;
import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useMovies } from "../hooks/useMovies";
import LoadingScreen from "./LoadingScreen";
import MovieItem from "./MovieItem";

function MoviesList() {
  const [isLoading, movies] = useMovies();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Movies List</Text>
      </View>

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieItem movieData={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  contentContainer: {
    paddingBottom: 16,
  },
  textStyle: {
    padding: 10,
    marginTop: 30,
    backgroundColor: "#ff0",
    textAlign: "center",
    borderRadius: 20,
  },
});

export default MoviesList;
