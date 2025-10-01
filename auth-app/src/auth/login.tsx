
import React from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../../host-app/src/components/pages/input";
import { useNavigate } from "react-router-dom";
import Input from "../../../host-app/src/components/pages/input";
import Button from "../../../host-app/src/components/pages/button";
import { useAppDispatch } from "host/store/hooks";
import { userLogin } from "host/host-slice/userSlice";

interface LoginValues {
  name: string;
  email: string;
  password: string;
}

interface FieldType {
  name: string;
  type: string;
  placeholder: string;
  options?: string[];
}

const loginFields: FieldType[] = [
  { name: "name", type: "text", placeholder: "Username" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "password", type: "password", placeholder: "Password" },
];
const loginInitialValue ={
    name: "",
    email: "",
    password: "",
  }

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState<LoginValues>(loginInitialValue);
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement |  HTMLSelectElement> ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    setForm(loginInitialValue);
    dispatch(userLogin(true))
    
    navigate("/auth/user");
  };

  return (
    <div style={styles.container as React.CSSProperties}>
      <h2 style={styles.title as React.CSSProperties}>Login</h2>
      <form style={styles.form as React.CSSProperties} onSubmit={handleSubmit} autoComplete="off">
     {loginFields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={form[field.name as keyof LoginValues]}
          onChange={handleChange}
          required
        />
      ))}

      <Button type="submit" style={styles.button as React.CSSProperties}> Login</Button>

      </form>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    textAlign: "center" as const,
    fontFamily: "Segoe UI, Arial, sans-serif",
    background: "#fff",
    padding: "32px 28px 28px 28px",
    borderRadius: "10px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    border: "1px solid #eaeaea",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "18px",
    color: "#222",
    fontWeight: 600,
    letterSpacing: "0.5px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "18px",
    alignItems: "stretch",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column" as const,
    textAlign: "left" as const,
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
    transition: "border-color 0.2s",
    marginBottom: "2px",
    background: "#f9f9f9",
  },
  button: {
    padding: "12px",
    fontSize: "1rem",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 500,
    marginTop: "10px",
    boxShadow: "0 2px 6px rgba(37,99,235,0.08)",
    transition: "background 0.2s",
  },
};