import { deleteAddress } from "../api/addressApi";

function AddressList({ addresses, refresh }) {

  const handleDelete = async (id) => {
    if (confirm("Delete this address?")) {
      await deleteAddress(id);
      refresh(); // reload data from parent
    }
  };

  return (
    <div>
      <h3>Addresses</h3>

      {form.addresses.map((addr, index) => (
  <div key={index} style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
    
    <input
      placeholder="Line 1"
      value={addr.line1}
      onChange={(e) => {
        const updated = [...form.addresses];
        updated[index].line1 = e.target.value;
        setForm({ ...form, addresses: updated });
      }}
    />

    <input
      placeholder="Line 2"
      value={addr.line2}
      onChange={(e) => {
        const updated = [...form.addresses];
        updated[index].line2 = e.target.value;
        setForm({ ...form, addresses: updated });
      }}
    />

    {/* City */}
    <CitySelect
      value={addr.cityId}
      onChange={(val) => {
        const updated = [...form.addresses];
        updated[index].cityId = val;
        setForm({ ...form, addresses: updated });
      }}
    />

    {/* Country */}
    <CountrySelect
      value={addr.countryId}
      onChange={(val) => {
        const updated = [...form.addresses];
        updated[index].countryId = val;
        setForm({ ...form, addresses: updated });
      }}
    />

    <button onClick={() => {
      const updated = form.addresses.filter((_, i) => i !== index);
      setForm({ ...form, addresses: updated });
    }}>
      Remove
    </button>

      </div>
    ))}
    </div>
  );
}

export default AddressList;