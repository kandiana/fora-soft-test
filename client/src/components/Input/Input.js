import './Input.css';

export const Input = ({
  id,
  name,
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
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};
