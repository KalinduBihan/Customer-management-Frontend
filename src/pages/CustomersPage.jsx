import { useEffect, useState } from "react";
import { getAllCustomers, deleteCustomer } from "../api/customerApi";
import { useNavigate } from "react-router-dom";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const nav = useNavigate();

  const load = async () => {
    const res = await getAllCustomers();
    setCustomers(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>
        <button
          onClick={() => nav("/create")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          + Add Customer
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">NIC</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map(c => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">{c.nic}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => nav(`/customer/${c.id}`)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                  <button
                    onClick={() => deleteCustomer(c.id).then(load)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}