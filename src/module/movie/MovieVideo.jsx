import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../utils/config";
import { useParams, useSearchParams } from "react-router-dom";

const MovieVideo = () => {
    const { id, type } = useParams();
    const [searchParams] = useSearchParams();
    let urlVideoRequest;
    if (type === "tv") {
        const season = searchParams.get("season");
        const episode = searchParams.get("episode");
        urlVideoRequest = tmdbAPI.getTvVideos(id, season, episode);
    } else {
        urlVideoRequest = tmdbAPI.getMovieMeta(id, "videos", "movie");
    }
    const { data, error } = useSWR(urlVideoRequest, fetcher);
    if (error) return;

    const videoDetail = data?.results[0];

    return (
        <div className="w-full" data-aos="zoom-out">
            <iframe
                width={"100%"}
                height="750"
                src={`https://www.youtube.com/embed/${videoDetail?.key}`}
                title={`${videoDetail?.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="object-fill"
            ></iframe>
        </div>
    );
};

export default MovieVideo;
