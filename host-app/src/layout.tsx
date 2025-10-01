import React, { Suspense } from "react";
const Navbar = React.lazy(() => import('./components/pages/navbar'));
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <Outlet />
    </>
  );
}
