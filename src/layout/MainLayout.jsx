import { Fragment } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <Fragment>
            <Header></Header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default MainLayout;
