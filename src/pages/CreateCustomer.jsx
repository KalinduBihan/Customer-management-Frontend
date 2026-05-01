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
    <form onSubmit={submit}>
      <h2>Create Customer</h2>

      <input placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input type="date"
        onChange={(e)=>setForm({...form,dateOfBirth:e.target.value})}
      />

      <input placeholder="NIC"
        onChange={(e)=>setForm({...form,nic:e.target.value})}
      />

      <AddressForm
        addresses={form.addresses}
        setAddresses={(a)=>setForm({...form,addresses:a})}
      />

      <button type="submit">Save</button>
    </form>
  );
}