import useSWR from "swr";
import { fetcher, tmdbAPI } from "../utils/config";
import MovieList from "../module/movie/MovieList";
import Heading from "../components/common/Heading";
import { Pagination } from "../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { FunnelIcon } from "@heroicons/react/16/solid";
import { MovieFilter } from "../module/filter/MovieFilter";

const MoviePage = () => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [genresQuery, setGenresQuery] = useState("");
    const { type, query } = useParams();

    useEffect(() => {
        document.title = `${type.charAt(0).toUpperCase() + type.slice(1)} ${
            query || ""
        } | Kuro Movie`;
    }, [query, type]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setPage(parseInt(searchParams.get("page")) || 1);
        setGenresQuery(
            parseInt(searchParams.get("movieGenres")) ||
                searchParams.get("seriesGenres") ||
                ""
        );
    }, [searchParams, page, genresQuery]);

    let movieRequestUrl =
        type === "search"
            ? tmdbAPI.getMovieSearch(query, page)
            : tmdbAPI.discoverMovie({
                  query: genresQuery ? `with_genres=${genresQuery}` : "",
                  type,
                  page,
              });
    const { data, error } = useSWR(movieRequestUrl, fetcher);

    if (error) return;

    const movies = data?.results || [];
    return (
        <div className="container my-20 px-5">
            <div className="flex items-center justify-between mb-8">
                <Heading variant="h2" verticalLine>
                    {type === "movie"
                        ? "Popular Movies"
                        : type === "tv"
                        ? "TV Series"
                        : `Search: ${query}`}
                </Heading>
                <MovieFilter
                    button={
                        <FunnelIcon className="w-6 h-6 cursor-pointer"></FunnelIcon>
                    }
                ></MovieFilter>
            </div>
            <MovieList movies={movies}></MovieList>
            <div className="flex itenms-center justify-center mt-5">
                <Pagination
                    totalPages={data?.total_pages || 0}
                    page={page}
                    setPage={setPage}
                ></Pagination>
            </div>
        </div>
    );
};

export default MoviePage;
