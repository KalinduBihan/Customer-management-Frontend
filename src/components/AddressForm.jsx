import CitySelect from "./CitySelect";
import CountrySelect from "./CountrySelect";

export default function AddressForm({ addresses, setAddresses }) {

  const update = (i, field, value) => {
    const copy = [...addresses];
    copy[i][field] = value;
    setAddresses(copy);
  };

  const remove = (i) => {
    setAddresses(addresses.filter((_, idx) => idx !== i));
  };

  return (
    <div>
      <h3>Addresses</h3>

      {addresses.map((a, i) => (
        <div key={i} style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
          
          <input placeholder="Line1"
            value={a.line1}
            onChange={(e) => update(i, "line1", e.target.value)}
          />

          <input placeholder="Line2"
            value={a.line2}
            onChange={(e) => update(i, "line2", e.target.value)}
          />

          <CitySelect
            value={a.cityId}
            onChange={(val) => update(i, "cityId", val)}
          />

          <CountrySelect
            value={a.countryId}
            onChange={(val) => update(i, "countryId", val)}
          />

          <button onClick={() => remove(i)}>Remove</button>
        </div>
      ))}

      <button onClick={() =>
        setAddresses([...addresses, { line1:"", line2:"", cityId:"", countryId:"" }])
      }>
        + Add Address
      </button>
    </div>
  );
}