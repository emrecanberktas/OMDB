import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Movie } from "../types";

interface Props {
  movies: Movie[];
}

const MovieTable: React.FC<Props> = ({ movies }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Release Date</TableCell>
            <TableCell>IMDb ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.imdbID}>
              <TableCell>{movie.Title}</TableCell>
              <TableCell>{movie.Year}</TableCell>
              <TableCell>{movie.imdbID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MovieTable;
