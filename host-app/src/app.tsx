import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectUserLoggedIn } from "./host-slice/userSlice";
import Layout from "./layout";
import { AuthApp, BookingApp, ReportingApp } from "./components/remote";
import ErrorBoundary from "./components/error-boundary";

function App() {
  const isLoggedIn: boolean = useAppSelector(selectUserLoggedIn);

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              isLoggedIn ? (
                <Navigate to="/auth/user" replace />
              ) : (
                <Navigate to="/auth/login" replace />
              )
            }
          />

          <Route
            path="/auth/*"
            element={
              <ErrorBoundary fallback={<div>Failed to load Auth</div>}>
                <Suspense fallback={<div>Loading Auth...</div>}>
                  <AuthApp />
                </Suspense>
              </ErrorBoundary>
            }
          />

          <Route
            path="/booking/*"
            element={
              <ErrorBoundary fallback={<div>Failed to load Booking</div>}>
                <Suspense fallback={<div>Loading Booking...</div>}>
                  <BookingApp />
                </Suspense>
              </ErrorBoundary>
            }
          />

          <Route
            path="/report/*"
            element={
              <ErrorBoundary fallback={<div>Failed to load Reporting</div>}>
                <Suspense fallback={<div>Loading Reporting...</div>}>
                  <ReportingApp />
                </Suspense>
              </ErrorBoundary>
            }
          />

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
