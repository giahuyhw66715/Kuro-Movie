import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { tmdbAPI } from "../../utils/config";
import { useRef } from "react";

export function ReviewCard({ review }) {
    const contentRef = useRef(null);

    const handleViewFullReview = () => {
        if (contentRef.current) {
            contentRef.current.classList.toggle("overflow-text");
        }
    };
    return (
        <Card
            color="white"
            shadow={false}
            className="w-full p-5 cursor-pointer"
            onClick={handleViewFullReview}
        >
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-5"
            >
                <Avatar
                    size="lg"
                    variant="circular"
                    src={
                        review?.author_details?.avatar_path !== null
                            ? tmdbAPI.imageOriginal(
                                  review?.author_details?.avatar_path
                              )
                            : "https://cpng.pikpng.com/pngl/s/80-805523_default-avatar-svg-png-icon-free-download-264157.png"
                    }
                    alt="Avatar"
                />
                <div className="flex items-center justify-between w-full">
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="max-w-52"
                    >
                        {review?.author}
                    </Typography>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                    >
                        {review?.updated_at.substring(0, 10)}
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <Typography className="overflow-text" ref={contentRef}>
                    {review?.content}
                </Typography>
            </CardBody>
        </Card>
    );
}

ReviewCard.propTypes = {
    review: PropTypes.any,
};
