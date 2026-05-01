import API from "./axios";

export const getAddressesByCustomer = (id) =>
  API.get(`/addresses/customer/${id}`);

export const deleteAddress = (id) =>
  API.delete(`/addresses/${id}`);