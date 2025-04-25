export default function ConversorInput({
  label,
  value,
  onChange,
  placeholder,
}) {
  return (
    <label className="flex flex-col">
      {label}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border p-2 rounded"
        placeholder={placeholder}
      />
    </label>
  );
}
