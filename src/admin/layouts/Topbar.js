import React, { Component } from 'react';
import AdminUser from '../AdminUser';

class Topbar extends Component {
  render() {
    return (
      <nav
        className="main-header navbar navbar-expand navbar-white"
        style={{
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #e0e0e0',
          padding: '0.5rem 1rem',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          zIndex: 1030,
        }}
      >
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
              style={{
                fontSize: '1.3rem',
                color: '#495057',
                transition: 'color 0.3s',
              }}
            >
              <i className="fa fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a
              href="/dashboard"
              className="nav-link"
              style={{
                color: '#495057',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s',
              }}
            >
              Home
            </a>
          </li>
        </ul>

        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Search */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
              style={{
                fontSize: '1.1rem',
                color: '#495057',
                transition: 'color 0.3s',
              }}
            >
              <i className="fa fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ borderRadius: '20px' }}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-navbar"
                      type="submit"
                      style={{
                        borderRadius: '50%',
                        backgroundColor: '#e9ecef',
                        transition: 'background-color 0.3s',
                      }}
                    >
                      <i className="fa fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                      style={{
                        borderRadius: '50%',
                        backgroundColor: '#e9ecef',
                        transition: 'background-color 0.3s',
                      }}
                    >
                      <i className="fa fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* Messages Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
              style={{ fontSize: '1.1rem', color: '#495057' }}
            >
              <i className="fa fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="/admin/dist/img/user1-128x128.jpg"
                    alt="User"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title" style={{ fontSize: '0.9rem' }}>
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fa fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>

          {/* Notifications */}
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
              style={{ fontSize: '1.1rem', color: '#495057' }}
            >
              <i className="fa fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">15 Notifications</span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fa fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fa fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fa fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>

          {/* User */}
          <li className="nav-item">
            <AdminUser />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Topbar;
