import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countryApi";

export default function CountrySelect({ value, onChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then(res => setCountries(res.data));
  }, []);

  return (
    <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
      <option value="">Select Country</option>
      {countries.map(c => (
        <option key={c.id} value={c.id}>{c.name}</option>
      ))}
    </select>
  );
}