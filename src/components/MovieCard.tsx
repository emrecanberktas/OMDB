import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card sx={{ width: 250, margin: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        alt={movie.Title}
        height="300"
        image={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
      />
      <CardContent>
        <Typography variant="h6" component="div" noWrap>
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={`https://www.imdb.com/title/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          IMDb'ye Git
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
