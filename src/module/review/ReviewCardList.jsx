import PropTypes from "prop-types";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../utils/config";
import { ReviewCard } from "./ReviewCard";

const ReviewCardList = ({ type, movieId }) => {
    const { data, error } = useSWR(
        tmdbAPI.getMovieReviews(type, movieId),
        fetcher
    );
    if (error) return null;
    const reviews = data?.results || [];
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start"
            data-aos="fade-up"
        >
            {reviews.length > 0 &&
                reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
        </div>
    );
};

ReviewCardList.propTypes = {
    movieId: PropTypes.string,
    type: PropTypes.string,
};

export default ReviewCardList;
