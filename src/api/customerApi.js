import API from "./axios";

export const getAllCustomers = () => API.get("/customers");
export const getCustomerById = (id) => API.get(`/customers/${id}`);
export const createCustomer = (data) => API.post("/customers", data);
export const deleteCustomer = (id) => API.delete(`/customers/${id}`);