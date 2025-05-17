import React from "react";
import "./Navbar.css";
import { FaBell, FaUser, FaChevronDown } from "react-icons/fa";

const menuItems = [
  {label:"Dashboard", link:"/"},
  { label: "Students", subItems: [
      { label: "Add Student", link: "/students/add" },
      { label: "View Students", link: "/students/view" },
      { label: "Student Reports", link: "/students/reports" }
    ]
  },
  { label: "Admissions", subItems: [
      { label: "New Admission", link: "/admissions/new" },
      { label: "View Admissions", link: "/admissions/view" }
    ]
  },
  { label: "Teachers", subItems: [
      { label: "Add Teacher", link: "/teachers/add" },
      { label: "View Teachers", link: "/teachers/view" }
    ]
  },
  { label: "Master", subItems: [
      { label: "Classes", link: "classesEdit" },
      { label: "session", link: "sessionEdit" },
      { label: "Fee", link: "/master/fee" }
    ]
  },
  { label: "Fee", subItems: [
      { label: "Fee Structure", link: "feeEdit" },
      { label: "Collect Fee", link: "/fee/collect" }
    ]
  },
  { label: "Administration", subItems: [
      { label: "Users", link: "/admin/users" },
      { label: "Roles", link: "/admin/roles" }
    ]
  },
  { label: "Certificate", subItems: [
      { label: "Generate", link: "/certificate/generate" },
      { label: "View", link: "/certificate/view" }
    ]
  },
  { label: "Settings", subItems: [
      { label: "Profile", link: "/settings/profile" },
      { label: "Preferences", link: "/settings/preferences" }
    ]
  }
];

const Navbar = () => (
  <>
  <nav className="navbar">
    <div className="navbar-inner">
      <img src='../images/ugterp_logo.png' alt="Logo" className="logo" />
      <ul className="nav-list">
        {menuItems.map((item, idx) => (
          <li className="nav-item" key={idx}>
            <a href={item.link || '#'} className="nav-link">
              {item.label}
              {item.subItems && <FaChevronDown className="chevron" />}
            </a>
            {item.subItems && (
              <ul className="dropdown">
                {item.subItems.map((sub, subIdx) => (
                  <li className="dropdown-item" key={subIdx}>
                    <a href={sub.link} className="dropdown-link">{sub.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="icon-container">
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </div>
  </nav>

  </>
);

export default Navbar;
