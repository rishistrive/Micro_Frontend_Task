import React from "react";
import { Routes, Route } from "react-router-dom";
import Reporting from "./components/reporting";

const ReportingApp = () => (
  <>
    <Routes>
      <Route path="/" element={<Reporting/>} />
      <Route path="/report" element={<Reporting/>} />
      <Route path="details" element={<h2>Details Report</h2>} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />

    </Routes>
  </>
);

export default ReportingApp;
