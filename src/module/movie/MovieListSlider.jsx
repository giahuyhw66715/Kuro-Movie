import PropTypes from "prop-types";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../utils/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieItem } from "./MovieItem";
import { MovieItemSkeleton } from "../../components/loading/MovieItemSkeleton";

const MovieListSlider = ({ item, type = "popular" }) => {
    const { data, isLoading, error } = useSWR(
        tmdbAPI.getMovieList(type, item),
        fetcher
    );
    if (error) return;

    const movies = data?.results || [];
    return (
        <Swiper
            breakpoints={{
                576: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
                1280: { slidesPerView: 8 },
            }}
            spaceBetween={18}
            grabCursor
            slidesPerView={2}
        >
            {movies.length > 0 &&
                movies.map((movie) => (
                    <SwiperSlide
                        key={movie.id}
                        className="h-auto"
                        data-aos="fade-up"
                    >
                        {isLoading ? (
                            <MovieItemSkeleton slider></MovieItemSkeleton>
                        ) : (
                            <MovieItem movie={movie} slider></MovieItem>
                        )}
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

MovieListSlider.propTypes = {
    item: PropTypes.string,
    type: PropTypes.string,
};

export default MovieListSlider;
