import { useEffect, useState } from "react";
import { getAllCustomers, deleteCustomer } from "../api/customerApi";
import { useNavigate } from "react-router-dom";

export default function CustomersPage() {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  const load = async () => {
    const res = await getAllCustomers();
    setData(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h1>Customers</h1>

      <button onClick={() => nav("/create")}>Add</button>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>NIC</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.nic}</td>
              <td>
                <button onClick={() => nav(`/customer/${c.id}`)}>View</button>
                <button onClick={() => deleteCustomer(c.id).then(load)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}