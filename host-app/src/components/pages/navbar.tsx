import React, { useEffect } from "react";
import { NavLink } from "react-router-dom"; // use NavLink instead of Link
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectUserLoggedIn, userLogin } from "../../host-slice/userSlice";

const Header = () => {
  const isLoggedIn = useAppSelector(selectUserLoggedIn);
  const dispatch = useAppDispatch();
  const navItems = [
    { path: "/auth/user", label: "User" },
    { path: "/booking", label: "Booking" },
    { path: "/report", label: "Analytics & Charts" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      dispatch(userLogin(true));
    }
  }, [dispatch]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink to="/" style={{textDecoration:'none'}}>
            <span className="brand-name">Micro Frontend</span>
          </NavLink>
        </div>

        <div className="navbar-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-right">
          {isLoggedIn ? (
            <NavLink to="/auth/profile" style={{textDecoration:'none'}}>
              <span className="user-name">Profile</span>
            </NavLink>
          ) : (
            <NavLink to="/auth/login">
              <span className="user-name" style={{textDecoration:'none'}}>Login</span>
            </NavLink>
          )}
        </div>
      </nav>

      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 1.5rem;
            background-color: #ffffff;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          }

          .navbar-left {
            display: flex;
            align-items: center;
          }

          .brand-name {
            font-weight: bold;
            font-size: 1.25rem;
            color: #333333;
            text-decoration :none;
          }

          .navbar-center {
            display: flex;
            gap: 1.5rem;
          }
          .nav-link {
            text-decoration: none;
            color: #555555;
            font-weight: 500;
            transition: color 0.2s;
          }
          .nav-link:hover {
            color: #007bff;
          }
          .nav-link.active {
            color: #007bff;
            font-weight: 600;
            border-bottom: 2px solid #007bff;
          }
          .navbar-right {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .user-name {
            font-weight: 500;
            color: #333333;
          }
        `}
      </style>
    </>
  );
};

export default Header;
