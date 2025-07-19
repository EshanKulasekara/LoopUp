import '../styles/Field.css'

export default function Field({ label, type = "text", value, onChange, placeholder = "" }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}