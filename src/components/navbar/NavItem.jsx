import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavItem = ({ url = "#", children }) => {
    return (
        <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-semibold"
        >
            <NavLink
                to={url}
                // className={`flex items-center hover:text-blue-500 transition-colors justify-center`}
                className={({ isActive }) =>
                    `${
                        isActive ? "text-red-500" : "text-white"
                    } flex items-center hover:text-red-500 transition-colors justify-center`
                }
            >
                {children}
            </NavLink>
        </Typography>
    );
};

NavItem.propTypes = {
    children: PropTypes.node,
    url: PropTypes.string,
};

export default NavItem;
