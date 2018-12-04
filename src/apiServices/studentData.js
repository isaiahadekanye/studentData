import http from "./httpService";

const apiEndpoint = "";

export function getStudents() {
    return http.get(apiEndpoint);
}