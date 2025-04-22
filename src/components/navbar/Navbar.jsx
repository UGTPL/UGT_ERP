// Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ onToggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsSearchOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="sidebar-toggle" onClick={onToggleSidebar}>
          ☰
        </button>
        <div className="logo">ERP</div>
      </div>

      <div className={`search-container ${isSearchOpen ? "active" : ""}`}>
        <input type="text" placeholder="Search..." className="search-input" />
        <button
          className="mobile-search-toggle"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          🔍
        </button>
      </div>

      <div className="navbar-right">
        <button className="notification-btn">
          🔔 <span className="badge">3</span>
        </button>

        <div className="account-menu">
          <button
            className="account-toggle"
            onClick={() => setIsAccountOpen(!isAccountOpen)}
          >
            <img src="account.jpeg" alt="Account" className="avatar" />
            {!isMobile && <span></span>}
          </button>

          {isAccountOpen && (
            <div className="account-dropdown">
              <a href="#profile">Profile</a>
              <a href="#settings">Settings</a>
              <a href="#logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
