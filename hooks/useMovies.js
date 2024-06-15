import React, { useEffect, useState } from "react";
import { getMovies } from "../services/api.services"; // Adjust the import path as needed for your API service

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const settingMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies(); // Assuming getMovies is an async function fetching movie data
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false); // Ensure loading state is set to false on error
      }
    };

    settingMovies();

    // Clean-up function (optional)
    return () => {
      // Any clean-up code if needed
    };
  }, []); // Empty dependency array means this effect runs only once

  return [isLoading, movies];
}
