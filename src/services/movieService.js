import httpService from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/movies";

function movieUrl(id) {
    return `${apiEndPoint}/${id}`;
}

export function getMovies() {
    return httpService.get(apiEndPoint);
}

export function getMovie(movieId) {
    return httpService.get(movieUrl(movieId));
}
// not done yet
export function saveMovie(movie) {
    if (movie._id) {
        const body = { ...movie };
        delete body._id;
        return httpService.put(movieUrl(movie._id), body);
    }
    return httpService.post(apiEndPoint, movie);
}
//
export function deleteMovie(movieId) {
    return httpService.delete(movieUrl(movieId));
}