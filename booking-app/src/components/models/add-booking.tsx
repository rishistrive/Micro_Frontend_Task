import React from "react";
import Modal from "host/components/pages/Modal";
import Input from "host/components/pages/Input";
import Button from "host/components/pages/Button";


interface AddBookingModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (user: { name: string; email: string; number: string; createdAt: string }) => void;
}

const AddBookingModal: React.FC<AddBookingModalProps> = ({ open, onClose, onAdd }) => {
  const initialValue = { name: "", email: "", number: "", createdAt: new Date().toLocaleString() };
  const [initialField, setInitialField] = React.useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInitialField({ ...initialField, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(initialField);
  
    setInitialField(initialValue);
    onClose();
  };

  const inputFields = [
    { name: "name", type: "text", placeholder: "Username", value: initialField.name },
    { name: "email", type: "email", placeholder: "Email", value: initialField.email },
    { name: "number", type: "text", placeholder: "Number", value: initialField.number },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <h2 style={{ marginBottom: 18, fontSize: "1.3rem", fontWeight: 600 }}>Booking User</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {inputFields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            onChange={handleChange}
            required
          />
        ))}
        <Button type="submit">Booking</Button>
      </form>
    </Modal>
  );
};

export default AddBookingModal;

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    maxWidth: "980px",
    margin: "40px auto",
    padding: "0 16px",
    fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
    color: "#222",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: 10,
    boxShadow: "0 6px 20px rgba(16,24,40,0.06)",
  },
  title: {
    margin: 0,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: 600,
    color: "#1f2937",
  },
  tableWrap: {
    overflowX: "auto",
  },
  noData: {
    textAlign: "center",
    color: "#9ca3af",
    fontStyle: "italic",
    padding: "18px 16px",
  },
};
