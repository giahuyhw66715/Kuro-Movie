import PropTypes from "prop-types";
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";

const Dropdown = ({ button, children }) => {
    return (
        <Menu>
            <MenuHandler>
                <Button>{button}</Button>
            </MenuHandler>
            <MenuList>{children}</MenuList>
        </Menu>
    );
};

Dropdown.propTypes = {
    button: PropTypes.any,
    children: PropTypes.node,
};

export default Dropdown;
