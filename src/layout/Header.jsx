import PropTypes from "prop-types";
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Input,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import NavList from "../components/navbar/NavList";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

const Search = ({ formClassName }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleSearch = (data) => {
        navigate(`/search/${data.search}`);
    };
    return (
        <form
            className={formClassName}
            onSubmit={handleSubmit(handleSearch)}
            autoComplete="off"
        >
            <Input
                type="text"
                placeholder="Search..."
                className="bg-white bg-opacity-20 border-none rounded-full text-white placeholder:text-gray-500 placeholder:opacity-100 "
                labelProps={{
                    className: "hidden",
                }}
                icon={<MagnifyingGlassIcon className="h-4 w-4" />}
                {...register("search")}
            />
        </form>
    );
};

Search.propTypes = {
    formClassName: PropTypes.string,
};

export function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="max-w-full border-none rounded-none px-6 lg:px-14 bg-dark text-white">
            <div className="flex items-center justify-between">
                <div className="w-full max-w-40">
                    <NavLink to={"/"}>
                        <img
                            src="https://www.kurogames.com/_nuxt/img/logo.9460104.png"
                            alt=""
                            className="w-full h-full object-cover hidden lg:block"
                        />
                        <Typography
                            className="p-1 font-semibold lg:hidden"
                            variant="small"
                        >
                            Kuro Film
                        </Typography>
                    </NavLink>
                </div>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div></div>
                <Search formClassName="w-80 lg:block hidden" />
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <Search formClassName="pt-5 pb-3" />
                <NavList />
            </Collapse>
        </Navbar>
    );
}
