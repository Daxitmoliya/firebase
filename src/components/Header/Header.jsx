import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="product-admin-header shadow-lg ">
      <nav className="navbar navbar-expand-lg bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="/admin/products">
            <img src="https://themesbrand.com/lexa/layouts/assets/images/logo-dark.png" alt="" />
          </Link>
          <div className="collapse navbar-collapse" id="sidebarCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/products/add">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/products/list">
                  Product List
                </Link>
              </li>
            </ul>
          </div>
          <div className="user-profile-dropdown">
            <button
              className="btn btn-light dropdown-toggle"  type="button"
            >
              <i className="bi bi-person-circle text-dark"></i> Admin User
            </button>
            <div className="dropdown-menu" aria-labelledby="userProfileDropdown">
              <Link className="dropdown-item" to="/admin/profile">
                <i className="bi bi-person"></i> Profile
              </Link>
              <Link className="dropdown-item" to="/admin/settings">
                <i className="bi bi-gear"></i> Settings
              </Link>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" onClick={() => console.log('Logout clicked')}>
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
