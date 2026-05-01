import { useEffect, useState } from "react";
import { getCustomerById } from "../api/customerApi";
import { getAddressesByCustomer, deleteAddress } from "../api/addressApi";
import { useParams } from "react-router-dom";

export default function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getCustomerById(id).then(r => setCustomer(r.data));
    loadAddresses();
  }, [id]);

  const loadAddresses = () => {
    getAddressesByCustomer(id).then(r => setAddresses(r.data));
  };

  if (!customer) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-bold mb-2">{customer.name}</h2>
        <p className="text-gray-600">NIC: {customer.nic}</p>
        <p className="text-gray-600">DOB: {customer.dateOfBirth}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="font-semibold mb-2">Mobile Numbers</h3>
        <div className="flex flex-wrap gap-2">
          {customer.mobileNumbers.map((m, i) => (
            <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Addresses</h3>

        {addresses.map(a => (
          <div key={a.id} className="border p-4 rounded-lg mb-3 flex justify-between">
            <div>
              <p className="font-medium">{a.line1}</p>
              <p className="text-gray-600">{a.line2}</p>
              <p className="text-sm text-gray-500">
                City ID: {a.cityId} | Country ID: {a.countryId}
              </p>
            </div>

            <button
              onClick={() => deleteAddress(a.id).then(loadAddresses)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}