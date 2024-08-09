import PropTypes from "prop-types";
import { Button, Typography } from "@material-tailwind/react";
import { tmdbAPI } from "../../utils/config";
import { StarIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

const CarouselItem = ({ movie }) => {
    return (
        <div className="relative h-full w-full">
            <img
                src={tmdbAPI.imageOriginal(movie.poster_path)}
                alt={movie.title}
                className="h-[400px] lg:h-full w-full max-h-[650px] object-cover"
            />
            <div className="absolute inset-0 grid h-[400px] lg:h-full w-full items-center lg:items-end bg-black/75 pl-14 pt-10 lg:pl-0 lg:pt-0">
                <div className="w-full lg:w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-5 text-3xl md:text-4xl lg:text-5xl"
                        data-aos="fade-up"
                    >
                        {movie.title}
                    </Typography>
                    <div className="flex items-center gap-x-3 mb-3 lg:hidden">
                        <div className="flex items-center gap-x-2">
                            <StarIcon className="w-4 h-4 text-yellow-400"></StarIcon>
                            <Typography className="text-base font-bold text-yellow-400">
                                {movie?.vote_average.toFixed(1)}
                            </Typography>
                        </div>
                        <Typography color="gray" variant="small">
                            ({movie?.vote_count} ratings)
                        </Typography>
                        <span>|</span>
                        <Typography className="overflow-text text-base font-bold">
                            {movie?.release_date?.split("-")[0]}
                        </Typography>
                    </div>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-5 opacity-80 hidden lg:block"
                        data-aos="fade-left"
                    >
                        {movie.overview}
                    </Typography>
                    <div className="flex gap-2">
                        <NavLink to={`/movie/${movie?.id}/${movie?.title}`}>
                            <Button
                                size="lg"
                                color="white"
                                data-aos="fade-down"
                            >
                                Watch Now
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.any,
        overview: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string,
        vote_average: PropTypes.number,
        vote_count: PropTypes.any,
    }),
};

export default CarouselItem;
