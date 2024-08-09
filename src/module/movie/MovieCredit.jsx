import { fetcher, tmdbAPI } from "../../utils/config";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const MovieCredit = () => {
    const { id, type } = useParams();
    const { data, error } = useSWR(
        tmdbAPI.getMovieMeta(id, "credits", type),
        fetcher
    );
    if (error) return;
    if (!data || data?.cast?.length === 0) return;

    return (
        <div className="flex items-center gap-x-10 my-5" data-aos="fade-up">
            {data?.cast?.slice(0, 4).map((cast) => (
                <div
                    className="flex items-center flex-col gap-y-3"
                    key={cast?.id}
                >
                    <img
                        src={tmdbAPI.imageOriginal(cast?.profile_path)}
                        alt={cast?.name}
                        className="rounded-full w-20 h-20 object-cover"
                    />
                    <Typography variant="small">{cast?.name}</Typography>
                </div>
            ))}
        </div>
    );
};

export default MovieCredit;
