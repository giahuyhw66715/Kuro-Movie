import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";

const MovieGenreButton = ({ children }) => {
    return <Button size="sm">{children}</Button>;
};

MovieGenreButton.propTypes = {
    children: PropTypes.node,
};

export default MovieGenreButton;
