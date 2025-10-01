
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "host/store/hooks";
import { addBooking, BookingInterface, selectBookingList,deleteBooking } from "host/host-slice/bookingSlice";
import Table from "host/components/pages/Table";
import Button from "host/components/pages/Button";
import AddBookingModal from "./models/add-booking";




const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Customer Name" },
    { key: "email", label: "Customer Email" },
    { key: "number", label: "Customer Number" },
    { key: "createdAt", label: "Created At" },
];

export default function Booking() {

    const dispatch = useAppDispatch();
    const bookings = useAppSelector(selectBookingList)
    
    const [modelOpen, setModalOpen] = React.useState(false)


   const handleDelete = (row: BookingInterface) => {
  dispatch(deleteBooking(row));
};
    const handleAddUser = (user: any) => {
        const newUser: BookingInterface = {
            id: bookings.length + 1,
            ...user,
        };
        dispatch(addBooking(newUser))
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={styles.title}>Booking Table</h2>
                    <Button onClick={() => setModalOpen(true)}>Add Booking</Button>
                </div>
                <Table columns={columns} data={bookings} onAction={handleDelete} actionLabel="Delete" />

            </div>
            {modelOpen &&
                <AddBookingModal
                    open={modelOpen}
                    onClose={() => setModalOpen(false)}
                    onAdd={handleAddUser}
                />}

        </div>


    );
}
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