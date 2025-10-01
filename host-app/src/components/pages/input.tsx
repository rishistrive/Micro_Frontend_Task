
import React from "react";


interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
  required?: boolean;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder, value, onChange, options, required = false, style }) => (
  <div style={{ ...inputWrapper, ...style }}>
    {type === "select" ? (
      <select name={name} value={value} onChange={onChange} style={select as React.CSSProperties} required={required}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={input as React.CSSProperties}
        required={required}
      />
    )}
  </div>
);

export default Input;

const inputWrapper = {
  display: "flex",
  flexDirection: "column" as const,
  marginBottom: "10px",
};

const input = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  outline: "none",
};

const select = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  outline: "none",
};