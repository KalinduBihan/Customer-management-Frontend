import API from "./axios";

export const getAllCities = () => API.get("/cities");