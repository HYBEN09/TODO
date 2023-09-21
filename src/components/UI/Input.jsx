function Input({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  error,
  label,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400 ${
          error ? 'border-red-500' : ''
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default Input;
