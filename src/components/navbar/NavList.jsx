import NavItem from "./NavItem";

const NavList = () => {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <NavItem url="/">Home</NavItem>
            <NavItem url="/movie">Movies</NavItem>
            <NavItem url="/tv">TV Series</NavItem>
        </ul>
    );
};

export default NavList;
