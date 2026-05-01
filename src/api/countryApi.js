import API from "./axios";

export const getAllCountries = () => API.get("/countries");