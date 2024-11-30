import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchMovies } from "../redux/slices/moviesSlice";
import MovieTable from "../components/MovieTable";
import { Container, Typography, Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, status, totalResults } = useSelector(
    (state: RootState) => state.movies
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  useEffect(() => {
    dispatch(
      fetchMovies({
        query: "Pokemon",
        page: currentPage,
        perPage: moviesPerPage,
      })
    );
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(totalResults / moviesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        List Of Film
      </Typography>
      <SearchBar />
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && <MovieTable movies={movies} />}
      {status === "failed" && <p>Something Went Wrong!</p>}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
