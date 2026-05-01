import { useEffect, useState } from "react";
import { getCustomerById } from "../api/customerApi";
import { getAddressesByCustomer, deleteAddress } from "../api/addressApi";
import { useParams } from "react-router-dom";

export default function CustomerDetails() {
  const { id } = useParams();
  const [cust, setCust] = useState(null);
  const [addr, setAddr] = useState([]);

  useEffect(() => {
    getCustomerById(id).then(r => setCust(r.data));
    loadAddr();
  }, [id]);

  const loadAddr = () => {
    getAddressesByCustomer(id).then(r => setAddr(r.data));
  };

  if (!cust) return "Loading...";

  return (
    <div>
      <h2>{cust.name}</h2>
      <p>{cust.nic}</p>

      <h3>Phones</h3>
      {cust.mobileNumbers.map((m,i)=><div key={i}>{m}</div>)}

      <h3>Addresses</h3>
      {addr.map(a => (
        <div key={a.id}>
          {a.line1} {a.line2}
          <button onClick={() => deleteAddress(a.id).then(loadAddr)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}