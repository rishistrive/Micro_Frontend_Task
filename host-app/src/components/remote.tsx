import React from "react";

 export const AuthApp = React.lazy(async () => {
    try {
      const mod = await import("auth/AuthApp");
      return mod.default ? mod : { default: () => <div>Auth module not available</div> };
    } catch (err) {
      console.error("Failed to load Auth remote:", err);
      return { default: () => <div>Auth app is unavailable. Please start the port.</div> };
    }
  });

  export const BookingApp = React.lazy(async () => {
    try {
      const mod = await import("booking/BookingApp");
      return mod.default ? mod : { default: () => <div>Booking module not available</div> };
    } catch (err) {
      console.error("Failed to load Booking remote:", err);
      return { default: () => <div> Booking app is unavailable. Please start the port.</div> };
    }
  });

  export const ReportingApp = React.lazy(async () => {
    try {
      const mod = await import("reporting/ReportingApp");
      return mod.default ? mod : { default: () => <div>Reporting module not available</div> };
    } catch (err) {
      console.error("Failed to load Reporting remote:", err);
      return { default: () => <div>Reporting app is unavailable. Please start the port.</div> };
    }
  });
