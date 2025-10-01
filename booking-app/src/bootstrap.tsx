import React from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/booking";

const BookingApp = () => (
  <>
    <Routes>
      <Route path="/" element={<Booking />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="history" element={<h2>Booking History</h2>} />
    </Routes>
  </>
);

export default BookingApp;
