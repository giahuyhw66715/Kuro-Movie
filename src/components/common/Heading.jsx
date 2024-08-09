import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

const Heading = ({
    className,
    variant = "h3",
    verticalLine = false,
    children,
}) => {
    return (
        <Typography
            variant={variant}
            className={`text-orange ${className} ${
                verticalLine ? "border-l-4 border-orange pl-4" : ""
            }`}
            data-aos="fade-up"
        >
            {children}
        </Typography>
    );
};

Heading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.string,
    verticalLine: PropTypes.bool,
};

export default Heading;
