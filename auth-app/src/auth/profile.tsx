import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../host-app/src/components/pages/button";
import { useAppDispatch } from "host/store/hooks";
import { userLogin } from "host/host-slice/userSlice";

type User = {
  id: number;
  name: string;
  email: string;
  number: string;
};

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const storedUser = localStorage.getItem("user");
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    dispatch(userLogin(false))
    localStorage.removeItem("user");
    localStorage.removeItem("users");
    navigate("/auth/login");
  };

  if (!user) {
    return (
      <div style={styles.container}>
        <h2>No user found. Please log in.</h2>
        <Button style={styles.button} onClick={() => navigate("/auth/login")}>
          Go to Login
        </Button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Profile</h2>
      <div style={styles.card}>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "Segoe UI, Arial, sans-serif",
    textAlign: "center" as const,
  },
  card: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#007bff",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
};

export default ProfilePage;
