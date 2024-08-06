import { Fragment, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

import "swiper/css";
import MovieDetailPage from "./pages/MovieDetailPage";

const App = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Fragment>
            <Suspense>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/:type/:query?" element={<MoviePage />} />
                        <Route
                            path="/:type/:id/:title"
                            element={<MovieDetailPage />}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
};

export default App;
