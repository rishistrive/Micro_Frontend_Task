import React from "react";
import Modal from "host/components/pages/Modal";
import Input from "host/components/pages/Input";
import Button from "host/components/pages/Button";

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (user: { name: string; email: string; number: string; createdAt: string }) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ open, onClose, onAdd }) => {
  const initialValue = { name: "", email: "", number: "", createdAt: new Date().toLocaleString() };
  const [initialField, setInitialField] = React.useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInitialField({ ...initialField, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(initialField);
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    localStorage.setItem("users", JSON.stringify([...existingUsers, initialField]));
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
      <h2 style={{ marginBottom: 18, fontSize: "1.3rem", fontWeight: 600 }}>Add New User</h2>
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
        <Button type="submit">Add User</Button>
      </form>
    </Modal>
  );
};

export default AddUserModal;
