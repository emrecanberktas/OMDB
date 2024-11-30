import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

interface Movie {
  Title: string;
  Plot: string;
  Poster: string;
}

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
      const BASE_URL = "https://www.omdbapi.com/";
      const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
      setMovie(response.data);
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="500"
          image={movie?.Poster}
          alt={movie?.Title}
        />
        <CardContent>
          <Typography variant="h5">{movie?.Title}</Typography>
          <Typography>{movie?.Plot}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MovieDetailsPage;
