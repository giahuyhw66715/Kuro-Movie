import { useParams, useSearchParams } from "react-router-dom";
import { fetcher, tmdbAPI } from "../utils/config";
import useSWR from "swr";
import MovieVideo from "../module/movie/MovieVideo";
import MovieInfo from "../module/movie/MovieInfo";
import MovieSimilar from "../module/movie/MovieSimilar";
import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import Heading from "../components/common/Heading";
import ReviewCardList from "../module/review/ReviewCardList";

const MovieDetailPage = () => {
    const { id, type } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieDetails(id, type), fetcher);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        document.title = `Watch ${
            data?.title || data?.name || data?.original_name
        } | Kuro Movie`;
    }, [data, id, type]);
    if (error) return;

    const currentSeason = searchParams.get("season") || 1;
    const currentEpisode = searchParams.get("episode") || 1;
    const numEpisodes =
        data?.seasons?.filter(
            (season) => season.season_number == currentSeason
        )[0]?.episode_count || 0;

    return (
        <div className="container my-20">
            <MovieVideo></MovieVideo>
            {type === "tv" && data?.seasons && data?.seasons.length > 0 && (
                <div className="my-10" data-aos="fade-up">
                    <Menu>
                        <MenuHandler>
                            <Button
                                variant="outlined"
                                color="white"
                                className="flex items-start justify-between gap-x-2 capitalize text-sm"
                            >
                                Season {currentSeason}
                                <ChevronDownIcon className="w-4 h-4" />
                            </Button>
                        </MenuHandler>
                        <MenuList className="h-40 px-0">
                            {data?.seasons.map((season) => (
                                <MenuItem
                                    key={season?.id}
                                    onClick={() => {
                                        setSearchParams({
                                            season: season?.season_number,
                                            episode: 1,
                                        });
                                    }}
                                >
                                    {season?.name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    <div
                        className="grid grid-cols-10 gap-3 mt-8"
                        data-aos="fade-up"
                    >
                        {Array.from(
                            { length: numEpisodes },
                            (_, i) => i + 1
                        ).map((episode) => (
                            <Button
                                key={episode}
                                className="capitalize"
                                color={
                                    currentEpisode == episode ? "red" : "white"
                                }
                                onClick={() => {
                                    setSearchParams({
                                        season: currentSeason,
                                        episode: episode,
                                    });
                                }}
                            >
                                Episode {episode}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
            <MovieInfo movie={data}></MovieInfo>
            <div className="mt-10">
                <Heading verticalLine className="mb-5">
                    Review
                </Heading>
                <ReviewCardList type={type} movieId={id}></ReviewCardList>
            </div>
            <div className="mt-10">
                <MovieSimilar></MovieSimilar>
            </div>
        </div>
    );
};

export default MovieDetailPage;
