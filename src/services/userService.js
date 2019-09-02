import httpService from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/register";

export function register(user) {
    return httpService.post(apiEndPoint, {
        email: user.email,
        password: user.password,
        name: user.name,
        birthdate: user.birthdate
    });
}
