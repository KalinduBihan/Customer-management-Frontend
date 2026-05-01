import { useEffect, useState } from "react";
import { getAllCities } from "../api/cityApi";

export default function CitySelect({ value, onChange }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getAllCities().then(res => setCities(res.data));
  }, []);

  return (
    <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
      <option value="">Select City</option>
      {cities.map(c => (
        <option key={c.id} value={c.id}>{c.name}</option>
      ))}
    </select>
  );
}