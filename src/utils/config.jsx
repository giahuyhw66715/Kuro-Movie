export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "3c11460497b03cb9a61a4670ffcf6c9e";
const tmdbEndpoint = `https://api.themoviedb.org/3`;
export const tmdbAPI = {
    getMovieList: (item, type = "movie", page = 1) =>
        `${tmdbEndpoint}/${type}/${item}?api_key=${apiKey}&page=${page}`,
    getMovieDetails: (movieId, type = "movie") =>
        `${tmdbEndpoint}/${type}/${movieId}?api_key=${apiKey}`,
    discoverMovie: ({ query, type = "movie", page = 1 }) =>
        `${tmdbEndpoint}/discover/${type}?${query}&api_key=${apiKey}&page=${page}`,
    getMovieMeta: (movieId, meta, type = "movie") =>
        `${tmdbEndpoint}/${type}/${movieId}/${meta}?api_key=${apiKey}`,
    getTvVideos: (seriesId, seasonNumber, episodeNumber) =>
        `${tmdbEndpoint}/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/videos?api_key=${apiKey}`,
    getMovieSearch: (query, page = 1) =>
        `${tmdbEndpoint}/search/multi?query=${query}&page=${page}&api_key=${apiKey}`,
    getCountries: () =>
        `${tmdbEndpoint}/configuration/countries?api_key=${apiKey}`,
    getMovieReviews: (type, movieId) =>
        `${tmdbEndpoint}/${type}/${movieId}/reviews?api_key=${apiKey}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
    getMovieGenres: () => `${tmdbEndpoint}/genre/movie/list?api_key=${apiKey}`,
    getSeriesGenres: () => `${tmdbEndpoint}/genre/tv/list?api_key=${apiKey}`,
};
