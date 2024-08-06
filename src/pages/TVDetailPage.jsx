import { useParams } from "react-router-dom";
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

const MovieDetailPage = () => {
    const { id, type } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieDetails(id, type), fetcher);

    if (error) return;
    return (
        <div className="container my-20">
            <MovieVideo></MovieVideo>
            {type === "tv" && data?.seasons && data?.seasons.length > 0 && (
                <div className="my-10">
                    <Menu>
                        <MenuHandler>
                            <Button
                                variant="outlined"
                                color="white"
                                className="flex items-start justify-between gap-x-2"
                            >
                                {data?.seasons[0]?.name}
                                <ChevronDownIcon className="w-4 h-4" />
                            </Button>
                        </MenuHandler>
                        <MenuList className="h-40 px-0">
                            {data?.seasons.map((season) => (
                                <MenuItem key={season?.id}>
                                    {season?.name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </div>
            )}
            <MovieInfo movie={data}></MovieInfo>
            <div className="mt-10">
                <MovieSimilar></MovieSimilar>
            </div>
        </div>
    );
};

export default MovieDetailPage;
