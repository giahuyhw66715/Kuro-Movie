import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "react-router-dom";

export function Pagination({ totalPages, page, setPage }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const next = () => {
        if (page === totalPages) return;
        setPage(page + 1);
        const updateQuery = { page: page + 1 };
        if (searchParams.get("movieGenres")) {
            setSearchParams({
                ...updateQuery,
                movieGenres: searchParams.get("movieGenres"),
            });
        } else if (searchParams.get("seriesGenres")) {
            setSearchParams({
                ...updateQuery,
                seriesGenres: searchParams.get("seriesGenres"),
            });
        }
    };

    const prev = () => {
        if (page === 1) return;
        setPage(page - 1);
        // setSearchParams({ page: page - 1 });
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                variant="text"
                className="flex items-center gap-2"
                color="white"
                onClick={prev}
                disabled={page === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                Previous
            </Button>
            <Button
                variant="text"
                color="white"
                className="flex items-center gap-2"
                onClick={next}
                disabled={page === totalPages || page > 500}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}

Pagination.propTypes = {
    page: PropTypes.any,
    setPage: PropTypes.func,
    setSearchParams: PropTypes.func,
    totalPages: PropTypes.number,
};
