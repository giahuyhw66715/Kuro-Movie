import PropTypes from "prop-types";
import { StarIcon } from "@heroicons/react/16/solid";
import { Typography } from "@material-tailwind/react";
import MovieGenreButton from "./MovieGenreButton";
import MovieCredit from "./MovieCredit";

const MovieInfo = ({ movie }) => {
    if (!movie) return;
    const releaseDate = movie?.release_date || movie?.first_air_date;

    return (
        <div className="mt-10 flex flex-col gap-y-3 my-5">
            <Typography variant="h3" color="white" data-aos="fade-up">
                {movie?.title || movie?.name}
            </Typography>
            <div className="flex items-center gap-x-3" data-aos="fade-up">
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
                    {releaseDate?.split("-")[0]}
                </Typography>
            </div>
            <div className="flex items-center gap-x-2" data-aos="fade-up">
                {movie?.genres?.length > 0 &&
                    movie?.genres?.map((genre) => (
                        <MovieGenreButton key={genre?.id}>
                            {genre?.name}
                        </MovieGenreButton>
                    ))}
            </div>
            <MovieCredit></MovieCredit>
            <Typography className="mt-2" data-aos="fade-up">
                {movie?.overview}
            </Typography>
        </div>
    );
};

MovieInfo.propTypes = {
    movie: PropTypes.object,
};

export default MovieInfo;
