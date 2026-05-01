import { useState } from "react";
import { createCustomer } from "../api/customerApi";
import { useNavigate } from "react-router-dom";
import AddressForm from "../components/AddressForm";

export default function CreateCustomer() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    nic: "",
    mobileNumbers: [""],
    addresses: [{ line1:"", line2:"", cityId:"", countryId:"" }],
    familyMemberIds: []
  });

  const submit = async (e) => {
    e.preventDefault();
    await createCustomer(form);
    nav("/");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      
      <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow w-full max-w-xl">

        <h2 className="text-xl font-bold mb-4">Create Customer</h2>

        <input
          placeholder="Name"
          className="w-full border p-2 rounded mb-3"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          type="date"
          className="w-full border p-2 rounded mb-3"
          onChange={(e)=>setForm({...form,dateOfBirth:e.target.value})}
        />

        <input
          placeholder="NIC"
          className="w-full border p-2 rounded mb-4"
          onChange={(e)=>setForm({...form,nic:e.target.value})}
        />

        <AddressForm
          addresses={form.addresses}
          setAddresses={(a)=>setForm({...form,addresses:a})}
        />

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Save Customer
        </button>

      </form>
    </div>
  );
}