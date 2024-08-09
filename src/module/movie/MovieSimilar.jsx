import MovieList from "./MovieList";
import { fetcher, tmdbAPI } from "../../utils/config";
import useSWR from "swr";
import Heading from "../../components/common/Heading";
import { useParams } from "react-router-dom";

const MovieSimilar = () => {
    const { id, type } = useParams();
    const { data, error } = useSWR(
        tmdbAPI.getMovieMeta(id, "similar", type),
        fetcher
    );

    if (error) return;
    const movies = data?.results.slice(0, 10) || [];
    return (
        <div>
            <Heading verticalLine variant="h2" className="mb-5">
                Similar {type === "movie" ? "Movies" : "TV Series"}
            </Heading>
            <MovieList movies={movies}></MovieList>
        </div>
    );
};

export default MovieSimilar;
