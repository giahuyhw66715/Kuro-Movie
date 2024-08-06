import { Carousel } from "@material-tailwind/react";
import CarouselItem from "../../components/carousel/CarouselItem";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../utils/config";

export function HomeBanner() {
    const { data, error } = useSWR(
        tmdbAPI.getMovieList("popular", "movie"),
        fetcher
    );
    if (error) return;

    const movies = data?.results || [];

    return (
        <Carousel
            className="rounded-xl"
            autoplay
            loop
            navigation={({ setActiveIndex, activeIndex }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {movies.slice(0, 5).map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "w-8 bg-white"
                                    : "w-4 bg-white/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {movies.length > 0 &&
                movies
                    .slice(0, 5)
                    .map((movie) => (
                        <CarouselItem
                            key={movie.id}
                            movie={movie}
                        ></CarouselItem>
                    ))}
        </Carousel>
    );
}
