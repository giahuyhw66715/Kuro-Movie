import PropTypes from "prop-types";
import { MovieItem } from "./MovieItem";

const MovieList = ({ movies }) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {movies.length > 0 &&
                movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie}></MovieItem>
                ))}
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.any,
};

export default MovieList;
