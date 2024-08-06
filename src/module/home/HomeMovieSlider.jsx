import PropTypes from "prop-types";
import Heading from "../../components/common/Heading";
import MovieListSlider from "../movie/MovieListSlider";

const HomeMovieSlider = ({ title, item, type }) => {
    return (
        <div className="mb-5">
            <div className="mb-8">
                <Heading verticalLine>{title}</Heading>
            </div>
            <MovieListSlider item={item} type={type}></MovieListSlider>
        </div>
    );
};

HomeMovieSlider.propTypes = {
    item: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
};

export default HomeMovieSlider;
