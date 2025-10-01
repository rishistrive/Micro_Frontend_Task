import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", style }) => (
  <button type={type} onClick={onClick} style={{
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "1rem",
    boxShadow: "0 2px 6px rgba(37,99,235,0.08)",
    transition: "background 0.2s",
    ...style
  }}>
    {children}
  </button>
);

export default Button;
