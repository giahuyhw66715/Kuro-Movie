import PropTypes from "prop-types";
import { MovieItem } from "./MovieItem";
import { MovieItemSkeleton } from "../../components/loading/MovieItemSkeleton";
import { Fragment } from "react";

const MovieList = ({ isLoading, movies }) => {
    return (
        <div
            className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
            data-aos="fade-up"
        >
            {isLoading && (
                <Fragment>
                    <MovieItemSkeleton></MovieItemSkeleton>
                    <MovieItemSkeleton></MovieItemSkeleton>
                    <MovieItemSkeleton></MovieItemSkeleton>
                    <MovieItemSkeleton></MovieItemSkeleton>
                    <MovieItemSkeleton></MovieItemSkeleton>
                </Fragment>
            )}
            {movies.length > 0 &&
                movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie}></MovieItem>
                ))}
        </div>
    );
};

MovieList.propTypes = {
    isLoading: PropTypes.bool,
    movies: PropTypes.array,
};

export default MovieList;
