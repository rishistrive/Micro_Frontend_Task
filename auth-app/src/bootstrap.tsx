import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./auth/users";
import Login from "./auth/login";
import ProfilePage from "./auth/profile";

const AuthApp = () => (
  <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<Users />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  </>
);

export default AuthApp;
