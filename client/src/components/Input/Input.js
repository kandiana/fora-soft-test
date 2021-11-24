import './Input.css';

export const Input = ({
  id,
  name,
  value,
  type = 'text',
  placeholder = '',
  required = false,
  onChange,
}) => {
  return (
    <input
      className="Input"
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};
