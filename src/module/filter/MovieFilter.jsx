import PropTypes from "prop-types";
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Typography,
    Checkbox,
} from "@material-tailwind/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../utils/config";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

export function MovieFilter({ button }) {
    const [open, setOpen] = React.useState(false);
    const [, setSearchParams] = useSearchParams();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            movieGenres: [],
            seriesGenres: [],
        },
        mode: "onChange",
    });

    const { data: movieGenres, error: movieGenresError } = useSWR(
        tmdbAPI.getMovieGenres(),
        fetcher
    );
    const { data: seriesGenres, error: seriesGenresError } = useSWR(
        tmdbAPI.getSeriesGenres(),
        fetcher
    );

    const handleOpen = () => setOpen(!open);
    const handleFilter = (data) => {
        console.log(data);
        setSearchParams(data);
        setOpen(false);
    };

    if (movieGenresError || seriesGenresError) return;

    return (
        <>
            <Button onClick={handleOpen} variant="text" color="white">
                {button}
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Filter Movies</DialogHeader>
                <DialogBody>
                    <form
                        onSubmit={handleSubmit(handleFilter)}
                        className="flex flex-col gap-5"
                    >
                        <div>
                            <Typography className="text-base font-bold mb-3">
                                Movie Genre:
                            </Typography>
                            <div className="grid grid-cols-3 lg:grid-cols-4">
                                {movieGenres?.genres?.map((genre) => (
                                    <Checkbox
                                        key={genre?.id}
                                        ripple={false}
                                        className="hover:before:opacity-0"
                                        label={genre?.name}
                                        value={genre?.id}
                                        defaultChecked={false}
                                        {...register("movieGenres")}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Typography className="text-base font-bold mb-3">
                                Series Genre:
                            </Typography>
                            <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
                                {seriesGenres?.genres?.map((genre) => (
                                    <Checkbox
                                        key={genre?.id}
                                        ripple={false}
                                        className="hover:before:opacity-0"
                                        label={genre?.name}
                                        value={genre?.id}
                                        {...register("seriesGenres")}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button
                                variant="gradient"
                                color="green"
                                type="submit"
                            >
                                <span>Confirm</span>
                            </Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}

MovieFilter.propTypes = {
    button: PropTypes.any,
};
