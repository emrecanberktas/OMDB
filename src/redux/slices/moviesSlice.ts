import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../types";
import axios from "axios";

interface MoviesState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  totalResults: number;
}

const initialState: MoviesState = {
  movies: [],
  status: "idle",
  totalResults: 0,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({
    query,
    page,
    perPage,
  }: {
    query: string;
    page: number;
    perPage: number;
  }) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&s=${query}&page=${page}&r=json`
    );
    const data = response.data;
    const movies: Movie[] = data.Search.map((movie: any) => ({
      Title: movie.Title,
      Year: movie.Year,
      imdbID: movie.imdbID,
      Poster: movie.Poster,
    }));

    return {
      movies,
      totalResults: parseInt(data.totalResults, 10),
    };
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload.movies;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default moviesSlice.reducer;
