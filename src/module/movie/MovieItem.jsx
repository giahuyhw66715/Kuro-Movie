import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { tmdbAPI } from "../../utils/config";
import { StarIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import slugify from "slugify";

export function MovieItem({ movie, slider = false }) {
    if (!movie) return;
    const releaseDate = movie?.release_date || movie?.first_air_date;
    const type = movie?.media_type || movie?.release_date ? "movie" : "tv";

    return (
        <Card className="overflow-hidden h-full bg-transparent">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none cursor-pointer"
            >
                <NavLink
                    to={`/${type}/${movie?.id}/${slugify(
                        movie?.title || movie?.name,
                        {
                            lower: true,
                        }
                    )}${type === "movie" ? "" : `?season=1&episode=1`}`}
                >
                    <img
                        src={tmdbAPI.imageOriginal(
                            movie?.poster_path || movie?.backdrop_path
                        )}
                        alt={movie?.title}
                        className={`w-full ${
                            slider ? "lg:h-full" : "lg:h-[350px]"
                        } object-cover hover:scale-105 duration-300 transition-all`}
                    />
                </NavLink>
            </CardHeader>
            <CardBody className="px-1 pt-3">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-x-2">
                        <StarIcon className="w-4 h-4 text-yellow-400"></StarIcon>
                        <Typography className="overflow-text text-base font-bold">
                            {movie?.vote_average?.toFixed(1)}
                        </Typography>
                    </div>
                    <Typography className="overflow-text text-base font-bold">
                        {releaseDate?.split("-")[0]}
                    </Typography>
                </div>
                <Typography
                    variant="h6"
                    color="white"
                    className="overflow-text"
                >
                    {movie?.title || movie?.name}
                </Typography>
            </CardBody>
        </Card>
    );
}

MovieItem.propTypes = {
    movie: PropTypes.shape({
        backdrop_path: PropTypes.any,
        first_air_date: PropTypes.any,
        id: PropTypes.any,
        media_type: PropTypes.any,
        name: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.any,
        title: PropTypes.string,
        vote_average: PropTypes.number,
    }),
    slider: PropTypes.bool,
};
