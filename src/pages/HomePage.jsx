import { useEffect } from "react";
import { HomeBanner } from "../module/home/HomeBanner";
import HomeMovieSlider from "../module/home/HomeMovieSlider";

const HomePage = () => {
    useEffect(() => {
        document.title = "Home | Kuro Movie";
    }, []);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="container my-20 px-5">
                <HomeMovieSlider
                    title="Popular Movies"
                    type="popular"
                ></HomeMovieSlider>
                <HomeMovieSlider
                    title="Popular TV Series"
                    item="tv"
                    type="popular"
                ></HomeMovieSlider>
                <HomeMovieSlider
                    title="Recommended Movies"
                    type="top_rated"
                ></HomeMovieSlider>
                <HomeMovieSlider
                    title="Recommended TV Series"
                    item="tv"
                    type="top_rated"
                ></HomeMovieSlider>
                <HomeMovieSlider
                    title="Coming Soon"
                    type="upcoming"
                ></HomeMovieSlider>
            </div>
        </div>
    );
};

export default HomePage;
