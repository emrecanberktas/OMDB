import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchMovies } from "../redux/slices/moviesSlice";
import { TextField, Button, Box } from "@mui/material";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(fetchMovies({ query, page: 1, perPage: 10 }));
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2} mb={4}>
      <TextField
        label="Search a Film"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        placeholder="Which Film You Want to Search"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        disabled={!query.trim()}
      >
        Ara
      </Button>
    </Box>
  );
};

export default SearchBar;
