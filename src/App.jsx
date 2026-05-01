import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import CustomerDetails from "./pages/CustomerDetails";
import CreateCustomer from "./pages/CreateCustomer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomersPage />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
        <Route path="/create" element={<CreateCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}